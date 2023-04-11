<template>
  <a-modal
    :title="title"
    :visible="visible"
    :mask-closable="false"
    width="1000px"
    :body-style="{ paddingBottom: '8px' }"
    :confirm-loading="submitLoading"
    @ok="handleSubmit"
    @cancel="handleClose"
  >

    <a-form :model="formModel" :label-col="labelCol" :wrapper-col="wrapperCol">

      <a-row :gutter="16">
        <a-col :span="12">
          <a-card title="客户端基本信息" :bordered="false">
            <a-form-item v-if="isUpdateForm" style="display: none">
              <a-input v-model:value="formModel.id" />
            </a-form-item>

            <a-form-item label="客户端ID" v-bind="validateInfos.clientId">
              <a-input v-model:value="formModel.clientId" placeholder="请输入" />
            </a-form-item>

            <a-form-item label="客户端Secret" v-bind="validateInfos.clientSecret">
              <a-input-password v-model:value="formModel.clientSecret" placeholder="请输入" />
            </a-form-item>

            <a-form-item label="客户端名称" v-bind="validateInfos.clientName">
              <a-input v-model:value="formModel.clientName" placeholder="请输入" />
            </a-form-item>

            <a-form-item label="客户端ID生效时间" v-bind="validateInfos.clientIdIssuedAt">
              <a-time-picker
                v-model:value="formModel.clientIdIssuedAt"
                value-format="YYYY-MM-DD HH:mm:ss"
                show-time
                format="YYYY-MM-DD HH:mm:ss"
                style="width: 100%"
                placeholder='请选择时间(可选)'
              />
            </a-form-item>
            <a-form-item label="客户端Secret生效时间" v-bind="validateInfos.clientSecretExpiresAt">
              <a-time-picker
                v-model:value="formModel.clientSecretExpiresAt"
                value-format="YYYY-MM-DD HH:mm:ss"
                show-time
                format="YYYY-MM-DD HH:mm:ss"
                style="width: 100%"
                placeholder='请选择时间(可选)'
              />
            </a-form-item>

            <a-form-item label="验证方式" v-bind="validateInfos.clientAuthenticationMethods">
              <a-select v-model:value="formModel.clientAuthenticationMethods" mode="multiple" placeholder="请选择">
                <a-select-option :value="'client_secret_post'">client_secret_post</a-select-option>
                <a-select-option :value="'client_secret_basic'">client_secret_basic</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item label="授权方式" v-bind="validateInfos.authorizationGrantTypes">
              <a-select v-model:value="formModel.authorizationGrantTypes" mode="multiple">
                <a-select-option :value="'authorization_code'">authorization_code</a-select-option>
                <a-select-option :value="'password'">password</a-select-option>
                <a-select-option :value="'client_credentials'">client_credentials</a-select-option>
                <a-select-option :value="'implicit'">implicit</a-select-option>
                <a-select-option :value="'refresh_token'">refresh_token</a-select-option>
                <a-select-option :value="'federated_identity'">federated_identity</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item label="作用域" v-bind="validateInfos.scopes">
              <a-select v-model:value="formModel.scopes" mode="tags">
                <a-select-option :value="'authority_info_claim'">authority_info_claim</a-select-option>
                <a-select-option :value="'user_info_claim'">user_info_claim</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item
              v-for="(redirectUri, index) in formModel.redirectUrisWithKey"
              :key="redirectUri.key"
              :wrapper-col="index === 0 ? {} : redirectUriCol"
              :label="index === 0 ? '回调地址' : ''"
              :name="['redirectUri', index, 'value']"
            >
              <a-input
                v-model:value="redirectUri.value"
                placeholder="请输入"
                style="width: 90%; margin-right: 8px"
              />
              <MinusCircleOutlined
                v-if="formModel.redirectUrisWithKey.length > 1"
                class="dynamic-delete-button"
                :disabled="formModel.redirectUrisWithKey.length === 1"
                @click="removeRedirectUri(redirectUri)"
              />
            </a-form-item>
            <a-form-item :wrapper-col="redirectUriCol">
              <a-button type="dashed" style="width: 60%" @click="addRedirectUri">
                <PlusOutlined />
                Add field
              </a-button>
            </a-form-item>

          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="客户端配置" :bordered="false" >

            <a-form-item label="验证Key" v-bind="validateInfos.requireProofKey">
              <a-radio-group v-model:value="formModel.requireProofKey" button-style="solid">
                <a-radio-button :value="0">关闭</a-radio-button>
                <a-radio-button :value="1">开启</a-radio-button>
              </a-radio-group>
            </a-form-item>

            <a-form-item label="授权同意" v-bind="validateInfos.requireAuthorizationConsent">
              <a-radio-group v-model:value="formModel.requireAuthorizationConsent" button-style="solid">
                <a-radio-button :value="0">关闭</a-radio-button>
                <a-radio-button :value="1">开启</a-radio-button>
              </a-radio-group>
            </a-form-item>

            <a-form-item label="JWKSet地址" v-bind="validateInfos.jwkSetUrl">
              <a-input v-model:value="formModel.jwkSetUrl" placeholder="请输入" />
            </a-form-item>

            <a-form-item label="签名算法" v-bind="validateInfos.signingAlgorithm">
              <a-select v-model:value="formModel.signingAlgorithm" placeholder="请选择">
                <a-select-option :value="'RS256'">RS256</a-select-option>
              </a-select>
            </a-form-item>
          </a-card>
          <a-card title="令牌配置" :bordered="false" >
            <a-form-item label="授权码有效时长" v-bind="validateInfos.authorizationCodeTimeToLive">
              <a-input-number v-model:value="formModel.authorizationCodeTimeToLive" placeholder="请输入" min="0" step="60">
                <template #addonAfter>秒</template>
              </a-input-number>
            </a-form-item>

            <a-form-item label="访问令牌有效时长" v-bind="validateInfos.accessTokenTimeToLive">
              <a-input-number v-model:value="formModel.accessTokenTimeToLive" placeholder="请输入" min="0" step="60">
                <template #addonAfter>秒</template>
              </a-input-number>
            </a-form-item>

            <a-form-item label="刷新令牌有效时长" v-bind="validateInfos.refreshTokenTimeToLive">
              <a-input-number v-model:value="formModel.refreshTokenTimeToLive" placeholder="请输入" min="0" step="60">
                <template #addonAfter>秒</template>
              </a-input-number>
            </a-form-item>

            <a-form-item label="刷新令牌复用" v-bind="validateInfos.reuseRefreshTokens">
              <a-radio-group v-model:value="formModel.reuseRefreshTokens" button-style="solid">
                <a-radio-button :value="0">关闭</a-radio-button>
                <a-radio-button :value="1">开启</a-radio-button>
              </a-radio-group>
            </a-form-item>

            <a-form-item label="令牌格式" v-bind="validateInfos.tokenFormat">
              <a-select v-model:value="formModel.tokenFormat" placeholder="请选择">
                <a-select-option :value="'reference'">REFERENCE 不透明令牌</a-select-option>
                <a-select-option :value="'self-contained'">SELF-CONTAINED JWT令牌</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="IDToken签名算法" v-bind="validateInfos.idTokenSignatureAlgorithm">
              <a-select v-model:value="formModel.idTokenSignatureAlgorithm" placeholder="请选择">
                <a-select-option :value="'RS256'">RS256</a-select-option>
              </a-select>
            </a-form-item>
          </a-card>
        </a-col>
      </a-row>


    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { useModal } from '@/hooks/modal'
