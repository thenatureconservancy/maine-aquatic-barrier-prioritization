<script setup>
import { ref, onMounted } from "vue";
import { usePanelNavigationStore } from "../stores/panelNavigation";
import ToolHelp from "@/components/ToolHelp.vue";
import FishScenarioTables from "@/components/FishScenarioTables.vue";
import Glossary from "./Glossary.vue";
import Faq from "./Faq.vue";
import { on } from "@arcgis/core/core/reactiveUtils";

const navStore = usePanelNavigationStore();
</script>

<template>
  <div class="bg-grey-2 row">
    <div class="col-4 bg-grey-2" style="height: 100vh">
      <q-tabs
        v-model="navStore.helpTab"
        :vertical="true"
        class="text-blue-grey-6"
        active-class="text-primary bg-grey-4"
      >
        <q-tab
          name="introduction"
          label="Introduction"
          class="text-left justify-start"
        />
        <q-tab name="toolhelp" label="Tool Tutorial" />
        <q-tab name="report" label="comprehensive report" />
        <q-tab name="appendix" label="data source appendix" />
        <q-tab name="glossary" label="metric glossary" />
        <q-tab name="scenarios" label="fish scenarios" />
        
        <!--q-tab name="faq" label="FAQ" /-->
      </q-tabs>
    </div>
    <div class="col bg-white">
      <q-tab-panels v-model="navStore.helpTab" animated>
        <q-tab-panel name="introduction" class="q-pa-none q-ma-none">
          <q-scroll-area style="height: calc(100vh - 120px)" class="q-pa-md">
            <p class="text-h6 q-py-xs q-mb-none q-mt-none">
              Welcome to the Maine Aquatic Barrier Prioritization Tool
            </p>
            <p>
              This tool is designed to support the river restoration community
              in identifying in-stream barriers for removal or improved fish
              passage. The prioritized results are designed to help identify
              high priority fish passage projects. It is based on the best
              available state-wide data and does not incorporate any data on
              social, feasibility, or economic factors. It is intended to
              provide screening-level support and should not be considered a
              substitute for local-scale information.
            </p>
            <p>
              This tool builds on the Penobscot Aquatic Barrier Prioritization
              tool, which was funded by the NOAA Office of Habitat Conservation
              through the NOAA Habitat Blueprint, Penobscot Habitat Focus Area
              (beginning in 2014). This material is based upon work supported by
              the Natural Resources Conservation Service, U.S. Department of
              Agriculture, under number NR181218XXXXG001 (YYYY). Any opinions,
              findings, conclusions, or recommendations expressed in this
              publication are those of the author(s) and do not necessarily
              reflect the views of the U.S. Department of Agriculture.
            </p>
          </q-scroll-area>
        </q-tab-panel>
        <q-tab-panel name="report">
          <p class="text-h6 q-pa-md q-mb-none q-mr-md text-center">
            COMPREHENSIVE TOOL REPORT
          </p>
          <p>
            The tool report includes (but is not limited to) background,
            approach, data sources and analysis methods, and key limitations. It
            also includes Appendices detailing the data sources and a glossary
            of metrics.
          </p>
          <div
            class="bg-grey-1 q-pa-lg text-weight-medium text-primary q-ma-md text-center"
          >
            <p>Download the full tool report here.</p>
            <q-btn flat primary label="Download" icon="download" size="md">
            </q-btn>
          </div>
        </q-tab-panel>
        <q-tab-panel name="appendix">
          <p class="text-h6 q-pa-md q-mb-none q-mr-md text-center">
            DATA SOURCE APPENDIX
          </p>

          <p>
            This appendix details the data utilized in the tool, including what
            it displays, it's sourcing entity, and the update year used in the
            tool.
          </p>
          <div
            class="bg-grey-1 q-pa-lg text-weight-medium text-primary text-center q-ma-md"
          >
            <p>
              Download the Data Source Appendix here (also found in the Tool
              Report).
            </p>
            <q-btn
              flat
              primary
              label="Download"
              icon="download"
              size="md"
            ></q-btn>
          </div>
        </q-tab-panel>
        <q-tab-panel name="glossary">
          <p class="text-h6 q-pa-md text-center q-mb-none q-mr-md">
            METRIC GLOSSARY
          </p>
          <p>
            The glossary provides information on each metric used in the tool,
            and in the data a user can download for the region they've
            specified. It gives the field name in the download file, what the
            metric conveys specifically, the units used, and other information.
          </p>
          <div
            class="bg-grey-1 q-pa-lg text-weight-medium text-primary text-center q-ma-md"
          >
            <p>
              Download the Metric Glossary here (also found in the Tool Report).
            </p>
            <q-btn
              flat
              primary
              label="Download"
              icon="download"
              size="md"
            ></q-btn>
          </div>
        </q-tab-panel>
        <q-tab-panel name="scenarios" class="q-pa-none q-ma-none">
          <q-scroll-area style="height: calc(100vh - 120px)" class="q-pa-md">
            <p class="text-h6 q-pa-md text-center q-mb-none q-mr-md">
              FISH SCENARIOS
            </p>
            <p>
              Metrics were weighted and combined (see Section 4.3 of the Tool
              Report) to produce five different “consensus” prioritization
              scenarios that were identified by the original project workgroup.
              Each scenario represents a separate prioritization for a separate
              objective. A barrier that is a high priority for removal or
              improved passage in one scenario may be a low priority for removal
              in another scenario. Further, in some cases, scenarios only
              included a subset of barriers in the state. For example, the
              Coastal Anadromous Fish scenario only included those barriers on
              coastal streams. In other cases, all barriers in the state were
              included.
            </p>
            <p>
              Each scenario was run for the applicable barriers throughout the
              state as well as stratified by HUC8 and HUC10 watersheds. This
              allows users to see priorities displayed relative to the state or
              to a watershed of interest.
            </p>
            <p>
              The following tables list the consensus scenarios - the weights
              that were given to metrics in each scenario and any filter that
              was applied to barriers to limit which barriers were included.
            </p>
            <fish-scenario-tables></fish-scenario-tables>
           
          </q-scroll-area>
        </q-tab-panel>
        <q-tab-panel name="toolhelp" class="q-pa-none q-ma-none">
          <tool-help></tool-help>
        </q-tab-panel>
        <q-tab-panel name="faq">
          <p class="text-h6 q-pa-md text-weight-light q-mb-none q-mr-md">
            FREQUENTLY ASKED QUESTIONS
          </p>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
  <!--mobile-->
</template>
