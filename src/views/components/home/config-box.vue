<template>
  <div class="config-box">
    <el-form
      :model="configFormData"
      label-width="150px"
    >
      <el-form-item
        v-for="tplItem in configFormTpls"
        :key="tplItem.prop"
        :label="tplItem.label"
        :prop="tplItem.prop"
      >
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
              :placeholder="tplItem.placeholder"
            />
            <el-select
              v-else-if="tplItem.type === 'select'"
              v-model="configFormData[tplItem.prop]"
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
      <el-form-item>
        <el-button
          type="warning"
          @click="resetConfig"
        >
          还原默认配置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
/**
 * 配置面板
 */

import {
  ref,
  onMounted,
  watch,
  nextTick,
} from 'vue';
import {
  ElMessageBox,
} from 'element-plus';

import configTpl, {
  fieldLabels,
} from '@/data/config-tpl';
import {
  loadCustomConfig,
  saveCustomConfig,
} from '@/utils/custom-config';
import validate from '@/utils/validate';

const configFormData = ref({});
const configFormTpls = ref([]);
const configFieldEnable = ref({});

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
    Object.keys(configFieldEnable.value).forEach((key) => {
      if (configFieldEnable.value[key]) {
        data[key] = configFormData.value[key];
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
</style>
