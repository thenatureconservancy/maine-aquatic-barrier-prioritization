<script setup>
import { ref } from 'vue'
import sparkline from './Sparkline.vue'
import { useFiltersStore } from '../stores/filters'
import { useFishPriorityStore } from '../stores/fishPriority'
let store = useFiltersStore()
let fishPriorityStore = useFishPriorityStore()
</script>

<template>
  <q-toolbar class="q-mb-none q-mt-sm">
    <p class="text-primary text-caption text-bold q-ml-sm">
      <q-btn
        size="sm"
        outline
        color="primary"
        icon="delete"
        label="CLEAR All"
        @click="store.clearAll()"
      ></q-btn>
    </p>
    <q-space></q-space>
    <p class="text-primary text-bold q-mr-sm">Results- {{ fishPriorityStore.count }}</p>
  </q-toolbar>
  <q-list bordered class="rounded-borders q-mx-md q-mt-xs">
    <q-expansion-item
      v-for="(item, key) in store.filterCategories"
      expand-separator
      :label="item.title"
      :key="key"
      header-class="bg-blue-grey-6 text-body1 text-white"
      header-style="border-bottom: 1px solid white"
      expand-icon-class="text-white"
      dense
      :icon="item.active ? 'check' : ''"
    >
      <q-list class="bg-white">
        <q-item v-for="(control, key) in item.children" :key="key">
          <q-item-section class="q-pr-lg">{{ control.name }}</q-item-section>
          <q-item-section class="">
            <div
              v-if="control.variableType == 'Binary'"
              style="display: flex; align-items: center; justify-content: center"
            >
              <div class="row items-center">
                <div class="col-9">
                  <q-radio
                    size="xs"
                    v-model="control.model"
                    label="Yes"
                    val="yes"
                    @update:model-value="store.updateFilter(control)"
                  ></q-radio>
                  <q-radio
                    size="xs"
                    v-model="control.model"
                    label="No"
                    val="no"
                    class=""
                    @update:model-value="store.updateFilter(control)"
                  ></q-radio>
                </div>
                <div class="col-1"></div>
                <div class="col-2 items-center">
                  <q-btn
                    class="q-ml-xs"
                    flat
                    round
                    padding="sm"
                    size="xs"
                    icon="cancel"
                    :color="control.model == '' ? 'grey-5' : 'primary'"
                    @click="(control.model = ''), store.updateFilter(control)"
                    ><q-tooltip>clear selection</q-tooltip></q-btn
                  >
                </div>
              </div>
            </div>
            <div
              v-if="
                control.variableType == 'Categorical' && control.filterType == 'Select one dropdown'
              "
            >
              <q-select
                v-model="control.model"
                :options="control.options"
                filled
                label="Select One"
                clearable
                @clear="store.updateFilter(control)"
                @update:model-value="store.updateFilter(control)"
                options-dense
                dense
              ></q-select>
            </div>
            <div
              v-if="
                control.variableType == 'Categorical' && control.filterType == 'Select multiple'
              "
            >
              <q-select
                clearable
                multiple
                v-model="control.model"
                :options="control.options"
                filled
                label="Select Multiple"
                @clear="store.updateFilter(control)"
                @update:model-value="store.updateFilter(control)"
                options-dense
                dense
              ></q-select>
            </div>
            <div v-if="control.variableType == 'Continuous Range'">
              <span class="text-caption"
                >{{
                  new Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                    control.modRange.min
                  )
                }}
                <span class="float-right q-pr-lg">{{
                  new Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                    control.modRange.max
                  )
                }}</span></span
              >

              <div class="row">
                <div class="col-9 cursor-pointer">
                  <q-range
                    :color="
                      control.model.min == control.range.min &&
                      control.model.max == control.range.max
                        ? 'grey-5'
                        : 'primary'
                    "
                    drag-range
                    snap
                    :label-always="
                      control.model.min == control.range.min &&
                      control.model.max == control.range.max
                        ? false
                        : true
                    "
                    :left-label-value="new Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                    control.model.min)"
                    :right-label-value="new Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                      control.model.max
                    )"
                    v-model="control.model"
                    :min="control.modRange.min"
                    :max="control.modRange.max"
                    :step="control.range.step"
                    @change="store.updateFilter(control)"
                  ></q-range>
                  <div class="text-center">
                   <q-btn size="xs" label="custom range" flat color="blue"><q-menu>
                    <div class="q-pa-md" style="width: 200px">
                      <q-input
                        dense
                        v-model.number="control.model.min"
                        type="number"
                        label="Min"
                        class="q-mb-sm"
                        @update:model-value="store.updateFilter(control)"
                       
                      ></q-input>
                     
                      <q-input
                        dense
                        v-model.number="control.model.max"
                        type="number"
                        label="Max"
                        class="q-mb-sm"
                        @update:model-value="
                         store.updateFilter(control)
                        "
                      ></q-input>
                    </div>
                   </q-menu></q-btn>
                   </div>
                  <!--div>
                    <sparkline v-bind:data="control.histogram"></sparkline>
                  </div-->
                </div>
                <div class="col-1"></div>
                <div class="col-2 items-center">
                  <q-btn
                    flat
                    round
                    padding="sm"
                    size="xs"
                    icon="cancel"
                    :color="
                      control.model.min == control.range.min &&
                      control.model.max == control.range.max
                        ? 'grey-5'
                        : 'primary'
                    "
                    @click="
                      (control.model = { min: control.range.min, max: control.range.max }),
                        store.updateFilter(control)
                    "
                    ><q-tooltip>clear selection</q-tooltip></q-btn
                  >
                </div>
              </div>
              
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
  </q-list>
</template>

<style></style>
