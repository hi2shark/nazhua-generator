<template>
  <div
    ref="worldMapImgRef"
    class="world-map-group"
    :style="mapStyle"
    @click="worldMapClick"
    @mousemove="worldMapMouseMove"
  >
    <div
      class="world-map-img"
      :class="{
        'is-dark': isDarkMode,
      }"
    />
    <transition-group
      name="point"
      tag="div"
      class="world-map-point-container"
    >
      <world-map-point
        v-for="pointItem in mapPoints"
        :key="pointItem.key"
        :info="pointItem"
        @point-tap="handlePointTap"
      />
    </transition-group>
  </div>
</template>

<script setup>
/**
 * 世界地图盒子
 */

import {
  ref,
  computed,
} from 'vue';
import { useDark } from '@vueuse/core';
import validate from '@/utils/validate';

import WorldMapPoint from './world-map-point.vue';

const props = defineProps({
  width: {
    type: [Number, String],
    // default: 1280,
    default: null,
  },
  height: {
    type: [Number, String],
    // default: 621,
    default: null,
  },
  locations: {
    type: Array,
    default: () => [],
  },
});

const emits = defineEmits(['point-coord', 'select-coord', 'mouse-coord']);

const worldMapImgRef = ref(null);
const isDarkMode = useDark();

// 计算地图大小 保持1280:621的比例 保证地图不变形
const computedSize = computed(() => {
  if (!validate.isEmpty(props.width) && !validate.isEmpty(props.height)) {
    return {
      width: 1280,
      height: 621,
    };
  }
  const width = Number(props.width);
  const height = Number(props.height);
  if (!validate.isEmpty(props.width) && validate.isEmpty(props.height)) {
    return {
      width,
      height: Math.ceil((621 / 1280) * width),
    };
  }
  if (validate.isEmpty(props.width) && !validate.isEmpty(props.height)) {
    return {
      width: Math.ceil((1280 / 621) * height),
      height,
    };
  }
  if (width / height > 1280 / 621) {
    return {
      width: Math.ceil(height * (1280 / 621)),
      height,
    };
  }
  return {
    width,
    height: Math.ceil(width * (621 / 1280)),
  };
});

const computedSizeScale = computed(() => ({
  width: computedSize.value.width / 1280,
  height: computedSize.value.height / 621,
}));

const mapStyle = computed(() => {
  const style = {};
  style['--world-map-width'] = `${computedSize.value.width}px`;
  style['--world-map-height'] = `${computedSize.value.height}px`;
  return style;
});

const mapPoints = computed(() => props.locations.map((i) => {
  const item = {
    ...i,
    key: i.key,
    left: (computedSize.value.width / 1280) * i.x,
    top: (computedSize.value.height / 621) * i.y,
    size: i.size || 4,
    label: i.label,
  };
  return item;
}));

function worldMapClick(e) {
  const x = Math.max(Math.round(e.offsetX / computedSizeScale.value.width), 0);
  const y = Math.max(Math.round(e.offsetY / computedSizeScale.value.height), 0);
  emits('select-coord', {
    x,
    y,
  });
}

function worldMapMouseMove(e) {
  const x = Math.max(Math.round(e.offsetX / computedSizeScale.value.width), 0);
  const y = Math.max(Math.round(e.offsetY / computedSizeScale.value.height), 0);
  emits('mouse-coord', {
    x,
    y,
  });
}

function handlePointTap(e) {
  const coord = {
    x: e.left - (e.size / 2),
    y: e.top - e.size,
  };
  console.log(coord);
  emits('point-coord', coord);
}
</script>

<style lang="scss" scoped>
.world-map-group {
  width: var(--world-map-width, 1280px);
  height: var(--world-map-height, 621px);
  position: relative;

  .world-map-img {
    width: var(--world-map-width, 1280px);
    height: var(--world-map-height, 621px);
    background: url(@/assets/images/world-map-light.svg) 50% 50% no-repeat;
    background-size: 100%;
    opacity: 0.75;
    &.is-dark {
      background-image: url(@/assets/images/world-map-dark.svg);
    }
  }

  .world-map-tips {
    position: absolute;
    padding: 5px 10px;
    border-radius: 5px;
    line-height: 20px;
    color: #eee;
    background: rgba(#000, 0.8);
    box-shadow: 1px 4px 8px rgba(#303841, 0.4);
    z-index: 100;
    white-space: nowrap;
  }
}

.point-move,
.point-enter-active,
.point-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.point-enter-from,
.point-leave-to {
  opacity: 0;
}
</style>
