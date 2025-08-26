<script setup>
import SupportingLayers from "./SupportingLayers.vue";
import FishPriorities from "./FishPriorities.vue";
import AdvancedFilters from "./AdvancedFilters.vue";
import GeographicFilter from "./GeographicFilter.vue";
import InfoPopup from "./InfoPopup.vue";
import { ref } from "vue";

import { usePanelNavigationStore } from "../stores/panelNavigation";
const navStore = usePanelNavigationStore();

import { useGeographyStore } from "../stores/geography";
const geographyStore = useGeographyStore();

const showMore = ref(true);

function goToHelp(section) {
  navStore.helpSection = section;
  if (navStore.rightDrawerOpen && navStore.helpTab == "toolhelp") {
    const element = document.getElementById(navStore.helpSection);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // or 'auto'
        block: "nearest", // 'start', 'center', 'end', or 'nearest'
        inline: "nearest", // for horizontal alignment
      });
    }
  } else {
    navStore.rightDrawerOpen = true;
    navStore.helpTab = "toolhelp";
    const element = document.getElementById(navStore.helpSection);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // or 'auto'
        block: "nearest", // 'start', 'center', 'end', or 'nearest'
        inline: "nearest", // for horizontal alignment
      });
    }
  }
}
</script>
<template>
  <div class="bg-accent">
    <div class="text-center">
      <q-btn
        square=""
        class="q-mt-sm q-mb-sm"
        flat
        :ripple="false"
        :class="
          navStore.tab == 'geography'
            ? 'bg-primary text-white'
            : 'text-dark bg-accent '
        "
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
        :class="
          navStore.tab == 'fish'
            ? 'bg-primary text-white'
            : 'text-dark bg-accent '
        "
        size="sm"
        @click="navStore.tab = 'fish'"
        >Fish Priority
      </q-btn>
      <q-btn
        square=""
        flat
        :ripple="false"
        :class="
          navStore.tab == 'filters'
            ? 'bg-primary text-white'
            : 'text-dark bg-accent '
        "
        size="sm"
        @click="navStore.tab = 'filters'"
        >filters
      </q-btn>

      <q-btn
        square=""
        flat
        :ripple="false"
        :class="
          navStore.tab == 'info'
            ? 'bg-primary text-white'
            : 'text-dark bg-accent '
        "
        size="sm"
        @click="navStore.tab = 'info'"
        >Details
      </q-btn>
      <q-btn
        square
        flat
        :ripple="false"
        :class="
          navStore.tab == 'layers'
            ? 'bg-primary text-white'
            : 'text-dark bg-accent '
        "
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
        <p class="text-h6 text-dark q-mb-none text-weight-light">
          Select Geography
        </p>

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
      -->
        <q-btn
          class=""
          color="primary"
          padding="xs"
          size="md"
          flat
          icon="help"
          @click="goToHelp('geographyTab')"
        >
          <!--q-menu anchor="top right" self="top left">
            <q-card class="q-pa-md">
              <p class="text-body1">Geography Tab Help</p>
              <q-separator></q-separator>
              <p class="q-ma-md">Info...</p>
              <q-btn 
                class="q-mt-sm"
                color="primary"
                label="Learn More"
                @click="navStore.rightDrawerOpen = true; navStore.helpTab = 'faq'"
                style="width: 300px"
                v-close-popup
                flat>
            </q-btn>
            </q-card>
          </q-menu--></q-btn
        >
      </q-toolbar>

      <q-separator></q-separator>
      <p class="q-ma-md">
        Start by selecting a specific geography (either at the Statewide, HUC 8
        or HUC10 watershed scale) within which you want to prioritize the
        physical barriers to fish passage. A user can select the watershed from
        the dropdown menu, or by selecting the watershed boundary directly on
        the map. Then, tab through the options in the top bar to select and view
        prioritizations within that geography for different fish species, to
        filter results by additional metrics, and finally to see the
        site-specific data for an individual barrier. The user can view
        additional political and ecological layers concurrently with the results
        in the ‘Layers’ tab.
      </p>

      <GeographicFilter></GeographicFilter>
    </div>
    <div v-if="navStore.tab == 'fish'">
      <q-toolbar class="bg-white">
        <p class="text-h6 text-dark q-mb-none q-pb-none text-weight-light">
          Fish Priorities <br/>
          <p class="text-bold text-body2 q-pa-none q-mb-xs"> {{ geographyStore.tab.toUpperCase()  }} {{ geographyStore.searchTerm }}</p>
        </p>

        <q-space></q-space>
        <!--q-btn class="" color="primary" padding="xs" size="md" flat @click="filter= !filter" :icon="filter?'filter_alt':'filter_alt_off'" >
             <q-tooltip>
          Show/Hide filters
        </q-tooltip></q-btn
      -->
        <q-btn
          class=""
          color="primary"
          padding="xs"
          size="md"
          flat
          icon="help"
          @click="goToHelp('fishPriorityTab')"
        >
          <!--q-menu anchor="top right" self="top left">
            <q-card class="q-pa-md">
              <p class="text-body1">Fish Priority Tab Help</p>
              <q-separator></q-separator>
              <p class="q-ma-md">Info...</p>
              <q-btn 
                class="q-mt-sm"
                color="primary"
                label="Learn More"
                @click="navStore.rightDrawerOpen = true; navStore.helpTab = 'scenarios'"
                style="width: 300px"
                v-close-popup
                flat>
            </q-btn>
            </q-card>
          </q-menu--></q-btn
        >
      </q-toolbar>

      <q-separator></q-separator>

      <fish-priorities></fish-priorities>
    </div>
    <div v-if="navStore.tab == 'filters'">
      <q-toolbar class="bg-white">
        <p class="text-h6 text-dark q-mb-none text-weight-light">
          Additional Filtering
        </p>

        <q-space></q-space>
        <q-btn
          class=""
          color="primary"
          padding="xs"
          size="md"
          flat
          icon="help"
          @click="goToHelp('filtersTab')"
        >
          <!--q-menu anchor="top right" self="top left">
            <q-card class="q-pa-md">
              <p class="text-body1">Additional Filtering Tab Help</p>
              <q-separator></q-separator>
              <p class="q-ma-md">Info...</p>
              <q-btn 
                class="q-mt-sm"
                color="primary"
                label="Learn More"
                @click="navStore.rightDrawerOpen = true; navStore.helpTab = 'scenarios'"
                style="width: 300px"
                v-close-popup
                flat>
            </q-btn>
            </q-card>
          </q-menu--></q-btn
        >
        <!--q-btn class="" color="primary" padding="xs" size="md" flat @click="filter= !filter" :icon="filter?'filter_alt':'filter_alt_off'" >
             <q-tooltip>
          Show/Hide filters
        </q-tooltip></q-btn
      -->
        <!--q-btn class="" color="primary" padding="xs" size="md" flat icon="help" to="/help/faq" /-->

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
        <p class="text-h6 text-dark q-mb-none text-weight-light">
          Reference Layers
        </p>

        <q-space></q-space>
        <q-btn
          class=""
          color="primary"
          padding="xs"
          size="md"
          flat
          icon="help"
          @click="goToHelp('layersTab')"
        >
          <!--q-menu anchor="top right" self="top left">
            <q-card class="q-pa-md">
              <p class="text-body1">Additional Layers Tab Help</p>
              <q-separator></q-separator>
              <p class="q-ma-md">Info...</p>
              <q-btn 
                class="q-mt-sm"
                color="primary"
                label="Learn More"
                @click="navStore.rightDrawerOpen = true; navStore.helpTab = 'scenarios'"
                style="width: 300px"
                v-close-popup
                flat>
            </q-btn>
            </q-card>
          </q-menu--></q-btn
        >
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

      <div
        class="q-pa-md"
        id="layerList"
        style="height: calc(100vh - 200px)"
      ></div>
    </div>
    <div v-if="navStore.tab == 'info'">
      <q-toolbar class="bg-white">
        <p class="text-h6 text-dark q-mb-none text-weight-light">
          Selected Barrier Info
        </p>

        <q-space></q-space>
        <q-btn
          class=""
          color="primary"
          padding="xs"
          size="md"
          flat
          icon="help"
          @click="goToHelp('detailsTab')"
        >
          <!--q-menu anchor="top right" self="top left">
            <q-card class="q-pa-md">
              <p class="text-body1">Details Tab Help</p>
              <q-separator></q-separator>
              <p class="q-ma-md">Info...</p>
              <q-btn 
                class="q-mt-sm"
                color="primary"
                label="Learn More"
                
                style="width: 300px"
                v-close-popup
                flat>
            </q-btn>
            </q-card>
          </q-menu--></q-btn
        >
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
