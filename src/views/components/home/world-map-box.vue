<template>
  <div class="world-map-box">
    <div class="world-map-and-coord-group">
      <el-scrollbar
        style="width: 1024px; height: 497px;"
      >
        <world-map
          :width="mapSize"
          :locations="allLocations"
          @mouse-coord="onMouseCoord"
          @select-coord="onSelectCoord"
        />
        <div class="map-operate">
          <el-button
            type="primary"
            size="small"
            link
            @click="zoomMapSize('zoomIn')"
          >
            放大
          </el-button>
          <el-button
            type="success"
            size="small"
            link
            @click="zoomMapSize('zoomOut')"
          >
            缩小
          </el-button>
          <el-button
            type="default"
            size="small"
            link
            @click="zoomMapSize('reset')"
          >
            默认
          </el-button>
        </div>
      </el-scrollbar>

      <div class="coord-box">
        <div class="coord-title">
          <span>坐标记录</span>
        </div>
        <el-form>
          <div class="el-form-group">
            <el-form-item label="X轴">
              <el-input v-model="coord.x" />
            </el-form-item>
            <el-form-item label="Y轴">
              <el-input v-model="coord.y" />
            </el-form-item>
          </div>
        </el-form>
        <p class="tips">
          点击左侧地图会记录下坐标，点击记录坐标可以创建自定义地点；*隐藏内置地点后更方便戳点点
        </p>
        <el-scrollbar height="340px">
          <div class="coord-temp-list">
            <div
              v-for="locationItem in tempLocations"
              :key="locationItem.key"
              class="location-item"
              @click="activeCreateCustomPoint(locationItem)"
            >
              <div class="location-info">
                <span class="location-icon">
                  <span class="ri-map-pin-5-line" />
                </span>
                <span class="location-name">
                  X:{{ locationItem.x }}，Y:{{ locationItem.y }}
                </span>
              </div>
              <div class="location-operate">
                <span
                  class="remove-btn"
                  @click.stop="removeTempLocation(locationItem.key)"
                >
                  <span class="ri-close-circle-fill" />
                </span>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>

    <div class="default-location-group">
      <div class="operate-box">
        <div class="left-box">
          <div class="mode-name">
            <span class="name-label">内置定位地点</span>
            <span class="name-desc">仅内置了几个我常见的城市定位，<span class="code-value">此颜色</span>的都是可用代码，点击可自动复制（吧</span>
          </div>
        </div>
        <div class="right-box">
          <div class="show-default-location-to-map">
            <el-switch
              v-model="showDefaultLocation"
              size="small"
              inline-prompt
              active-text="显示"
              inactive-text="隐藏"
            />
          </div>
        </div>
      </div>
      <div class="location-list">
        <div
          v-for="locationItem in locations"
          :key="locationItem.key"
          class="location-item"
        >
          <span class="default-point">
            <span class="point-dot" />
          </span>
          <span class="location-name">
            {{ locationItem.name }}
          </span>
          <span
            class="location-code"
            @click.stop="copyText(locationItem.code)"
          >
            {{ locationItem.code }}
          </span>
        </div>
      </div>
      <div class="sub-name">
        <span>别名映射</span>
      </div>
      <div class="mapping-list">
        <div
          v-for="locationItem in aliasMappingList"
          :key="locationItem.alias"
          class="mapping-item"
        >
          <span
            class="mapping-alias"
            @click.stop="copyText(locationItem.alias)"
          >
            {{ locationItem.alias }}
          </span>
          <span class="ri-arrow-right-line" />
          <span class="mapping-code">
            {{ locationItem.code }}
          </span>
        </div>
      </div>
      <div class="sub-name">
        <span>国别码默认映射</span>
        <span class="sub-desc">(*没有指定location的节点以此为映射，没有在下面的国别码不显示)</span>
      </div>
      <div class="mapping-list">
        <div
          v-for="locationItem in countryMappingList"
          :key="locationItem.alias"
          class="mapping-item"
        >
          <span class="mapping-alias">
            {{ locationItem.alias }}
          </span>
          <span class="ri-arrow-right-line" />
          <span class="mapping-code">
            {{ locationItem.code }}
          </span>
        </div>
      </div>
    </div>

    <div class="custom-location-group">
      <div class="operate-box">
        <div class="left-box">
          <div class="mode-name">
            <span class="name-label">自定义地点</span>
          </div>
        </div>
        <div class="right-box">
          <div class="show-custom-location-to-map">
            <el-switch
              v-model="showCustomLocation"
              size="small"
              inline-prompt
              active-text="显示"
              inactive-text="隐藏"
            />
          </div>
        </div>
      </div>
      <div class="location-list">
        <div
          v-for="locationItem in customLocations"
          :key="locationItem.key"
          class="location-item"
        >
          <div class="location-item-info">
            <span class="custom-point">
              <span class="point-dot" />
            </span>
            <span class="location-name">
              {{ locationItem.name }}
            </span>
            <span
              class="location-code"
              @click.stop="copyText(locationItem.code)"
            >
              {{ locationItem.code }}
            </span>
          </div>
          <div class="location-item-operate">
            <span
              class="edit-btn"
              @click="activeEditCustomPoint(locationItem)"
            >
              <span class="ri-edit-2-line" />
            </span>
            <span
              class="remove-btn"
              @click="removeCustomLocation(locationItem.key)"
            >
              <span class="ri-close-circle-fill" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <custom-point-edit-dialog
      ref="customPointEditDialogRef"
      @success="onPointEditSuccess"
    />
  </div>
