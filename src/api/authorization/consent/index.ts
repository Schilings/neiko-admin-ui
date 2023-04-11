import httpClient from '@/utils/axios'
import type {
  AuthorizationConsentPageParam,
  AuthorizationConsentPageVO
} from '@/api/authorization/consent/types'
import type { ApiResult, SelectData } from '@/api/types'

/**
 * 分页查询
 * @param query 分页查询参数
 */
export function pageAuthorizationConsents(query?: AuthorizationConsentPageParam) {
  return httpClient.get<ApiResult<AuthorizationConsentPageVO>>('/authorization/authorizationConsent/authorizationConsentPage', {
    params: query
  })
}

export function removeAuthorizationConsent(id: number) {
  return httpClient.delete<ApiResult<AuthorizationConsentPageVO>>('/authorization/authorizationConsent/' + id)
}
