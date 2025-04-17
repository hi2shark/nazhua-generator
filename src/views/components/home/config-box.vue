<template>
  <div class="config-box">
    <div class="config-top-bar">
      <div class="left-box">
        <span class="nezha-v1-dashboard-custom-code-group">
          <span>是否用于哪吒V1控制台自定义代码？</span>
          <el-switch
            v-model="nezhaV1DashboardCustomCode"
            inline-prompt
            active-text="是"
            inactive-text="否"
          />
        </span>
      </div>
      <div class="right-box">
        <el-button
          type="warning"
          plain
          @click="resetConfig"
        >
          还原默认配置
        </el-button>
        <el-button
          type="primary"
          plain
          @click="showImportDialog"
        >
          导入配置
        </el-button>
      </div>
    </div>
    <el-form
      :model="configFormData"
      label-width="150px"
    >
      <template
        v-for="tplItem in configFormTpls"
        :key="tplItem.prop"
      >
        <el-form-item
          v-if="!nezhaV1DashboardCustomCode || tplItem.v1customCode"
          :label="tplItem.label"
          :prop="tplItem.prop"
        >
          <template #label>
            <div class="label-group">
              <span>{{ tplItem.label }}</span>
              <span
                v-if="tplItem.version"
                class="support-version"
                :title="`支持版本：${tplItem.version}`"
              >
                {{ tplItem.version }}
              </span>
            </div>
          </template>
          <div class="config-el-form-item-group">
            <div class="enable-config-switch">
              <el-switch
                v-model="configFieldEnable[tplItem.prop]"
                inline-prompt
                active-text="启用"
                inactive-text="禁用"
              />
            </div>
            <div class="config-el-form-item-group--content">
              <el-autocomplete
                v-if="tplItem.type === 'input' && tplItem.options"
                v-model="configFormData[tplItem.prop]"
                :placeholder="tplItem.placeholder"
                :fetch-suggestions="tplItem.options"
              >
                <template #default="{ item }">
                  <div class="autocomplete-option">
                    <div class="value">{{ item.value }}</div>
                    <span class="desc">{{ item.label }}{{ item.remark }}</span>
                  </div>
                </template>
              </el-autocomplete>
              <el-input
                v-else-if="tplItem.type === 'input'"
                v-model="configFormData[tplItem.prop]"
                clearable
                :placeholder="tplItem.placeholder"
              />
              <el-input-tag
                v-else-if="tplItem.type === 'input-tag'"
                v-model="configFormData[tplItem.prop]"
                clearable
                :placeholder="tplItem.placeholder"
              />
              <el-select
                v-else-if="tplItem.type === 'select'"
                v-model="configFormData[tplItem.prop]"
                clearable
                :placeholder="tplItem.placeholder"
              >
                <el-option
                  v-for="option in tplItem.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
              <el-switch
                v-else-if="tplItem.type === 'switch'"
                v-model="configFormData[tplItem.prop]"
              />
            </div>
            <div
              v-if="tplItem.remark"
              class="config-el-form-item--remark"
            >
              Tips: {{ tplItem.remark }}
            </div>
          </div>
        </el-form-item>
      </template>
    </el-form>

    <!-- 导入配置弹窗 -->
    <el-dialog
      v-model="importDialogVisible"
      title="导入配置"
      width="500px"
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
            @click="importDialogVisible = false"
          >取消</el-button>
          <el-button
            type="primary"
            @click="importConfig"
          >确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
/**
 * 配置面板
 */

import {
  ref,
  computed,
  onMounted,
  watch,
  nextTick,
} from 'vue';
import {
  useStore,
} from 'vuex';
import {
  ElMessageBox,
  ElMessage,
} from 'element-plus';

import configTpl, {
  fieldLabels,
} from '@/data/config-tpl';
import {
  loadCustomConfig,
  saveCustomConfig,
} from '@/utils/custom-config';
import validate from '@/utils/validate';

const store = useStore();

const configFormData = ref({});
const configFormTpls = ref([]);
const configFieldEnable = ref({});

// 导入配置相关变量
const importDialogVisible = ref(false);
const importConfigText = ref('');

const nezhaV1DashboardCustomCode = computed({
  get: () => store.state.v1CustomCode,
  set: (value) => {
    store.commit('SET_V1_CUSTOM_CODE', value);
  },
});

function handleConfigTpl() {
  const formData = {};
  const tpls = [];
  Object.keys(configTpl).forEach((key) => {
    const field = fieldLabels[key];
    if (!field) {
      return;
    }
    formData[key] = configTpl[key];
    configFieldEnable.value[key] = false;
    tpls.push({
      prop: key,
      ...field,
    });
  });
  configFormData.value = formData;
  configFormTpls.value = tpls;
}

let autoSaveTimer = null;
function autoSaveConfig() {
  if (autoSaveTimer) {
    clearTimeout(autoSaveTimer);
  }
  const data = {
    formData: configFormData.value,
    enable: configFieldEnable.value,
  };
  autoSaveTimer = setTimeout(() => {
    saveCustomConfig(data);
  }, 1000);
}

