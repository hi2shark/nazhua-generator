<template>
  <layout-main>
    <router-view />
  </layout-main>
</template>

<script setup>
import {
  ref,
  provide,
} from 'vue';
import LayoutMain from './layout/main.vue';

const currentTime = ref(0);

provide('currentTime', currentTime);

window.addEventListener('unhandledrejection', (event) => {
  console.error('未处理的rejection:', event.reason);
  event.preventDefault();
});
</script>
