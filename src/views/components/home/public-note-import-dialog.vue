<template>
  <el-dialog
    v-model="dialogVisible"
    title="导入配置"
    width="600px"
    :append-to-body="true"
  >
    <el-input
      v-model="importConfigText"
      type="textarea"
      :rows="10"
      placeholder="请粘贴配置代码"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="dialogVisible = false"
        >取消</el-button>
        <el-button
          type="primary"
          @click="handleImport"
        >确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
/**
 * 公共备注导入
 */

import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const dialogVisible = ref(false);
const importConfigText = ref('');

const emit = defineEmits(['import']);

/**
 * 导入配置
 */
function handleImport() {
  try {
    const data = JSON.parse(importConfigText.value);
    emit('import', data);
    dialogVisible.value = false;
  } catch (error) {
    ElMessage.error('导入配置解析失败');
  }
}

defineExpose({
  active: () => {
    dialogVisible.value = true;
  },
});
</script>