</template>

<script setup>
/**
 * 世界地图控制盒子
 */

import {
  ref,
  computed,
} from 'vue';
import {
  ElMessage,
  ElMessageBox,
} from 'element-plus';

import CODE_MAPS, {
  aliasMapping,
  countryCodeMapping,
} from '@/data/code-maps';
import uuid from '@/utils/uuid';
import copyText from '@/utils/copy-text';
import {
  loadCustomLocation,
  saveCustomLocation,
} from '@/utils/custom-location';

import WorldMap from '@/views/components/world-map/world-map.vue';
import CustomPointEditDialog from '@/views/components/home/custom-point-edit-dialog.vue';

const mapSize = ref(1024);
function zoomMapSize(type) {
  let val = mapSize.value;
  if (type === 'zoomIn') {
    val += 128;
    val = Math.min(val, 3072);
  } else if (type === 'zoomOut') {
    val -= 128;
    val = Math.max(val, 1024);
  } else {
    val = 1024;
  }
  mapSize.value = val;
}

const showDefaultLocation = ref(true);
const showCustomLocation = ref(true);
const customPointEditDialogRef = ref(null);

const locations = computed(() => Object.keys(CODE_MAPS).map((key) => ({
  ...CODE_MAPS[key],
  type: 'default',
  key,
  code: key,
  size: 4,
  label: `[${key}] - ${CODE_MAPS[key].country}，${CODE_MAPS[key].name}`,
})));
const aliasMappingList = computed(() => Object.keys(aliasMapping).map((key) => ({
  alias: key,
  code: aliasMapping[key],
})));
const countryMappingList = computed(() => Object.keys(countryCodeMapping).map((key) => ({
  alias: key,
  code: countryCodeMapping[key],
})));

const customLocations = ref(loadCustomLocation());

const tempLocations = ref([]);

const allLocations = computed(() => {
  const list = [];
  if (showDefaultLocation.value) {
    list.push(...locations.value);
  }
  list.push(...customLocations.value);
  list.push(...tempLocations.value);
  return list;
});

const coord = ref({
  x: 0,
  y: 0,
});

function onMouseCoord(e) {
  coord.value = {
    x: e.x,
    y: e.y,
  };
}

function onSelectCoord(e) {
  coord.value = {
    x: e.x,
    y: e.y,
  };
  tempLocations.value.push({
    x: e.x,
    y: e.y,
    type: 'temp',
    key: uuid(),
    size: 4,
    label: `X:${e.x}，Y${e.y}`,
  });
}

function removeTempLocation(key) {
  tempLocations.value = tempLocations.value.filter((i) => i.key !== key);
}

function activeCreateCustomPoint(locationItem) {
  customPointEditDialogRef.value.active('add', locationItem, (data) => {
    const hasCode = customLocations.value.some((i) => i.code === data.code);
    if (hasCode) {
      ElMessage.error('编码已存在');
      return false;
    }
    return true;
  });
}

function activeEditCustomPoint(locationItem) {
  customPointEditDialogRef.value.active('edit', locationItem, (data) => {
    // 超过一个自定义点，需要判断是否重复
    if (customLocations.value.length > 1) {
      const hasCode2 = customLocations.value.some((i) => i.code === data.code && i.code !== locationItem.code);
      if (hasCode2) {
        ElMessage.error('编码重复，需要唯一');
        return false;
      }
    }
    return true;
  });
}

