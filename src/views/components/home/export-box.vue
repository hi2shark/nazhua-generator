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
            type="primary"
            plain
            @click="handleDownloadFile"
          >
            下载文件
          </el-button>
          <span class="nezha-v1-dashboard-custom-code-group">
            <span>用于哪吒V1控制台自定义代码</span>
            <el-switch
              v-model="nezhaV1DashboardCustomCode"
              inline-prompt
              active-text="是"
              inactive-text="否"
            />
            <span
              v-if="
                nezhaV1DashboardCustomCode && exportData.routeMode === 'h5'
              "
              class="warning-text"
            >*自定义代码内设定routeMode: 'h5'无法生效</span>
          </span>
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
  watch,
} from 'vue';
import {
  ElMessage,
} from 'element-plus';

const props = defineProps({
  refreshData: {
    type: Function,
    default: () => {},
  },
});

const showHighlight = ref(false);
const nezhaV1DashboardCustomCode = ref(false);
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
  const configData = `window.$$nazhuaConfig = ${ObjectToString(data)};`;
  if (nezhaV1DashboardCustomCode.value) {
    exportConfigData.value = `<script>\n  ${configData}\n&lt;/script>`.replace('&lt;/', '</');
  } else {
    exportConfigData.value = configData;
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

  .nezha-v1-dashboard-custom-code-group {
    display: flex;
    align-items: center;
    gap: 5px;

    .warning-text {
      color: #ff6;
      font-weight: bold;
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
