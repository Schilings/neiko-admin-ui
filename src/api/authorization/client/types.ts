import type { PageParam } from '@/api/types'


export interface TokenSettings{
  clientId?: string
  accessTokenTimeToLive: number
  refreshTokenTimeToLive: number
  authorizationCodeTimeToLive: number
  tokenFormat: string
  reuseRefreshTokens: number
  idTokenSignatureAlgorithm: string
}

export type TokenSettingsDTO = TokenSettings
export type TokenSettingsVO = TokenSettings


export interface ClientSettings {
  clientId?: string
  requireProofKey: number
  requireAuthorizationConsent: number
  jwkSetUrl: string
  signingAlgorithm: string
}

export type ClientSettingsDTO = ClientSettings
export type ClientSettingsVO = ClientSettings



export interface RegisteredClientQO {
  clientId?: string
  clientName?: string
  clientAuthenticationMethod?: string
  authorizationGrantType?: string
  scope?: string
  startTime?: string
  endTime?: string
}

export type RegisteredClientPageParam = RegisteredClientQO & PageParam


export interface RegisteredClientInfo {
  id: number
  clientId: string
  clientIdIssuedAt: string
  clientSecret: string
  clientSecretExpiresAt: string
  clientName: string
  clientAuthenticationMethods: string[]
  authorizationGrantTypes: string[]
  redirectUris: string[]
  scopes: string[]
  clientSettings: ClientSettingsVO
  tokenSettings: TokenSettingsVO
}


export interface RegisteredClientPageVO {
  id?: number
  clientId: string
  clientIdIssuedAt: string
  clientSecret: string
  clientSecretExpiresAt: string
  clientName: string
  clientAuthenticationMethods: string[]
  authorizationGrantTypes: string[]
  redirectUris: string[]
  scopes: string
  createTime: string
  updateTime: string
}


export interface RegisteredClientDTO {
  id?: number
  clientId: string
  clientIdIssuedAt?: string
  clientSecret: string
  clientSecretExpiresAt?: string
  clientName: string
  clientAuthenticationMethods: string[]
  authorizationGrantTypes: string[]
  redirectUris: string[]
  scopes: string[]
  clientSettings?: ClientSettingsDTO
  tokenSettings?: TokenSettingsDTO
}


