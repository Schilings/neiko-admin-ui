import type { PageParam } from '@/api/types'

export interface AuthorizationQO {
  registeredClientId?: string
  principalName?: string
  authorizationGrantType?: string
  state?: string
  authorizationCodeValue?: string
  accessTokenValue?: string
  accessTokenScopes?: string
  refreshTokenValue?: string
  oidcIdTokenValue?: string
  startTime?: string
  endTime?: string
}


export type AuthorizationPageParam = AuthorizationQO & PageParam


export interface Authorization {
  id?: number
  registeredClientId: string
  principalName: string
  authorizationGrantType: string
  state: string
  authorizationCodeValue: string
  authorizationCodeIssuedAt: string
  accessTokenValue: string
  accessTokenIssuedAt: string
  accessTokenExpiresAt: string
  accessTokenType: string
  accessTokenScopes: string[]
  refreshTokenValue: string
  refreshTokenIssuedAt: string
  refreshTokenExpiresAt: string
  oidcIdTokenValue: string
  oidcIdTokenIssuedAt: string
  oidcIdTokenExpiresAt: string
  createTime: string
  updateTime: string
}

export interface AuthorizationPageVO extends Authorization {
  id: number
}
