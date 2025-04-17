<template>
  <div class="home-page">
    <div class="home-header">
      <div class="home-header-container container">
        <div class="left-box">
          <h1 class="site-name">Nazhua配置生成器</h1>
        </div>
        <div class="right-box">
          <div class="mode-switch">
            <el-switch
              v-model="isDarkMode"
              inline-prompt
              active-text="Dark"
              inactive-text="Light"
            />
          </div>
          <a
            class="github-link"
            href="https://github.com/hi2shark/nazhua"
            _target="blank"
          >
            Nazhua
          </a>
          <a
            class="github-link"
            href="https://github.com/hi2shark/nazhua-generator"
            _target="blank"
          >
            生成器源码
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
        <el-tab-pane
          label="公开备注编辑器"
          name="publicNote"
        >
          <public-note-box />
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
  computed,
  onMounted,
  ref,
} from 'vue';
import {
  useRoute,
  useRouter,
} from 'vue-router';
import {
  useStore,
} from 'vuex';

import WorldMapBox from '@/views/components/home/world-map-box.vue';
import ConfigBox from '@/views/components/home/config-box.vue';
import ExportBox from '@/views/components/home/export-box.vue';
import PublicNoteBox from '@/views/components/home/public-note-box.vue';

const topTab = ref('mapPoint');

const route = useRoute();
const router = useRouter();

const store = useStore();

const worldMapBoxRef = ref(null);
const configBoxRef = ref(null);
const exportBoxRef = ref(null);

const isDarkMode = computed({
  get() {
    return store.state.isDarkMode;
  },
  set() {
    store.dispatch('toggleDarkMode');
  },
});

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
  }
  router.replace({
    query: {
      tab: topTab.value,
    },
  });
}

onMounted(() => {
  topTab.value = route?.query?.tab || 'mapPoint';
});
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

  .right-box {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .github-link {
    color: var(--font-color);
    &:hover {
      color: #08f;
    }
  }

  .mode-switch {
    &.is-checked {
      --el-color-white: var(--background-color);
    }

    --el-switch-on-color: #f3f6f6;
  }
}

.home-container {
  padding: 20px 0;
}
</style>
