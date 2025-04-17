<template>
  <div class="public-note-box">
    <el-form
      :model="publicNote"
      label-width="150px"
    >
      <div class="public-mode-item">
        <div class="mode-title">
          账单信息
        </div>
        <div class="form-item-group">
          <el-form-item
            label="开始日期"
            prop="startDate"
          >
            <el-date-picker
              v-model="publicNote.billingDataMod.startDate"
              type="date"
              placeholder="选择开始日期"
              clearable
            />
          </el-form-item>
          <el-form-item
            label="结束日期"
            prop="endDate"
          >
            <div class="form-item-input-box">
              <el-checkbox
                v-model="endDateUnlimited"
              >
                无限时长
              </el-checkbox>
              <el-date-picker
                v-model="publicNote.billingDataMod.endDate"
                type="date"
                :disabled="endDateUnlimited"
                placeholder="选择结束日期"
                clearable
              />
            </div>
          </el-form-item>
        </div>
        <div class="form-item-group">
          <el-form-item
            label="账单金额"
            prop="amount"
          >
            <el-input
              v-model="publicNote.billingDataMod.amount"
              placeholder="格式如 $9.99 、€19.92 、¥199、19.99HKD、9.99USD、49.99CNY"
              clearable
            />
          </el-form-item>
          <el-form-item
            label="账单周期"
            prop="cycle"
          >
            <el-autocomplete
              v-model="publicNote.billingDataMod.cycle"
              :fetch-suggestions="cycleFetchSuggestions"
              placeholder="请输入账单周期，如果不执行自动续费，可以随意输入"
              clearable
            />
          </el-form-item>
        </div>
        <div class="form-item-group">
          <el-form-item
            label="自动续费"
            prop="autoRenewal"
          >
            <el-switch
              v-model="publicNote.billingDataMod.autoRenewal"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>
        </div>
      </div>
      <div class="public-mode-item">
        <div class="mode-title">
          套餐信息
        </div>
        <div class="form-item-group">
          <el-form-item
            label="带宽"
            prop="bandwidth"
          >
            <el-input
              v-model="publicNote.planDataMod.bandwidth"
              :placeholder="bandwidthPlaceholder"
              clearable
            />
          </el-form-item>
          <div class="form-item-group">
            <el-form-item
              label="IPv4"
              prop="IPv4"
            >
              <el-switch
                v-model="publicNote.planDataMod.IPv4"
                active-value="1"
                inactive-value="0"
              />
            </el-form-item>
            <el-form-item
              label="IPv6"
              prop="IPv6"
            >
              <el-switch
                v-model="publicNote.planDataMod.IPv6"
                active-value="1"
                inactive-value="0"
              />
            </el-form-item>
          </div>
        </div>
        <div class="form-item-group">
          <el-form-item
            label="流量"
            prop="trafficVol"
          >
            <el-input
              v-model="publicNote.planDataMod.trafficVol"
              :placeholder="trafficVolPlaceholder"
              clearable
            />
          </el-form-item>
          <el-form-item
            label="流量类型"
            prop="trafficType"
          >
            <el-select
              v-model="publicNote.planDataMod.trafficType"
              clearable
            >
              <el-option
                v-for="item in trafficTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>
        <div class="form-item-group">
          <el-form-item
            label="网络标签"
            prop="networkRoute"
          >
            <el-input-tag
              v-model="publicNote.planDataMod.networkRoute"
              placeholder="请输入网络标签，按下回车键添加"
              clearable
            />
          </el-form-item>
          <el-form-item
            label="其他标签"
            prop="extra"
          >
            <el-input-tag
              v-model="publicNote.planDataMod.extra"
              placeholder="请输入其他标签，按下回车键添加"
              clearable
            />
          </el-form-item>
        </div>
      </div>
      <div class="public-mode-item">
        <div class="mode-title">
          Nazhua自定义数据
        </div>
        <div class="form-item-group">
          <el-form-item
            label="位置"
            prop="location"
          >
            <el-autocomplete
              v-model="publicNote.customData.location"
              :fetch-suggestions="locationFetchSuggestions"
              placeholder="请输入位置代码"
              clearable
            >
              <template #default="{ item }">
                <span class="location-code">
                  {{ item.value }} ({{ item.label }})
                </span>
              </template>
            </el-autocomplete>
          </el-form-item>
          <el-form-item
            label="指定旗帜"
            prop="flag"
          >
            <el-autocomplete
              v-model="publicNote.customData.flag"
              :fetch-suggestions="flagFetchSuggestions"
              placeholder="请输入旗帜代码，可以搜国家地区code或者英文名称"
              clearable
            >
              <template #default="{ item }">
                <div class="flag-item">
                  <span
                    class="fi"
                    :class="'fi-' + item.code"
                  />
                  <span class="flag-value">
                    [{{ item.value }}]
                  </span>
                  <span class="flag-country-name">
                    {{ item.name }}
                  </span>
                </div>
              </template>
              <template
                v-if="publicNote.customData.flag"
                #append
              >
                <span
                  class="fi"
                  :class="'fi-' + publicNote.customData.flag"
                />
              </template>
            </el-autocomplete>
          </el-form-item>
        </div>
        <div class="form-item-group">
          <el-form-item
            label="购买链接"
            prop="orderLink"
          >
            <el-input
              v-model="publicNote.customData.orderLink"
              placeholder="请输入购买链接，无需执行encodeURIComponent"
              clearable
            />
          </el-form-item>
          <div class="form-item-group">
            <el-form-item
              label="购买按钮文本"
              prop="buyBtnText"
            >
              <el-input
                v-model="publicNote.customData.buyBtnText"
                placeholder="留空默认为：购买"
                clearable
              />
            </el-form-item>
            <el-form-item
              label="购买按钮图标"
              prop="buyBtnIcon"
            >
              <el-input
                v-model="publicNote.customData.buyBtnIcon"
                placeholder="适配Remixicon图标库"
                clearable
              />
            </el-form-item>
          </div>
        </div>
        <el-form-item
          label="标语"
          prop="slogan"
        >
          <el-input
            v-model="publicNote.customData.slogan"
            placeholder="介绍服务器的标语，支持渲染html代码（简单一点，复杂了会炸）"
            clearable
          />
        </el-form-item>
      </div>

      <div class="tips-info">
        <p>*以上信息均可留空，留空项输出时自动过滤</p>
      </div>

      <div class="operate-box">
        <el-button
          type="primary"
          @click="handleCopy"
        >
          复制到剪切板
        </el-button>
        <el-button
          type="warning"
          @click="handleReset"
        >
          恢复初始值
        </el-button>
        <el-button
          type="info"
          @click="activeImportDialog"
        >
          导入配置
        </el-button>
      </div>
    </el-form>
    <PublicNoteImportDialog
      ref="importDialogRef"
      @import="handleImport"
    />
  </div>