import { useAdminForm, useFormAction, FormAction } from '@/hooks/form'
import type { FormRequestMapping } from '@/hooks/form'
import { overrideProperties } from '@/utils/bean-utils'
import type { Rule } from 'ant-design-vue/es/form'
import { createClient, getRegisteredClientInfo, updateClient } from '@/api/authorization/client'
import type {
  ClientSettingsDTO,
  TokenSettingsDTO,
  RegisteredClientDTO,
  RegisteredClientPageVO,
  RegisteredClientInfo
} from '@/api/authorization/client/types'
import type { ColProps } from 'ant-design-vue'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { isSuccess } from '@/api'
import dayjs from 'dayjs'


//表单的标签布局
const labelCol: ColProps = {
  sm: { span: 24 },
  md: { span: 8 }
}

// 表单元素布局
const wrapperCol: ColProps = {
  sm: { span: 24 },
  md: { span: 16 }
}

const redirectUriCol:ColProps={
  sm: { span: 24 },
  md: { offset: 8, span: 24 }
}

const emits = defineEmits<{
  (e: 'submit-success'): void
}>()

const { title, visible, openModal, closeModal } = useModal()

const { formAction, isUpdateForm } = useFormAction()

export interface RedirectUri {
  value:string
  key: Date
}


// 表单模型
const formModel = reactive<RegisteredClientDTO & Partial<ClientSettingsDTO> & Partial<TokenSettingsDTO> & {
  scopeResourceList?: number[]
  scopeResources?: string
  redirectUrisWithKey: { value: string, key: Date }[],
}>({
  id: undefined,
  clientId: '',
  clientSecret: '',
  clientName: '',
  clientAuthenticationMethods: [],
  authorizationGrantTypes: [],
  redirectUris: [],
  scopes: [],
  requireProofKey: 1,
  requireAuthorizationConsent: 1,
  jwkSetUrl: '',
  signingAlgorithm: 'RS256',

  accessTokenTimeToLive: 3600,
  refreshTokenTimeToLive: 7200,
  authorizationCodeTimeToLive: 300,
  reuseRefreshTokens: 1,
  tokenFormat: 'self-contained',
  idTokenSignatureAlgorithm: 'RS256',

  redirectUrisWithKey: [{ value: '', key: new Date() }]
})


