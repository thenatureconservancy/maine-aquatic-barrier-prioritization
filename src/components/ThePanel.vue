<script setup>
import SupportingLayers from './SupportingLayers.vue'
import FishPriorities from './FishPriorities.vue'
import AdvancedFilters from './AdvancedFilters.vue'
import GeographicFilter from './GeographicFilter.vue'
import InfoPopup from './InfoPopup.vue'
import { ref } from 'vue'

import { usePanelNavigationStore } from '../stores/panelNavigation'
const navStore = usePanelNavigationStore()
const showMore = ref(true)
</script>
<template>
  <div class="bg-accent">
    <div class="text-center">
      <q-btn
        square=""
        class="q-mt-sm q-mb-sm"
        flat
        :ripple="false"
        :class="navStore.tab == 'geography' ? 'bg-primary text-white' : 'text-dark bg-accent '"
        size="sm"
        @click="navStore.tab = 'geography'"
      >
        geography</q-btn
      >
      <q-btn
        square=""
        flat
        :stack="true"
        :ripple="false"
        :class="navStore.tab == 'fish' ? 'bg-primary text-white' : 'text-dark bg-accent '"
        size="sm"
        @click="navStore.tab = 'fish'"
        >Fish Priority
      </q-btn>
      <q-btn
        square=""
        flat
        :ripple="false"
        :class="navStore.tab == 'filters' ? 'bg-primary text-white' : 'text-dark bg-accent '"
        size="sm"
        @click="navStore.tab = 'filters'"
        >filters
      </q-btn>

      <q-btn
        square=""
        flat
        :ripple="false"
        :class="navStore.tab == 'info' ? 'bg-primary text-white' : 'text-dark bg-accent '"
        size="sm"
        @click="navStore.tab = 'info'"
        >Details
      </q-btn>
      <q-btn
        square
        flat
        :ripple="false"
        :class="navStore.tab == 'layers' ? 'bg-primary text-white' : 'text-dark bg-accent '"
        size="sm"
        @click="navStore.tab = 'layers'"
        >layers</q-btn
      >
    </div>
  </div>
  <q-separator></q-separator>
  <!--Options-->

  <q-scroll-area style="height: calc(100vh - 140px)">
    <div class="" v-if="navStore.tab == 'geography'">
      <q-toolbar class="bg-white">
        <p class="text-h6 text-dark q-mb-none text-weight-light">Select Geography</p>

        <q-space></q-space>
        <!--q-btn class="" color="primary" padding="xs" size="md" flat @click="filter= !filter" :icon="filter?'filter_alt':'filter_alt_off'" >
             <q-tooltip>
          Show/Hide filters
        </q-tooltip></q-btn
      >
        <q-btn
          class=""
          color="primary"
          padding="xs"
          size="md"
          flat
          icon="restart_alt"
          @click="reset()"
        >
          <q-tooltip> Reset </q-tooltip></q-btn
        >
        <q-btn class="" color="primary" padding="xs" size="md" flat icon="info_outline">
          <q-menu anchor="top right" self="top left">
            <q-card class="q-pa-md">
              <p class="text-body1">Title</p>
              <q-separator></q-separator>
              <p class="q-ma-md">Info...</p>
            </q-card>
          </q-menu></q-btn
        -->
      </q-toolbar>

      <q-separator></q-separator>

      <div class="q-px-md q-pt-sm">
        <p>
          Welome to the barrier prioritization tool
          <span
            v-if="!showMore"
            class="text-caption cursor-pointer text-blue-4"
            @click="showMore = true"
            >..more</span
          >
        </p>
        <q-slide-transition>
          <div v-show="showMore">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <span
                v-if="showMore"
                class="text-caption cursor-pointer text-blue-4"
                @click="showMore = false"
                >..less</span
              >
            </p>
          </div>
        </q-slide-transition>
      </div>
      <GeographicFilter></GeographicFilter>
    </div>
    <div v-if="navStore.tab == 'fish'">
      <q-toolbar class="bg-white">
        <p class="text-h6 text-dark q-mb-none text-weight-light">Fish Priorities</p>

        <q-space></q-space>
        <!--q-btn class="" color="primary" padding="xs" size="md" flat @click="filter= !filter" :icon="filter?'filter_alt':'filter_alt_off'" >
             <q-tooltip>
          Show/Hide filters
        </q-tooltip></q-btn
      -->
        <!--q-btn
          class=""
          color="primary"
          padding="xs"
          size="md"
          flat
          icon="restart_alt"
          @click="reset()"
          label="Clear All"
          no-caps=""
        >
          <q-tooltip> Reset </q-tooltip></q-btn
      -->
        <q-btn class="" color="primary" padding="xs" size="md" flat icon="help" to="/help/faq">
          <!--q-menu anchor="top right" self="top left">
            <q-card class="q-pa-md">
              <p class="text-body1">Title</p>
              <q-separator></q-separator>
              <p class="q-ma-md">Info...</p>
            </q-card>
          </q-menu--></q-btn
        >
      </q-toolbar>

      <q-separator></q-separator>

      <fish-priorities></fish-priorities>
    </div>
    <div v-if="navStore.tab == 'filters'">
      <q-toolbar class="bg-white">
        <p class="text-h6 text-dark q-mb-none text-weight-light">Additional Filtering</p>

        <q-space></q-space>
        <!--q-btn class="" color="primary" padding="xs" size="md" flat @click="filter= !filter" :icon="filter?'filter_alt':'filter_alt_off'" >
             <q-tooltip>
          Show/Hide filters
        </q-tooltip></q-btn
      -->
        <q-btn class="" color="primary" padding="xs" size="md" flat icon="help" to="/help/faq" />

        <!--q-btn class="" color="primary" padding="xs" size="md" flat icon="info_outline">
          <q-menu anchor="top right" self="top left">
            <q-card class="q-pa-md">
              <p class="text-body1">Title</p>
              <q-separator></q-separator>
              <p class="q-ma-md">Info...</p>
            </q-card>
          </q-menu></q-btn
        -->
      </q-toolbar>

      <q-separator></q-separator>

      <advanced-filters></advanced-filters>
    </div>
    <div class="" v-show="navStore.tab == 'layers'">
      <q-toolbar class="bg-white">
        <p class="text-h6 text-dark q-mb-none text-weight-light">Reference Layers</p>

        <q-space></q-space>
        <!--q-btn class="" color="primary" padding="xs" size="md" flat @click="filter= !filter" :icon="filter?'filter_alt':'filter_alt_off'" >
             <q-tooltip>
          Show/Hide filters
        </q-tooltip></q-btn
      >
        <q-btn
          class=""
          color="primary"
          padding="xs"
          size="md"
          flat
          icon="restart_alt"
          @click="reset()"
        >
          <q-tooltip> Reset </q-tooltip></q-btn
        >
        <q-btn class="" color="primary" padding="xs" size="md" flat icon="info_outline">
          <q-menu anchor="top right" self="top left">
            <q-card class="q-pa-md">
              <p class="text-body1">Title</p>
              <q-separator></q-separator>
              <p class="q-ma-md">Info...</p>
            </q-card>
          </q-menu></q-btn
        -->
      </q-toolbar>

      <q-separator></q-separator>

      <!--q-btn class="" color="primary" padding="xs" size="md" flat @click="filter= !filter" :icon="filter?'filter_alt':'filter_alt_off'" >
             <q-tooltip>
          Show/Hide filters
        </q-tooltip></q-btn
      -->

      <div class="q-pa-md" id="layerList" style="height: calc(100vh - 200px)"></div>
    </div>
    <div v-if="navStore.tab == 'info'">
      <q-toolbar class="bg-white">
        <p class="text-h6 text-dark q-mb-none text-weight-light">Selected Barrier Info</p>

        <q-space></q-space>
        <!--q-btn class="" color="primary" padding="xs" size="md" flat @click="filter= !filter" :icon="filter?'filter_alt':'filter_alt_off'" >
             <q-tooltip>
          Show/Hide filters
        </q-tooltip></q-btn
      >
        <q-btn
          class=""
          color="primary"
          padding="xs"
          size="md"
          flat
          icon="restart_alt"
          @click="reset()"
        >
          <q-tooltip> Reset </q-tooltip></q-btn
        >
        <q-btn class="" color="primary" padding="xs" size="md" flat icon="info_outline">
          <q-menu anchor="top right" self="top left">
            <q-card class="q-pa-md">
              <p class="text-body1">Title</p>
              <q-separator></q-separator>
              <p class="q-ma-md">Info...</p>
            </q-card>
          </q-menu></q-btn
        -->
      </q-toolbar>

      <q-separator></q-separator>

      <div class="q-px-md q-pt-sm">
        <info-popup></info-popup>
      </div>
    </div>
  </q-scroll-area>
</template>
