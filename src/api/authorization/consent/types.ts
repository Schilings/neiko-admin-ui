import type { PageParam } from '@/api/types'

export interface AuthorizationConsentQO {
  registeredClientId?: string
  principalName?: string
  startTime?: string
  endTime?: string
}

export type AuthorizationConsentPageParam = AuthorizationConsentQO & PageParam


export interface AuthorizationConsent {
  id?: number
  registeredClientId: string
  principalName: string
  authorities: string[]
  // 创建时间
  createTime: string
  // 修改时间
  updateTime: string
}


export interface AuthorizationConsentPageVO extends AuthorizationConsent {
  id: number
}


