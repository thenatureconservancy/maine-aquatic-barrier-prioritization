<script setup>
import { ref } from "vue";
import { useFishPriorityStore } from "../stores/fishPriority";
let store = useFishPriorityStore();
import { usePanelNavigationStore } from "../stores/panelNavigation";
const navStore = usePanelNavigationStore();

function updateSlider(key, selected, slider) {
  slider.includes(key) ? slider.splice(selected, 1) : slider.push(key);
  store.getDef();
}
function expandHelp(slider) {
  navStore.rightDrawerOpen = true;
  navStore.helpTab = "scenarios";
  navStore[slider.expand] = true;
  const element = document.getElementById(slider.expand);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // or 'auto'
        block: "nearest", // 'start', 'center', 'end', or 'nearest'
        inline: "nearest", // for horizontal alignment
      });
    }
}
</script>

<template>
  <div class="q-px-md q-pt-sm">
    <!--q-btn color="primary" padding="sm" size="sm" class="q-mb-md" flat icon="videocam"
      >View Training Video</q-btn
  -->
    <div class="q-pa-sm shadow-2">
      <p
        class="text-body1 q-mb-none bg-blue-grey-6 q-pa-xs q-pl-md text-white q-mt-none"
      >
        Choose species by which to symbolize:
      </p>
      <q-select
        @update:model-value="store.selectAllKeys()"
        dense
        options-dense=""
        outlined
        :emit-value="false"
        v-model="store.symbolizeByField"
        :options="[
          {
            label: 'None',
            val: 'none',
            statewide: 'None',
            huc8: 'None',
            huc10: 'None',
          },
          {
            label: 'Atlantic Salmon',
            val: 'salmon',
            statewide: 'AtlanticSalmon_Statewide_Tier',
            huc8: 'AtlanticSalmon_HUC8_Tier',
            huc10: 'AtlanticSalmon_HUC10_Tier',
          },
          {
            label: 'Inland Brook Trout',
            val: 'trout',
            statewide: 'BrookTrout_Statewide_Tier',
            huc8: 'BrookTrout_HUC8_Tier',
            huc10: 'BrookTrout_HUC10_Tier',
          },
          {
            label: 'Shad/Blueback Herring',
            val: 'shad',
            statewide: 'ShadBBH_Statewide_Tier',
            huc8: 'ShadBBH_HUC8_Tier',
            huc10: 'ShadBBH_HUC10_Tier',
          },
          {
            label: 'Coastal Anadromous',
            val: 'ana',
            statewide: 'Coastal_Statewide_Tier',
            huc8: 'Coastal_HUC8_Tier',
            huc10: 'Coastal_HUC10_Tier',
          },
          {
            label: 'Alewife',
            val: 'alewife',
            statewide: 'Alewife_Statewide_Tier',
            huc8: 'Alewife_HUC8_Tier',
            huc10: 'Alewife_HUC10_Tier',
          },
        ]"
      ></q-select>
    </div>
    <div class="q-mt-md q-pa-sm shadow-2">
      <p class="text-body1 q-mb-none bg-blue-grey-6 q-pa-xs q-pl-md text-white">
        Refine results by fish and tier:
      </p>

      <p class="q-ma-sm">
        Tier 1: Top 10% (of the results) <br />
        Tier 2: 10-25% <br />
        Tier 3: 25-50% <br />Tier 4: 50-75% <br />
        Tier 5: 75-100%
      </p>

      <q-toolbar class="q-mb-none">
        <p class="text-primary text-bold q-ml-sm">
          <q-btn
            size="sm"
            outline
            color="primary"
            @click="store.clearAll()"
            icon="delete"
            label="CLEAR all Tiers"
          ></q-btn>
        </p>
        <q-space></q-space>
        <p class="text-primary text-bold q-mr-sm">Results- {{ store.count }}</p>
      </q-toolbar>

      <div
        class=""
        v-for="(slider, index) in store.speciesSliders"
        :key="index"
      >
        <!--div class="col-1 self-center">
      <q-radio :val="index" size="sm" class="bg-white q-ml-sm" v-model="store.selected"></q-radio>
    </div-->
        <div class="">
          <div
            class="q-mx-md q-pa-sm bg-white"
            :style="
              slider.selected.length == 0
                ? 'border: none'
                : 'border:  2px solid #143153'
            "
          >
            <p class="text-body1 q-mb-xs">
              <!--q-checkbox
                v-model="slider.active"
                @update:model-value="
                  slider.active == true
                    ? (slider.selected = [0, 1, 2, 3, 4])
                    : (slider.selected = [])
                "
              ></q-checkbox-->
              {{ slider.title }}
              <q-btn
                color="primary"
                padding="sm"
                size="sm"
                flat
                round
                icon="help"
                @click="expandHelp(slider)"
              ></q-btn>
              <q-btn
                :color="
                  store.symbolizeByField.label == slider.title
                    ? 'primary'
                    : 'grey-5'
                "
                padding="sm"
                size="sm"
                flat
                round
                icon="location_on"
                @click="
                  store.symbolizeByField = store.findSymbolizeByOption(
                    slider.title
                  )
                "
              >
                <q-tooltip> Symbolize by </q-tooltip>
              </q-btn>
            </p>

            <q-btn
              v-for="(val, key) in store.options"
              @click="
                updateSlider(key, slider.selected.indexOf(key), slider.selected)
              "
              padding="sm"
              square
              :key="key"
              dense
              unelevated=""
              size="md"
              stack
              :color="slider.selected.includes(key) ? 'primary' : 'accent'"
              :text-color="slider.selected.includes(key) ? 'white' : 'grey-9'"
              >{{ val.label }}

              <!--p class="text-caption q-mb-none">({{ slider.statewide[key + 1] }})</p-->
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
