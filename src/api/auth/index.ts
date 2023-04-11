import httpClient from '@/utils/axios'
import type {
  OAuth2LoginParam,
  OAuth2LogoutParam,
  AccountLoginParam,
  MobileLoginParam,
  LoginResult, RefreshTokenLoginParam
} from '@/api/auth/types'


// Base64(clientId:clientSecret)
// const BASIC_AUTHORIZATION = 'Basic bm8tY2FwdGNoYTpuby1jYXB0Y2hh'
//const BASIC_AUTHORIZATION = 'Basic dGVzdDp0ZXN0' ////test:test
const BASIC_AUTHORIZATION = 'Basic dWk6dWk=' //ui:ui

/**
 * 账号密码登录
 * @param parameter
 */
export function accountLogin(parameter: AccountLoginParam) {
  return login(Object.assign({ grant_type: 'password' }, parameter))
}

/**
 * 手机号登录
 * @param parameter
 */
export function mobileLogin(parameter: MobileLoginParam) {
  return login(Object.assign({ grant_type: 'mobile' }, parameter))
}

/**
 * 手机号登录
 * @param parameter
 */
export function refreshLogin(parameter: RefreshTokenLoginParam) {
  return login(Object.assign({ grant_type: 'refresh_token' }, parameter))
}

/**
 * 登录
 * @param parameter 登录参数
 */
function login(parameter: OAuth2LoginParam) {
  return httpClient.request<LoginResult>({
    url: '/oauth2/token',
    method: 'POST',
    headers: {
      Authorization: BASIC_AUTHORIZATION //test:test
    },
    params: parameter
  })
}



/**
 * 校验 token
 * @param token accessToken
 */
export function tokenIntrospect(token: string) {
  return httpClient.request({
    url: '/oauth2/introspect',
    method: 'POST',
    headers: {
      Authorization: BASIC_AUTHORIZATION
    },
    params: { token: token }
  })
}

/**
 * 登出
 */
export function logout(token:string) {
  return httpClient.request<LoginResult>({
    url: '/oauth2/revoke',
    method: 'POST',
    headers: {
      Authorization: BASIC_AUTHORIZATION
    },
    params: { token: token }
  })
}