async function removeCustomLocation(key) {
  const confirmRemove = await ElMessageBox.confirm('确定删除该自定义地点吗？').then(() => true).catch(() => false);
  if (!confirmRemove) {
    return;
  }
  customLocations.value = customLocations.value.filter((i) => i.key !== key);
  saveCustomLocation(customLocations.value);
}

function onPointEditSuccess(result) {
  const {
    data,
    type,
    info,
  } = result;
  if (type === 'add') {
    customLocations.value.push({
      key: data.code,
      type: 'custom',
      code: data.code,
      name: data.name,
      country: data.country,
      x: data.x,
      y: data.y,
      size: 4,
      label: `[${data.code}] - ${data.country}，${data.name}`,
    });
    removeTempLocation(info.key);
  } else if (type === 'edit') {
    const index = customLocations.value.findIndex((i) => i.code === info.code);
    customLocations.value.splice(index, 1, {
      key: data.code,
      type: 'custom',
      code: data.code,
      name: data.name,
      country: data.country,
      x: data.x,
      y: data.y,
      size: 4,
      label: `[${data.code}] - ${data.country}，${data.name}`,
    });
  }
  saveCustomLocation(customLocations.value);
}

defineExpose({
  getData() {
    const customCodeMap = {};
    customLocations.value.forEach((i) => {
      customCodeMap[i.code] = {
        name: i.name,
        country: i.country,
        x: i.x,
        y: i.y,
      };
    });
    return {
      customCodeMap,
    };
  },
});
</script>

<style lang="scss" scoped>
.world-map-box {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.world-map-and-coord-group {
  display: flex;
  gap: 20px;

  .coord-box {
    flex: 1;
  }

  .map-operate {
    position: absolute;
    left: 10px;
    bottom: 10px;
    display: flex;
    gap: 5px;
    .el-button + .el-button {
      margin-left: 0;
    }
  }
}

.operate-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;

  .left-box,
  .right-box {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .mode-name {
    display: flex;
    flex-direction: column;

    .name-label {
      line-height: 24px;
      font-size: 16px;
    }

    .name-desc {
      line-height: 16px;
      font-size: 12px;
      color: #ccc;

      .code-value {
        color: #ff4d4f;
      }
    }
  }
}

.show-default-location-to-map,
.show-custom-location-to-map {
  display: flex;
  align-items: center;
  gap: 5px;

  .el-switch {
    &.is-checked {
      --el-color-white: var(--background-color);
    }
    --el-switch-on-color: var(--world-map-point-color);
  }
}

.show-custom-location-to-map {
  .el-switch {
    --el-switch-on-color: var(--world-map-custom-point-color);
  }
}

.location-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;

  .location-item {
    display: flex;
    align-items: center;
    gap: 5px;

    .location-name,
    .location-code {
      line-height: 20px;
    }

    .location-code {
      color: #ff4d4f;
      cursor: default;
    }
  }

  .default-point,
  .custom-point {
    --map-point-size: 4px;
    position: relative;
    width: calc(var(--map-point-size) + 8px);
    height: calc(var(--map-point-size) + 8px);
    border: 2px solid var(--world-map-point-color);
    border-radius: 50%;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: var(--map-point-size);
      height: var(--map-point-size);
      background: var(--world-map-point-color);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .custom-point {
    --world-map-point-color: #fff;
  }
}

.custom-location-group {
  .location-item-info {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .location-item-operate {
    display: flex;
    align-items: center;
    gap: 5px;

    .edit-btn,
    .remove-btn {
      font-size: 16px;
      cursor: pointer;
    }
  }
}

.mapping-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 15px;

  .mapping-item {
    display: flex;
    align-items: center;
    gap: 2px;

    .mapping-alias,
    .mapping-code {
      line-height: 20px;
    }

    .mapping-alias {
      color: #ff4d4f;
    }
  }
}

.sub-name {
  margin-top: 10px;
  font-size: 16px;

  .sub-desc {
    margin-left: 5px;
    font-size: 12px;
  }
}

.coord-box {
  .el-form-group {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;

    .el-form-item {
      flex: 1;
      margin-bottom: 0;
    }
  }
  .coord-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    span {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .tips {
    margin-bottom: 10px;
    line-height: 16px;
    font-size: 12px;
    color: #aaa;
  }

  .coord-temp-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 5px;

    .location-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 5px 10px;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.8);
      box-shadow: 1px 4px 8px rgba(48, 56, 65, 0.4);
      white-space: nowrap;

      .location-info {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
      }

      .location-operate {
        display: flex;
        align-items: center;
        gap: 5px;

        .remove-btn {
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