const removeRedirectUri = (item: RedirectUri) => {
  let index = formModel.redirectUrisWithKey.indexOf(item);
  if (index !== -1) {
    formModel.redirectUris.splice(index, 1);
  }
};
const addRedirectUri = () => {
  formModel.redirectUrisWithKey.push({
    value: '',
    key: new Date()
  })
};


// 表单的校验规则
const formRule = reactive({
  clientId: [{ required: true, message: '请输入客户端ID!' }],
  clientSecret: [{ required: true, message: '请输入客户端Secret!' }],
  clientName: [{ required: true, message: '请输入客户端名称!' }],
  clientAuthenticationMethods: [{ required: true, message: '请选择验证方式!' }],
  authorizationGrantTypes: [{ required: true, message: '请选择授权方式!' }],
})

// 表单的提交请求
const formRequestMapping: FormRequestMapping<RegisteredClientDTO> = {
  [FormAction.CREATE]: createClient,
  [FormAction.UPDATE]: updateClient
}

const { submitLoading, validateAndSubmit, resetFields, validateInfos } = useAdminForm(
  formAction,
  formRequestMapping,
  formModel,
  formRule
)

/* 表单提交处理 */
const handleSubmit = () => {
  const model = { ...formModel }
  model.redirectUris = formModel.redirectUrisWithKey.map(item=>item.value)
  model.clientSettings = Object.assign({} as ClientSettingsDTO, model)
  model.tokenSettings = Object.assign({} as TokenSettingsDTO, model)
  model.scopeResources = model.scopeResourceList?.join(',')
  delete model.scopeResources
  delete model.scopeResourceList
  delete model.requireProofKey
  delete model.requireAuthorizationConsent
  delete model.jwkSetUrl
  delete model.signingAlgorithm
  delete model.accessTokenTimeToLive
  delete model.refreshTokenTimeToLive
  delete model.authorizationCodeTimeToLive
  delete model.reuseRefreshTokens
  delete model.tokenFormat
  delete model.idTokenSignatureAlgorithm
  validateAndSubmit(model, {
    onSuccess: () => {
      closeModal()
      emits('submit-success')
    }
  })
}

/* 弹窗关闭方法 */
const handleClose = () => {
  closeModal()
  submitLoading.value = false
}

defineExpose({
  open(newFormAction: FormAction, record?: RegisteredClientPageVO) {
    openModal()
    resetFields()
    if (newFormAction === FormAction.CREATE) {
      title.value = '客户端新建'
    } else {
      title.value = '客户端修改'
      getRegisteredClientInfo(record?.id).then(res => {
        const data = { ...res.data, ...res.data.clientSettings, ...res.data.tokenSettings }
        overrideProperties(formModel, data, ['redirectUris', 'clientSecret','clientSettings', 'tokenSettings'])
        //暂时设置为空
        formModel.clientSecret = ''
        formModel.redirectUrisWithKey = data.redirectUris.map(e => {
          return { value: e, key: new Date() }
        })
        if (formModel.redirectUrisWithKey.length == 0) {
          formModel.redirectUrisWithKey.push({value:'', key: new Date()})
        }
      })
      formModel.scopeResourceList = record?.scopeResources?.split(',').map(Number)
    }
    formAction.value = newFormAction
  }
})
</script>

<script lang="ts">
export default {
  name: 'RegisteredClientFormModal'
}
</script>

<style scoped></style>