</template>

<script setup>
import {
  computed,
  ref,
} from 'vue';
import fiCountry from 'flag-icons/country';

import CODE_MAPS, {
  aliasMapping,
  countryCodeMapping,
} from '@/data/code-maps';
import {
  loadCustomLocation,
} from '@/utils/custom-location';
import copyText from '@/utils/copy-text';
import validate from '@/utils/validate';

import PublicNoteImportDialog from './public-note-import-dialog.vue';

const importDialogRef = ref(null);

const defaultBillingDataMod = () => ({
  startDate: '',
  endDate: '',
  autoRenewal: '',
  cycle: '',
  amount: '',
});
const defaultPlanDataMod = () => ({
  bandwidth: '',
  trafficVol: '',
  trafficType: '',
  IPv4: '',
  IPv6: '',
  networkRoute: [],
  extra: [],
});
const defaultCustomData = () => ({
  location: '',
  slogan: '',
  orderLink: '',
  buyBtnText: '',
  buyBtnIcon: '',
  flag: '',
});

const publicNote = ref({
  billingDataMod: defaultBillingDataMod(),
  planDataMod: defaultPlanDataMod(),
  customData: defaultCustomData(),
});
const importData = ref();
const endDateUnlimited = ref(false);

const cycles = [
  '月', 'month', 'monthly', 'm', 'mo',
  '季', 'quarterly', 'q',
  '半年', '半', 'half', 'semi-annually', 'h',
  '年', 'year', 'annually', 'y', 'yr',
];
const cycleFetchSuggestions = (query, cb) => {
  if (query) {
    cb(cycles.filter((cycle) => cycle.includes(query)).map((cycle) => ({
      value: cycle,
      label: cycle,
    })));
  } else {
    cb(cycles.map((cycle) => ({
      value: cycle,
      label: cycle,
    })));
  }
};

const bandwidthPlaceholder = '格式如 "30Mbps", "1Gbps", "Unlimited"';
const trafficVolPlaceholder = '格式如 "1TB/月", "500GB/月", "Unlimited"';

const trafficTypes = [{
  value: '1',
  label: '单向出流量',
}, {
  value: '2',
  label: '双向流量',
}, {
  value: '3',
  label: '入出取最大',
}];

