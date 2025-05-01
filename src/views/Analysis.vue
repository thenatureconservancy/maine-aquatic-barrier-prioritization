<script setup>
import ThePanel from "../components/ThePanel.vue";
import TheMap from "../components/TheMap.vue";

import { useQuasar } from "quasar";
import { ref, computed } from "vue";

const $q = useQuasar();
const mobile = computed(() => {
  return $q.screen.lt.sm || $q.screen.lt.xs ? true : false;
});
</script>

<template>
  <q-scroll-area
    :style="mobile ? 'height: calc(100vh - 210px)' : 'height: calc(100vh)'"
  >
    <div class="bg-white">
      <div class="row">
        <div class="col-sm col-md col-xs-12" style="max-width: 420px">
          <the-panel></the-panel>
        </div>
        <div class="col-md col-sm col-xs-12">
          <keep-alive> <the-map></the-map></keep-alive>
        </div>
      </div>
    </div>
  </q-scroll-area>
</template>
