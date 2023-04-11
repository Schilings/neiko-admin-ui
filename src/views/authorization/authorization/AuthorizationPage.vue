<template>
  <authorization-page-search :loading="tableRef?.loading" @search="searchTable" />
  <pro-table
    ref="tableRef"
    header-title="授权记录"
    row-key="id"
    :request="tableRequest"
    :columns="columns"
    :scroll="{ x: 1100 }"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'state'">
        <a-popover trigger="hover">
          <template #content>
            <p>{{record.state}}</p>
          </template>
          <a>查看</a>
        </a-popover>
      </template>
      <template v-else-if="column.key === 'authorizationCodeValue'">
        <a-popover trigger="hover">
          <template #content>
            <p>{{record.authorizationCodeValue}}</p>
          </template>
          <a>查看</a>
        </a-popover>
      </template>
      <template v-else-if="column.key === 'accessTokenValue'">
        <a-popover trigger="hover">
          <template #content>
            <p>{{record.accessTokenValue}}</p>
          </template>
          <a>查看</a>
        </a-popover>
      </template>
      <template v-else-if="column.key === 'accessTokenScopes'">
        <a-popover trigger="hover">
          <template #content>
            <div v-for="(scope, index) in record.accessTokenScopes">
              <p>{{scope}}</p>
            </div>
          </template>
          <a>查看</a>
        </a-popover>
      </template>
      <template v-else-if="column.key === 'refreshTokenValue'">
        <a-popover trigger="hover">
          <template #content>
            <p>{{record.refreshTokenValue}}</p>
          </template>
          <a>查看</a>
        </a-popover>
      </template>
      <template v-else-if="column.key === 'oidcIdTokenValue'">
        <a-popover trigger="hover">
          <template #content>
            <p>{{record.oidcIdTokenValue}}</p>
          </template>
          <a>查看</a>
        </a-popover>
      </template>
      <template v-else-if="column.key === 'operate'">
        <a-divider type="vertical" />
        <a-popconfirm
          v-if="hasPermission('authorization:authorization:del')"
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
import type { AuthorizationPageVO, AuthorizationQO } from '@/api/authorization/authorization/types'
import { pageAuthorizations, removeAuthorization } from '@/api/authorization/authorization/index'

import { FormAction } from '@/hooks/form'
import { doRequest } from '@/utils/axios/request'
import AuthorizationPageSearch from '@/views/authorization/authorization/AuthorizationPageSearch.vue'
import { DictTag, DictText } from '@/components/Dict'


// 鉴权方法
const { hasPermission } = useAuthorize()

// 表格组件引用
const tableRef = ref<ProTableInstanceExpose>()

// 查询参数
let searchParams: AuthorizationQO = {}

/* 远程加载表格数据 */
const tableRequest: TableRequest = (params, sorter, filter) => {
  const pageParam = mergePageParam(params, sorter, filter)
  return pageAuthorizations({ ...pageParam, ...searchParams })
}

/* 刷新表格 */
const reloadTable = (resetPageIndex?: boolean) => {
  tableRef.value?.actionRef?.reload(resetPageIndex)
}

/* 查询表格 */
const searchTable = (params: AuthorizationQO) => {
  searchParams = params
  reloadTable(true) // 会调用 tableRequest
}

const handleRemove = (record: AuthorizationPageVO) => {
  doRequest(removeAuthorization(record.id), {
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
    width: 100,
    ellipsis: true
  },
  {
    title: '授权方式',
    dataIndex: 'authorizationGrantType',
    sorter: true,
    width: 150,
    // customRender: function ({ text }) {
    //   return h(DictText, { dictCode: 'grant_types', value: text })
    // }
  },
  {
    title: 'state值',
    dataIndex: 'state',
    sorter: true,
    width: 80
  },
  {
    title: '授权码',
    dataIndex: 'authorizationCodeValue',
    sorter: true,
    width: 80
  },
  {
    title: '授权码生效时间',
    dataIndex: 'authorizationCodeIssuedAt',
    sorter: true,
    width: 150
  },
  {
    title: '授权码过期时间',
    dataIndex: 'authorizationCodeExpiresAt',
    sorter: true,
    width: 150
  },
  {
    title: '访问令牌',
    dataIndex: 'accessTokenValue',
    sorter: true,
    width: 80
  },
  {
    title: '访问令牌作用域',
    dataIndex: 'accessTokenScopes',
    sorter: true,
    width: 80
  },
  {
    title: '访问令牌类型',
    dataIndex: 'accessTokenType',
    sorter: true,
    width: 80
  },
  {
    title: '访问令牌生效时间',
    dataIndex: 'accessTokenIssuedAt',
    sorter: true,
    width: 150
  },
  {
    title: '访问令牌过期时间',
    dataIndex: 'accessTokenExpiresAt',
    sorter: true,
    width: 150
  },
  {
    title: '刷新令牌',
    dataIndex: 'refreshTokenValue',
    sorter: true,
    width: 80
  },
  {
    title: '刷新令牌生效时间',
    dataIndex: 'refreshTokenIssuedAt',
    sorter: true,
    width: 150
  },
  {
    title: '刷新令牌过期时间',
    dataIndex: 'refreshTokenExpiresAt',
    sorter: true,
    width: 150
  },
  {
    title: 'ID令牌',
    dataIndex: 'oidcIdTokenValue',
    sorter: true,
    width: 80
  },
  {
    title: 'ID令牌生效时间',
    dataIndex: 'oidcIdTokenIssuedAt',
    sorter: true,
    width: 150
  },
  {
    title: 'ID令牌过期时间',
    dataIndex: 'oidcIdTokenExpiresAt',
    sorter: true,
    width: 150
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
  name: 'AuthorizationPage'
}
</script>
<style scoped></style>
