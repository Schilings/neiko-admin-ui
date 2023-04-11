<template>
  <registered-client-page-search :loading="tableRef?.loading" @search="searchTable" />
  <pro-table
    ref="tableRef"
    header-title="授权客户端管理"
    row-key="id"
    :request="tableRequest"
    :columns="columns"
    :scroll="{ x: 1100 }"
  >

    <template #toolBarRender>
      <a-button key="show" v-has="'authorization:registeredClient:add'" type="primary" @click="handleCreate">
        <plus-outlined />
        新建
      </a-button>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'clientAuthenticationMethods'">
        <div v-for="(clientAuthenticationMethod, index) in record.clientAuthenticationMethods">
          <p><a-tag color="#55acee">{{clientAuthenticationMethod}}</a-tag></p>
        </div>
      </template>
      <template v-else-if="column.key === 'authorizationGrantTypes'">
        <a-popover trigger="hover">
          <template #content>
            <div v-for="(authorizationGrantType, index) in record.authorizationGrantTypes">
              <p>{{authorizationGrantType}}</p>
            </div>
          </template>
          <a>查看</a>
        </a-popover>
      </template>
      <template v-else-if="column.key === 'redirectUris'">
        <a-popover trigger="hover">
          <template #content>
            <div v-for="(redirectUri, index) in record.redirectUris">
              <p>{{redirectUri}}</p>
            </div>
          </template>
          <a>查看</a>
        </a-popover>
      </template>
      <template v-else-if="column.key === 'scopes'">
        <a-popover trigger="hover">
          <template #content>
            <div v-for="(scope, index) in record.scopes">
              <p>{{scope}}</p>
            </div>
          </template>
          <a>查看</a>
        </a-popover>
      </template>
      <template v-else-if="column.key === 'operate'">
        <a v-has="'authorization:registeredClient:read'" @click="handleUpdate(record)">修改</a>
        <a-divider type="vertical" />
        <a-popconfirm
          v-if="hasPermission('authorization:registeredClient:del')"
          title="确认要删除吗？"
          @confirm="handleRemove(record)"
        >
          <a href="javascript:" class="ballcat-text-danger">删除</a>
        </a-popconfirm>
      </template>
    </template>
  </pro-table>

  <!-- 新建修改的表单弹窗 -->
  <registered-client-form-modal ref="registeredClientFormModalRef" @submit-success="reloadTable" />


</template>


<script setup lang="ts">
import ProTable from '#/table'
import type { ProColumns } from '#/table'
import type { ProTableInstanceExpose } from '#/table/Table'
import type { TableRequest } from '#/table/typing'
import { mergePageParam } from '@/utils/page-utils'
import { useAuthorize } from '@/hooks/permission'
import type { RegisteredClientPageVO, RegisteredClientQO } from '@/api/authorization/client/types'
import { pageRegisteredClients, getRegisteredClientInfo, removeClient } from '@/api/authorization/client/index'

import { FormAction } from '@/hooks/form'
import { doRequest } from '@/utils/axios/request'
import RegisteredClientPageSearch from '@/views/authorization/client/RegisteredClientPageSearch.vue'
import RegisteredClientFormModal from '@/views/authorization/client/RegisteredClientFormModal.vue'

// 鉴权方法
const { hasPermission } = useAuthorize()

// 表格组件引用
const tableRef = ref<ProTableInstanceExpose>()
const registeredClientFormModalRef = ref()

// 查询参数
let searchParams: RegisteredClientQO = {}

/* 远程加载表格数据 */
const tableRequest: TableRequest = (params, sorter, filter) => {
  const pageParam = mergePageParam(params, sorter, filter)
  return pageRegisteredClients({ ...pageParam, ...searchParams })
}

/* 刷新表格 */
const reloadTable = (resetPageIndex?: boolean) => {
  tableRef.value?.actionRef?.reload(resetPageIndex)
}

/* 查询表格 */
const searchTable = (params: RegisteredClientQO) => {
  searchParams = params
  reloadTable(true) // 会调用 tableRequest
}

/* 创建 */
const handleCreate = () => {
  registeredClientFormModalRef.value.open(FormAction.CREATE)
}

/* 修改 */
const handleUpdate = (record: RegisteredClientPageVO) => {
  registeredClientFormModalRef.value.open(FormAction.UPDATE, record)
}

/* 删除 */
const handleRemove = (record: RegisteredClientPageVO) => {
  doRequest(removeClient(record.id), {
    successMessage: '删除成功！',
    onSuccess: () => reloadTable()
  })
}


const columns: ProColumns[] = [
  {
    title: '客户端Id',
    dataIndex: 'clientId',
    sorter: true,
    width: 100,
    ellipsis: true
  },
  {
    title: '客户端名称',
    dataIndex: 'clientName',
    sorter: true,
    width: 100,
    ellipsis: true
  },
  {
    title: '认证方式',
    dataIndex: 'clientAuthenticationMethods',
    sorter: true,
    width: 100
  },
  {
    title: '授权方式',
    dataIndex: 'authorizationGrantTypes',
    sorter: true,
    width: 100
  },
  {
    title: '回调地址',
    dataIndex: 'redirectUris',
    sorter: true,
    width: 100
  },
  {
    title: '作用域',
    dataIndex: 'scopes',
    sorter: true,
    width: 100
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 80,
    sorter: true
  },
  {
    key: 'operate',
    title: '操作',
    align: 'center',
    width: 80
  }
]
</script>

<script lang="ts">
export default {
  name: 'RegisteredClientPage'
}
</script>
<style scoped></style>