const customLocations = ref(loadCustomLocation());
const locationOptions = computed(() => {
  const options = [];
  Object.keys(CODE_MAPS).forEach((key) => {
    options.push({
      value: key,
      label: `${CODE_MAPS[key].name} - ${CODE_MAPS[key].country}`,
    });
  });
  Object.keys(aliasMapping).forEach((key) => {
    const val = aliasMapping[key];
    options.push({
      value: key,
      label: `${val} - ${CODE_MAPS[val].name} - ${CODE_MAPS[val].country}`,
    });
  });
  Object.keys(countryCodeMapping).forEach((key) => {
    const val = countryCodeMapping[key];
    options.push({
      value: key,
      label: `${val} - ${CODE_MAPS[val].name} - ${CODE_MAPS[val].country}`,
    });
  });
  customLocations.value.forEach((item) => {
    options.push({
      value: item.code,
      label: `${item.name} - ${item?.country || ''}`,
    });
  });
  return options;
});
const locationFetchSuggestions = (query, cb) => {
  if (query) {
    cb(locationOptions.value
      .filter((option) => (option.label.toLowerCase().includes(query.toLowerCase())
        || option.value.toLowerCase().includes(query.toLowerCase())))
      .map((option) => ({
        value: option.value,
        label: option.label,
      })));
  } else {
    cb(locationOptions.value);
  }
};

const flagFetchSuggestions = (query, cb) => {
  if (query) {
    cb(fiCountry.filter((flag) => [
      flag.code.toLowerCase().includes(query.toLowerCase()),
      flag.name.toLowerCase().includes(query.toLowerCase()),
    ].some((i) => i)).map((flag) => ({
      value: flag.code,
      ...flag,
    })));
  } else {
    cb(fiCountry.map((flag) => ({
      value: flag.code,
      ...flag,
    })));
  }
};

/**
 * 过滤空值
 */
function filterEmpty(obj) {
  const data = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (!validate.isEmpty(value, {
      allEmpty: true,
    })) {
      data[key] = value;
    }
  });
  return data;
}

/**
 * 复制到剪切板
 */
function handleCopy() {
  let data = JSON.parse(JSON.stringify(publicNote.value));
  if (endDateUnlimited.value) {
    data.billingDataMod.endDate = '0000-00-00';
  }
  if (data.planDataMod.networkRoute.length) {
    data.planDataMod.networkRoute = data.planDataMod.networkRoute.join(',');
  }
  if (data.planDataMod.extra.length) {
    data.planDataMod.extra = data.planDataMod.extra.join(',');
  }
  // 过滤空值
  data.billingDataMod = filterEmpty(data.billingDataMod);
  if (validate.isEmpty(data.billingDataMod, {
    allEmpty: true,
  })) {
    delete data.billingDataMod;
  }
  data.planDataMod = filterEmpty(data.planDataMod);
  if (validate.isEmpty(data.planDataMod, {
    allEmpty: true,
  })) {
    delete data.planDataMod;
  }
  data.customData = filterEmpty(data.customData);
  if (validate.isEmpty(data.customData, {
    allEmpty: true,
  })) {
    delete data.customData;
  }
  if (importData.value) {
    data = {
      ...importData.value,
      ...data,
    };
  }
  // 转换为字符串
  const str = JSON.stringify(data, null, 2);
  // 复制到剪切板
  copyText(str);
}

/**
 * 恢复初始值
 */
function handleReset() {
  publicNote.value = {
    billingDataMod: defaultBillingDataMod(),
    planDataMod: defaultPlanDataMod(),
    customData: defaultCustomData(),
  };
  endDateUnlimited.value = false;
}

/**
 * 导入配置
 */
function handleImport(data) {
  importData.value = data;
  // 数据合并
  if (data.billingDataMod) {
    publicNote.value.billingDataMod = {
      ...publicNote.value.billingDataMod,
      ...data.billingDataMod,
    };
  }
  if (data.planDataMod) {
    publicNote.value.planDataMod = {
      ...publicNote.value.planDataMod,
      ...data.planDataMod,
    };
    if (data.planDataMod.networkRoute) {
      publicNote.value.planDataMod.networkRoute = data.planDataMod.networkRoute.split(',');
    } else {
      publicNote.value.planDataMod.networkRoute = [];
    }
    if (data.planDataMod.extra) {
      publicNote.value.planDataMod.extra = data.planDataMod.extra.split(',');
    } else {
      publicNote.value.planDataMod.extra = [];
    }
  }
  if (data.customData) {
    publicNote.value.customData = {
      ...publicNote.value.customData,
      ...data.customData,
    };
  }
}

/**
 * 激活导入对话框
 */
function activeImportDialog() {
  importDialogRef.value.active();
}
</script>

<style lang="scss" scoped>
.public-note-box {
  .public-mode-item {
    .mode-title {
      padding-left: 150px;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
}

.form-item-group {
  display: flex;
  align-items: center;
  gap: 10px;

  .el-form-item {
    flex: 1;

    :deep(.el-date-editor.el-input) {
      --el-date-editor-width: 100%;
    }
  }

  .form-item-input-box {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .form-item-group {
    flex: 1;
  }
}

.flag-item {
  display: flex;
  gap: 10px;
  align-items: center;

  .flag-value {
    text-transform: uppercase;
  }
}

.tips-info {
  text-align: center;
}

.operate-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;

  .el-button + .el-button {
    margin-left: 0;
  }
}
</style>
