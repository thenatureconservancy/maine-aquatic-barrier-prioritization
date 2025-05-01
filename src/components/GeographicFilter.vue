<script setup>
import { ref, computed } from 'vue'
import { useGeographyStore } from '../stores/geography'
let store = useGeographyStore()
import { usePanelNavigationStore } from '../stores/panelNavigation'
const navStore = usePanelNavigationStore()

const huc8options = ref(store.huc8_options)
const huc10options = ref(store.huc10_options)

function filterFn(val, update, abort) {
  let options = store.tab == 'huc8' ? huc8options : huc10options
  console.log(options)
  update(() => {
    const needle = val.toLocaleLowerCase()
    options.value = options.value.filter((v) => v.label.toLocaleLowerCase().indexOf(needle) > -1)
  })
}

function setModel(val) {
  store.searchTerm = val
}
</script>
<template>
  <div class="q-ma-md">
    <q-tabs
      v-model="store.tab"
      class="text-dark bg-accent"
      active-class=" text-white bg-blue-grey-6"
      indicator-color="accent"
      dense
      @click="store.searchTerm = ''"
    >
      <q-tab name="statewide" label="Statewide" />
      <q-tab name="huc8" label="HUC 8" />
      <q-tab name="huc10" label="HUC 10" />
      <!--q-tab name="site" label="Site ID" /-->
    </q-tabs>
    <q-select
      v-if="store.tab !== 'statewide'"
      @clear="store.searchTerm = ''"
      outlined
      :model-value="store.searchTerm"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="store.tab == 'huc8' ? huc8options : huc10options"
      @filter="filterFn"
      @input-value="setModel"
      hint="Begin typing to filter"
      :disable="store.tab == 'statewide' ? true : false"
      :label="store.loadValues.label"
      options-dense
      clearable
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
    <div class="q-mt-xl">
      <q-btn
        color="primary"
        flat
        icon-right="arrow_right"
        label="Next: Go To Fish Priority"
        @click="navStore.tab = 'fish'"
      ></q-btn>
    </div>
  </div>
</template>
<style scoped></style>
