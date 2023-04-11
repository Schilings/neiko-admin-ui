import httpClient from '@/utils/axios'
import type {
  RegisteredClientPageParam,
  RegisteredClientPageVO,
  RegisteredClientInfo,
  RegisteredClientDTO
} from '@/api/authorization/client/types'
import type { ApiResult, SelectData } from '@/api/types'

/**
 * 分页查询
 * @param query 分页查询参数
 */
export function pageRegisteredClients(query?: RegisteredClientPageParam) {
  return httpClient.get<ApiResult<RegisteredClientPageVO>>('/authorization/registeredClient/registeredClientPage', {
    params: query
  })
}

export function getRegisteredClientInfo(id: number) {
  return httpClient.get<ApiResult<RegisteredClientInfo>>(`/authorization/registeredClient/${id}`)
}


export function createClient(clientCreateDto: RegisteredClientDTO) {
  return httpClient.post<ApiResult<void>>('/authorization/registeredClient', clientCreateDto)
}


export function updateClient(clientUpdateDto: RegisteredClientDTO) {
  return httpClient.put<ApiResult<void>>('/authorization/registeredClient', clientUpdateDto)
}

export function removeClient(id: number) {
  return httpClient.delete<ApiResult<void>>('/authorization/registeredClient/' + id)

}
