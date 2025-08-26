<script setup>
import { onMounted } from "vue";
import { usePanelNavigationStore } from "../stores/panelNavigation";
const navStore = usePanelNavigationStore();

onMounted(() => {
  const element = document.getElementById(navStore.helpSection);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth", // or 'auto'
      block: "nearest", // 'start', 'center', 'end', or 'nearest'
      inline: "nearest", // for horizontal alignment
    });
  }
});
</script>
<template>
  <q-scroll-area style="height: calc(100vh - 120px)" class="q-pa-md">
    <p class="text-h6 q-pa-md text-center q-mb-none q-mr-md">TOOL TUTORIAL</p>
    <p>
      The tool tutorial provides a step-by-step guide to using the tool,
      including how to select a region, download data, and interpret the
      results.
    </p>
    <div id="geographyTab">
      <p class="text-h6 q-pa-md text-left q-mb-none q-mr-md">Geography Tab</p>
      <p>
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
    </div>
    <div id="fishPriorityTab">
      <p class="text-h6 q-pa-md text-left q-mb-none q-mr-md">
        Fish Priority Tab
      </p>
      <p>
        Select the tiers of prioritized results for the fish species of
        interest, which can include multiple fish species concurrently. The user
        can select these tiers by clicking on the respective tier buttons below
        each fish species and can select multiple at the same time. Results
        displayed will indicate those barriers that are ranked in each of the
        species’ tiers selected. (For example, selecting Tier 1 and 2 for
        Alewife and Tier 1 and 2 for American shad/Blueback herring (ASBH) will
        only display crossings that are both Tier 1 or 2 for alewife and Tier 1
        or 2 for SBBH). The species chosen for symbolization will show how the
        crossings in those tiers rank for that species. (In the example above,
        if ASBH is chosen for symbolization, the color coding will indicate the
        rank for ASBH, despite how the crossing ranks for alewife.) The user can
        choose the symbolization species with the dropdown at the top of the
        panel, or by hitting the symbolization icon next to the individual
        species. At any point, the user can also use the dropdown menu to select
        ‘none’ for symbolization, and the points selected will be gray. To
        remove or reset tier filters, the user can press on each tier button
        individually, or use the ‘Clear All Tiers’ button.
      </p>
    </div>
    <div id="filtersTab">
      <p class="text-h6 q-pa-md text-left q-mb-none q-mr-md">Filters Tab</p>
      <p>
        The user can further filter within the entire dataset or their
        prioritized set, using metrics in the eight categories provided. Numeric
        ranges will adjust based on the currently filtered and displayed set of
        crossings.
      </p>
      <p>
        <span class="text-red"> Caution!</span> Some of these metrics available
        for filtering are also used in the different fish prioritization
        scenarios – view which ones are used by clicking in the question mark by
        each scenario in the ‘Fish Priority’ tab. Be aware that choosing to
        additionally filter by any of those same metrics will add weight to that
        metric that was not specified when the working group determined the
        relative importance of each metric to the others in the prioritization.
      </p>
      <p>
        To understand each of the following metrics, and their contributing data
        sources, download the
        <a
          style="cursor: pointer; color: blue"
          @click="navStore.helpTab = 'glossary'"
          >Metric Glossary</a
        >
        and
        <a
          style="cursor: pointer; color: blue"
          @click="navStore.helpTab = 'appendix'"
          >Data Source Appendix</a
        >.
      </p>
    </div>
    <div id="detailsTab">
      <p class="text-h6 q-pa-md text-left q-mb-none q-mr-md">Details Tab</p>
      <p>
        When a crossing point is selected on the screen or by searching by Site
        ID, the crossing will be highlighted, and the upstream and downstream
        network will be traced and viewable on screen. Additionally, the
        crossing's detailed information will be available in the eight data
        categories, and the photos of that crossing will be displayed.
      </p>

      <p>
        To understand each of the following metrics, and their contributing data
        sources, download the
        <a
          style="cursor: pointer; color: blue"
          @click="navStore.helpTab = 'glossary'"
          >Metric Glossary</a
        >
        and
        <a
          style="cursor: pointer; color: blue"
          @click="navStore.helpTab = 'appendix'"
          >Data Source Appendix</a
        >.
      </p>
    </div>
    <div id="layersTab">
      <p class="text-h6 q-pa-md text-left q-mb-none q-mr-md">Layers Tab</p>
      <p>
        Turn on additional reference layers by clicking on the box next to the
        layer name. These layers are for display purposes only and will not
        filter or in any way impact the crossings on the screen.
      </p>

      <p>
        To understand each of the following metrics, and their contributing data
        sources, download the
        <a
          style="cursor: pointer; color: blue"
          @click="navStore.helpTab = 'appendix'"
          >Data Source Appendix</a
        >.
      </p>
    </div>
  </q-scroll-area>
</template>
