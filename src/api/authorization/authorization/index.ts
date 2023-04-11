import httpClient from '@/utils/axios'
import type {
  AuthorizationPageParam,
  AuthorizationPageVO
} from '@/api/authorization/authorization/types'
import type { ApiResult, SelectData } from '@/api/types'

/**
 * 分页查询
 * @param query 分页查询参数
 */
export function pageAuthorizations(query?: AuthorizationPageParam) {
  return httpClient.get<ApiResult<AuthorizationPageVO>>('/authorization/authorization/authorizationPage', {
    params: query
  })
}

export function removeAuthorization(id:number) {
  return httpClient.delete<ApiResult<AuthorizationPageVO>>('/authorization/authorization/' + id)
}