let autoSaveConfigAccept = false;
watch([configFormData, configFieldEnable], () => {
  if (autoSaveConfigAccept) {
    autoSaveConfig();
  }
}, {
  deep: true,
});

async function resetConfig() {
  const confirmStatus = await ElMessageBox.confirm('确定要还原默认配置吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => true).catch(() => false);
  if (!confirmStatus) {
    return;
  }
  autoSaveConfigAccept = false;
  handleConfigTpl();
  nextTick(() => {
    autoSaveConfigAccept = true;
  });
}

// 显示导入配置弹窗
function showImportDialog() {
  importConfigText.value = '';
  importDialogVisible.value = true;
}

// 导入配置
function importConfig() {
  try {
    // 解析输入的配置代码
    const configText = importConfigText.value.trim();
    if (!configText) {
      ElMessage.warning('请输入配置代码');
      return;
    }

    let configObj = null;

    // 提取 window.$$nazhuaConfig = {...} 中的 {...} 部分
    const configMatch1 = configText.match(/window\.\$\$nazhuaConfig\s*=\s*(\{[\s\S]*\})/);
    // 提取 window.$mergeNazhuaConfig && window.$mergeNazhuaConfig({...}) 中的 {...} 部分
    // eslint-disable-next-line max-len, vue/max-len
    const configMatch2 = configText.match(/window\.\$mergeNazhuaConfig\s*&&\s*window\.\$mergeNazhuaConfig\s*\((\{[\s\S]*\})\)/);

    if (configMatch1 && configMatch1[1]) {
      // 第一种格式
      // eslint-disable-next-line no-new-func
      configObj = (new Function(`return ${configMatch1[1]}`))();
    } else if (configMatch2 && configMatch2[1]) {
      // 第二种格式
      // eslint-disable-next-line no-new-func
      configObj = (new Function(`return ${configMatch2[1]}`))();
    } else {
      ElMessage.warning('配置格式不正确，请检查');
      return;
    }

    // 更新配置表单
    autoSaveConfigAccept = false;
    Object.keys(configObj).forEach((key) => {
      if (validate.hasOwn(configFormData.value, key)) {
        configFormData.value[key] = configObj[key];
        // 自动启用导入的配置项
        configFieldEnable.value[key] = true;
      }
    });

    nextTick(() => {
      autoSaveConfigAccept = true;
      autoSaveConfig();
      importDialogVisible.value = false;
      ElMessage.success('配置导入成功');
    });
  } catch (error) {
    console.error('导入配置失败:', error);
    ElMessage.error('配置导入失败，请检查配置格式是否正确');
  }
}

onMounted(() => {
  handleConfigTpl();
  const localData = loadCustomConfig();
  if (localData) {
    Object.keys(localData?.formData || {}).forEach((key) => {
      if (validate.hasOwn(configFieldEnable.value, key)) {
        configFormData.value[key] = localData.formData[key];
      }
    });
    Object.keys(localData?.enable || {}).forEach((key) => {
      if (validate.hasOwn(configFieldEnable.value, key)) {
        configFieldEnable.value[key] = localData.enable[key];
      }
    });
  }
  autoSaveConfigAccept = true;
});

defineExpose({
  getData() {
    const data = {};
    configFormTpls.value.forEach((tplItem) => {
      if (nezhaV1DashboardCustomCode.value && !tplItem.v1customCode) {
        return;
      }
      if (configFieldEnable.value[tplItem.prop]) {
        data[tplItem.prop] = configFormData.value[tplItem.prop];
      }
    });
    return data;
  },
});
</script>

<style lang="scss" scoped>
.config-el-form-item-group {
  display: flex;
  align-items: center;
  gap: 12px;

  .enable-config-switch {
    width: 50px;

    .el-switch {
      &.is-checked {
        --el-color-white: #55b3f3;
      }
      --el-switch-on-color: #f3f6f6;
    }
  }

  .config-el-form-item-group--content {
    width: 300px;
  }

  .config-el-form-item--remark {
    padding: 6px 0;
    line-height: 24px;
    font-size: 12px;
    color: #09f;
  }
}

.config-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .left-box {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .right-box {
    display: flex;
    align-items: center;
    gap: 10px;

    .el-button + .el-button {
      margin-left: 0;
    }
  }
}

.label-group {
  position: relative;

  .support-version {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 5px;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    color: #ddd;
    background: transparent;
    border-radius: 4px;
    transform: scale(0.75) translate(10%, 65%);
    transition: all 0.3s;
    cursor: help;
    &:hover {
      color: #123;
      background-color: #eee;
      transform: scale(1) translate(0, 65%);
    }
  }
}

.autocomplete-option {
  display: flex;
  flex-direction: column;
  padding: 5px 0;

  .value {
    line-height: 20px;
    font-size: 14px;
    font-weight: bold;
  }

  .desc {
    line-height: 16px;
    font-size: 12px;
    color: #09f;
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

/* 导入配置弹窗样式 */
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}
</style>
