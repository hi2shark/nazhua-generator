<template>
  <div class="home-page">
    <div class="home-header">
      <div class="home-header-container container">
        <div class="left-box">
          <h1 class="site-name">Nazhua配置生成器</h1>
        </div>
        <div class="right-box">
          <a
            class="github-link"
            href="https://github.com/hi2shark/nazhua"
            _target="blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
    <div class="home-container container">
      <el-tabs
        v-model="topTab"
        @tab-change="topTabChange"
      >
        <el-tab-pane
          label="地图坐标拾取"
          name="mapPoint"
        >
          <world-map-box
            ref="worldMapBoxRef"
          />
        </el-tab-pane>
        <el-tab-pane
          label="自定义配置"
          name="customConfig"
        >
          <config-box
            ref="configBoxRef"
          />
        </el-tab-pane>
        <el-tab-pane
          label="导出配置"
          name="exportConfig"
        >
          <export-box
            ref="exportBoxRef"
            :refresh-data="handleRefreshConfigData"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
/**
 * 首页
 */

import {
  ref,
} from 'vue';

import WorldMapBox from '@/views/components/home/world-map-box.vue';
import ConfigBox from '@/views/components/home/config-box.vue';
import ExportBox from '@/views/components/home/export-box.vue';

const topTab = ref('mapPoint');

const worldMapBoxRef = ref(null);
const configBoxRef = ref(null);
const exportBoxRef = ref(null);

function handleRefreshConfigData() {
  const mapBoxData = worldMapBoxRef.value?.getData?.();
  const configData = configBoxRef.value?.getData?.();
  if (mapBoxData?.customCodeMap && Object.keys(mapBoxData.customCodeMap).length) {
    configData.customCodeMap = mapBoxData?.customCodeMap;
  }
  return configData;
}

function topTabChange() {
  if (topTab.value === 'exportConfig') {
    exportBoxRef.value?.setData?.(handleRefreshConfigData());
    console.log('导出配置', handleRefreshConfigData());
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  .container {
    width: 1320px;
    margin: 0 auto;
  }
}

.home-header {
  position: sticky;
  top: 0;
  background-image: radial-gradient(transparent 1px, var(--header-background-color) 2px);
  background-size: 3px 3px;
  backdrop-filter: saturate(50%) blur(3px);
  box-shadow: 0 2px 6px rgba(#000, 0.1);
  z-index: 1000;

  .home-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  .site-name {
    line-height: 40px;
    font-size: 20px;
  }

  .github-link {
    color: #eee;
    &:hover {
      color: #08f;
    }
  }
}

.home-container {
  padding: 20px 0;
}
</style>
