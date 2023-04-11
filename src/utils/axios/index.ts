import { Modal, notification, message } from 'ant-design-vue'
import 'ant-design-vue/es/button/style/index.less'

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { ApiResult } from '@/api/types'

import { useUserStore } from '@/stores/user-store'
import { LOGIN_PATH } from '@/constants'
import router from '@/router'
import { HttpClient } from '@/utils/axios/http-client'
import { doRequest } from '@/utils/axios/request'
import { refreshLogin } from '@/api/auth'
import type { LoginResult } from '@/api/auth/types'


/** 存储登录信息 */
function store(res: LoginResult) {
  const userStore = useUserStore()
  // 存储 token
  userStore.accessToken = res.access_token
  userStore.refreshToken = res.refresh_token
  // TODO 自动登录处理？？
  const ttl = res.expires_in * 1000
  const refreshToken = res.refresh_token

  // 存储用户信息
  const info = res.info
  const attributes = res.attributes || {}
  userStore.userInfo = {
    ...info,
    roleCodes: attributes.roleCodes,
    permissions: attributes.permissions
  }
}

function devData(res:LoginResult) {
  const attributes = {
    permissions: [
      'system:dict:read', 'notify:announcement:add', 'system:config:del', 'system:menu:add', 'system:role:grant',
      'notify:announcement:edit', 'notify:announcement:read', 'system:dict:edit', 'notify:userannouncement:read',
      'system:user:edit', 'system:config:read', 'system:menu:read', 'system:organization:edit', 'system:role:edit',
      'system:organization:add', 'system:user:add', 'system:user:pass', 'system:user:read', 'notify:announcement:del',
      'system:user:del', 'i18n:i18n-data:del', 'system:role:add', 'system:dict:add', 'system:organization:read',
      'system:role:read', 'system:dict:del', 'log:operation-log:read', 'system:organization:revised', 'system:role:del',
      'system:user:grant', 'system:organization:del', 'i18n:i18n-data:export', 'system:menu:del', 'i18n:i18n-data:import',
      'system:config:add', 'i18n:i18n-data:read', 'i18n:i18n-data:edit', 'log:access-log:read', 'log:login-log:read',
      'system:config:edit', 'system:menu:edit', 'i18n:i18n-data:add',
      'authorization:registeredClient:add', 'authorization:registeredClient:edit', 'authorization:registeredClient:read','authorization:registeredClient:del',
      'authorization:authorizationConsent:read', 'authorization:authorization:read',
    ],
    roleCodes: ['ROLE_TEST', 'ROLE_ADMIN', 'ROLE_SALES_EXECUTIVE', 'ROLE_SALESMAN']
  }
  const info = {
    userId: 1,
    username: 'admin',
    nickname: '超管牛逼',
    avatar: 'sysuser/1/avatar/20200226/ab6bd5221afe4238ae4987f278758113.jpg',
    organizationId: 6,
    type: 1
  }
  res.attributes = attributes
  res.info = info
  return res
}

function loginExpired(){
  useUserStore().clean()
  if (router.currentRoute.value.path !== LOGIN_PATH) {
    // 防止重复弹出 TODO 这里拦截所有其他的 axios 的请求
    Modal.destroyAll()
    Modal.info({
      title: '系统提示',
      content: '登录状态已过期, 请退出重新登录!',
      okText: '重新登录',
      onOk: () => {
        router.push({
          path: LOGIN_PATH,
          query: { redirect: router.currentRoute.value.fullPath }
        })
      }
    })
  }
}

const onRequestFulfilled = (requestConfig: AxiosRequestConfig) => {
  const headers = requestConfig.headers || {}

  // token
  const { accessToken } = useUserStore()
  // Authorization 请求头不存在再进行追加
  if (accessToken && !headers['Authorization']) {
    // 让每个请求携带自定义 token 请根据实际情况自行修改
    headers['Authorization'] = 'Bearer ' + accessToken
  }

  // i18n
  // if (enableI18n) {
  //   const appLanguage = store.getters.lang
  //   if (appLanguage) {
  //     headers['Accept-Language'] = appLanguage
  //   }
  // }

  if (requestConfig.headers) {
    requestConfig.headers = headers
  }
  return requestConfig
}

// 响应成功处理函数
const onResponseFulfilled = (response: AxiosResponse) => {
  const headers = response.headers
  if (
    headers != null &&
    headers['content-type'] &&
    headers['content-type'].startsWith('application/json')
  ) {
    return response.data
  } else {
    return response
  }
}


// 响应失败处理函数
const onResponseRejected = (error: AxiosError) => {
  if (error.response) {
    const data = error.response.data as unknown as ApiResult
    const errorStatus = error.response.status
    switch (errorStatus) {
      case 400:
        if (router.currentRoute.value.path !== LOGIN_PATH) {
          error.resolved = true
          message.error(data.message || error.message)
        }
        break
      case 401:
        error.resolved = true
        const userStore = useUserStore()
        const refreshToken = userStore.refreshToken
        if (refreshToken) {
          console.log('refreshToken===>' + refreshToken)
          refreshLogin({ refresh_token:refreshToken} )
            .then(res => {
              res = devData(res)
              store(res)
              console.log(router.currentRoute.value)
              const nextPath = (router.currentRoute.value.path as string) || '/'
              router.push(nextPath)
            })
            .catch(err => {
              loginExpired();
            })
        }else {
          loginExpired();
        }
        break
      case 403:
        error.resolved = true
        notification.error({
          message: '没有权限访问！',
          description: data.message
        })
        break
    }
  }
  return Promise.reject(error)
}

// // 创建默认实例
// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL, // api base_url
//   timeout: import.meta.env.VITE_API_TIME_OUT // 请求超时时间
// })
//
// // 添加拦截器
// axiosInstance.interceptors.request.use(onRequestFulfilled)
// axiosInstance.interceptors.response.use(onResponseFulfilled, onResponseRejected)
//
// export default axiosInstance

const httpClient = new HttpClient({
  defaultRequestConfig: {
    baseURL: import.meta.env.VITE_API_URL, // api base_url
    timeout: import.meta.env.VITE_API_TIME_OUT // 请求超时时间
  },
  interceptorOptions: {
    onRequestFulfilled: onRequestFulfilled,
    onResponseFulfilled: onResponseFulfilled,
    onResponseRejected: onResponseRejected
  }
})

export default httpClient
