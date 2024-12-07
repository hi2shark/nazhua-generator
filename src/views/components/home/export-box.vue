<template>
  <div class="export-box">
    <div class="config-box">
      <div class="config-textarea-box">
        <highlightjs
          v-if="showHighlight"
          language="js"
          :code="exportConfigData"
        />
      </div>
      <div class="config-textarea-operate">
        <div class="left-box">
          <el-button
            type="success"
            plain
            @click="handleCopyContent"
          >
            复制内容
          </el-button>
          <el-button
            v-if="!nezhaV1DashboardCustomCode"
            type="primary"
            plain
            @click="handleDownloadFile"
          >
            下载文件
          </el-button>
        </div>
        <div class="right-box">
          <el-button
            type="danger"
            plain
            @click="handleRefreshConfigData"
          >
            重载配置
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 导出面板
 */

import {
  ref,
  computed,
  watch,
} from 'vue';
import {
  useStore,
} from 'vuex';
import {
  ElMessage,
} from 'element-plus';

const props = defineProps({
  refreshData: {
    type: Function,
    default: () => {},
  },
});

const store = useStore();

const nezhaV1DashboardCustomCode = computed(() => store.state.v1CustomCode);

const showHighlight = ref(false);
const exportData = ref();
const exportConfigData = ref('');

function ObjectToString(obj, indent = '') {
  let str = '{\n';
  Object.entries(obj).forEach(([key, value]) => {
    let val = value;
    if (typeof value === 'object') {
      str += `${indent}  ${key}: ${ObjectToString(val, `${indent}  `)},\n`;
      return;
    }
    if (typeof value === 'string') {
      val = `'${value}'`;
    }
    if (typeof value === 'boolean') {
      val = value ? 'true' : 'false';
    }
    if (typeof value === 'undefined') {
      return;
    }
    str += `${indent}  ${key}: ${val},\n`;
  });
  str += `${indent}}`;
  return str;
}

function handleConfigData(data) {
  exportData.value = data;
  const configData = ObjectToString(data);
  if (nezhaV1DashboardCustomCode.value) {
    exportConfigData.value = `<script>
window.$mergeNazhuaConfig && window.$mergeNazhuaConfig(${configData});
&lt;/script>`.replace('&lt;/', '</');
  } else {
    exportConfigData.value = `window.$$nazhuaConfig = ${configData};`;
  }
  showHighlight.value = false;
  setTimeout(() => {
    showHighlight.value = true;
  }, 300);
}

function handleCopyContent() {
  const input = document.createElement('textarea');
  input.value = exportConfigData.value;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
  ElMessage.success('复制成功');
}

function handleDownloadFile() {
  const blob = new Blob([exportConfigData.value], {
    type: 'text/plain',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'config.js';
  a.click();
  URL.revokeObjectURL(url);
}

function handleRefreshConfigData() {
  const data = props?.refreshData?.();
  if (data) {
    handleConfigData(data);
  }
}

watch(() => nezhaV1DashboardCustomCode.value, () => {
  handleRefreshConfigData();
});

defineExpose({
  setData(data) {
    handleConfigData(data);
  },
});
</script>

<style lang="scss" scoped>
.config-textarea-box {
  margin-bottom: 10px;
  white-space: pre-wrap;
}

.config-textarea-operate {
  display: flex;
  justify-content: space-between;

  .left-box {
    display: flex;
    align-items: center;
    gap: 15px;

    .el-button + .el-button {
      margin-left: 0;
    }
  }
}
</style>

<style lang="scss">
code,
pre {
  font-family: "Sarasa Term SC" !important;
}
</style>
