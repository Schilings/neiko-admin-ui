<template>
  <authorization-consent-page-search :loading="tableRef?.loading" @search="searchTable" />
  <pro-table
    ref="tableRef"
    header-title="授权同意记录"
    row-key="id"
    :request="tableRequest"
    :columns="columns"
    :scroll="{ x: 1100 }"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'authorities'">
        <a-popover trigger="hover">
          <template #content>
            <div v-for="(authority, index) in record.authorities">
              <p>{{authority}}</p>
            </div>
          </template>
          <a>查看</a>
        </a-popover>
      </template>
      <template v-else-if="column.key === 'operate'">
        <a-divider type="vertical" />
        <a-popconfirm
          v-if="hasPermission('authorization:authorizationConsent:del')"
          title="确认要删除吗？"
          @confirm="handleRemove(record)"
        >
          <a href="javascript:" class="ballcat-text-danger">删除</a>
        </a-popconfirm>
      </template>

    </template>
  </pro-table>

</template>


<script setup lang="ts">
import ProTable from '#/table'
import type { ProColumns } from '#/table'
import type { ProTableInstanceExpose } from '#/table/Table'
import type { TableRequest } from '#/table/typing'
import { mergePageParam } from '@/utils/page-utils'
import { useAuthorize } from '@/hooks/permission'
import type { AuthorizationConsentPageVO, AuthorizationConsentQO } from '@/api/authorization/consent/types'
import { pageAuthorizationConsents } from '@/api/authorization/consent/index'

import { FormAction } from '@/hooks/form'
import { doRequest } from '@/utils/axios/request'
import AuthorizationConsentPageSearch from '@/views/authorization/consent/AuthorizationConsentPageSearch.vue'
import { removeAuthorizationConsent } from '@/api/authorization/consent'


// 鉴权方法
const { hasPermission } = useAuthorize()

// 表格组件引用
const tableRef = ref<ProTableInstanceExpose>()

// 查询参数
let searchParams: AuthorizationConsentQO = {}

/* 远程加载表格数据 */
const tableRequest: TableRequest = (params, sorter, filter) => {
  const pageParam = mergePageParam(params, sorter, filter)
  return pageAuthorizationConsents({ ...pageParam, ...searchParams })
}

/* 刷新表格 */
const reloadTable = (resetPageIndex?: boolean) => {
  tableRef.value?.actionRef?.reload(resetPageIndex)
}

/* 查询表格 */
const searchTable = (params: AuthorizationConsentQO) => {
  searchParams = params
  reloadTable(true) // 会调用 tableRequest
}

const handleRemove = (record: AuthorizationConsentPageVO) => {
  doRequest(removeAuthorizationConsent(record.id), {
    successMessage: '删除成功！',
    onSuccess: () => reloadTable()
  })
}

const columns: ProColumns[] = [
  {
    title: '客户端Id',
    dataIndex: 'registeredClientId',
    sorter: true,
    width: 150,
    ellipsis: true
  },
  {
    title: '主体',
    dataIndex: 'principalName',
    sorter: true,
    width: 180,
    ellipsis: true
  },
  {
    title: '权限',
    dataIndex: 'authorities',
    sorter: true,
    width: 80
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 150,
    sorter: true
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    width: 150,
    sorter: true
  },
  // {
  //   key: 'operate',
  //   title: '操作',
  //   align: 'center',
  //   width: 50
  // }
]
</script>

<script lang="ts">
export default {
  name: 'AuthorizationConsentPage'
}
</script>
<style scoped></style>
