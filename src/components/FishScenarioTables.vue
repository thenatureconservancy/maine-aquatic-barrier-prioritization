<script setup>
import { usePanelNavigationStore } from "@/stores/panelNavigation";
const navStore = usePanelNavigationStore();
const cols = [
  {
    name: "metricName",
    label: "Metric Name",
    align: "left",
    field: "metricName",
  },
  {
    name: "weight",
    label: "Weight",
    align: "right",
    field: "weight",
  },
];
const coastalRows = [
  {
    metricName: "Upstream Functional Network Length",
    weight: 10,
  },
  {
    metricName:
      "The product (multiplication) of downstream barrier passability scores",
    weight: 10,
  },
  {
    metricName: "Percent Forested Landcover in upstream drainage area",
    weight: 10,
  },
  {
    metricName:
      "% forested landcover in 100m buffer of total network (upstream & downstream)",
    weight: 10,
  },
  {
    metricName:
      "Aquifer OR coarse sediments are found in upstream functional network OR downstream functional network OR both (all treated the same)",
    weight: 15,
  },
  {
    metricName:
      "Calcareous or moderately calcareous geology is found in upstream functional network OR downstream functional network OR both",
    weight: 5,
  },
  {
    metricName: "Barrier falls on SeaRunBrookTrout lines",
    weight: 5,
  },
  {
    metricName: "There are smelt sites upstream of the barrier",
    weight: 10,
  },
  {
    metricName:
      "Miles of high or very high priority Brook trout habitat in upstream + downstream networks",
    weight: 15,
  },
  {
    metricName:
      "Miles of high or very high priority Brook trout habitat in upstream functional network",
    weight: 10,
  },
];
const inlandRows = [
  {
    metricName: "Upstream Functional Network Length",
    weight: 10,
  },
  {
    metricName:
      "Absolute Gain (min of upstream & downstream functional network)",
    weight: 10,
  },
  {
    metricName: "Total Functional Network Length (upstream + downstream)",
    weight: 5,
  },
  {
    metricName:
      "Aquifer OR coarse sediments are found in upstream functional network OR downstream functional network OR both (all treated the same)",
    weight: 10,
  },
  {
    metricName:
      "Calcareous or moderately calcareous geology is found in upstream functional network OR downstream functional network OR both",
    weight: 5,
  },
  {
    metricName: "Percent Forested Landcover in upstream drainage area",
    weight: 10,
  },
  {
    metricName:
      "% forested landcover in 100m buffer of total network (upstream & downstream)",
    weight: 10,
  },
  {
    metricName: "Probability of BKT occupancy (+2C)",
    weight: 10,
  },
  {
    metricName: "Probability of BKT occupancy (+2C) >= 50%",
    weight: 5,
  },
  {
    metricName:
      "Miles of high or very high priority Brook trout habitat in upstream + downstream networks",
    weight: 10,
  },
  {
    metricName:
      "Miles of high or very high priority Brook trout habitat in upstream functional network",
    weight: 5,
  },
  {
    metricName:
      "Presence of high or very high Brook trout habitat upstream OR downstream of barrier",
    weight: 5,
  },
  {
    metricName:
      "Heritage fish ponds in upstream functional network AND downstream functional network",
    weight: 5,
  },
];
const salmonRows = [
  {
    metricName: "Upstream Functional Network Length",
    weight: 20,
  },
  {
    metricName: "Count of Downstream Barriers",
    weight: 10,
  },
  {
    metricName: "Count of downstream fish passage facilities",
    weight: 10,
  },
  {
    metricName:
      "The product (multiplication) of downstream barrier passability scores",
    weight: 10,
  },
  {
    metricName: "Percent Forested Landcover in upstream drainage area",
    weight: 10,
  },
  {
    metricName:
      "Cumulative upstream salmon habitat units, discounted by barrier pass",
    weight: 15,
  },
  {
    metricName: "Salmon Habitat Quality streamline* that the barrier is on",
    weight: 15,
  },
  {
    metricName: "Barrier is in a Salmon Critical Habitat HUC10",
    weight: 10,
  },
];
const alewifeRows = [
  {
    metricName: "Count of Downstream Barriers",
    weight: 10,
  },
  {
    metricName: "Count of downstream fish passage facilities",
    weight: 20,
  },
  {
    metricName:
      "The product (multiplication) of downstream barrier passability scores",
    weight: 10,
  },
  {
    metricName: "Percent Forested Landcover in upstream drainage area",
    weight: 20,
  },
  {
    metricName:
      "Upstream acres of alewife ponds (total, ignoring any barriers in the way)",
    weight: 40,
  },
];
const shadRows = [
  {
    metricName: "Upstream Functional Network Length",
    weight: 20,
  },
  {
    metricName: "Count of Downstream Barriers",
    weight: 10,
  },
  {
    metricName: "Count of downstream fish passage facilities",
    weight: 20,
  },
  {
    metricName: "Count of downstream hydropower facilities",
    weight: 20,
  },
  {
    metricName:
      "The product (multiplication) of downstream barrier passability scores",
    weight: 10,
  },
  {
    metricName: "Percent Forested Landcover in upstream drainage area",
    weight: 20,
  },
];
</script>
<template>
  <q-list bordered class="rounded-borders">
    <q-expansion-item
      expand-separator
      label="Coastal Anadromous Fish"
      header-class="text-body1 text-primary text-weight-medium"
      expand-icon-class="text-primary"
      v-model="navStore.coastalExpanded"
      id="coastalExpanded"
    >
      <q-card>
        <q-card-section>
          <p>
            The Coastal Anadromous Fish scenario was designed to prioritize
            barriers whose removal could benefit a suite of coastal anadromous
            fish species including sea run Brook trout and smelt. The analysis
            was limited to barriers falling on small coastal streams. Coastal
            streams were defined as streams with an upstream drainage area less
            than 100 km2 that drain into a tidal area (directly into the ocean
            or the tidal portion of a larger river).
          </p>
        </q-card-section>
        <q-table
          :rows="coastalRows"
          :columns="cols"
          row-key="metricName"
          hide-bottom
          wrap-cells
          rows-per-page-options="0"
          style="border: 1px solid black"
        ></q-table>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      header-class="text-body1 text-primary text-weight-medium"
      expand-separator
      label="Inland Brook Trout"
      expand-icon-class="text-primary"
      v-model="navStore.inlandExpanded"
      id="inlandExpanded"
    >
      <q-card>
        <q-card-section>
          <p>
            The Inland Brook trout scenario was designed to assess barriers
            whose removal or improvement could benefit Inland Brook trout. It
            was designed to provide a counter to the coastal anadromous fish
            scenario and so explicitly excludes the coastal streams that were
            identified for the coastal anadromous scenario.
          </p>
        </q-card-section>
        <q-table
          :rows="inlandRows"
          :columns="cols"
          row-key="metricName"
          hide-bottom
          wrap-cells
          rows-per-page-options="0"
          style="border: 1px solid black"
        ></q-table>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      expand-separator
      header-class="text-body1 text-primary text-weight-medium"
      label="ESA Atlantic Salmon"
      expand-icon-class="text-primary"
      v-model="navStore.salmonExpanded"
      id="salmonExpanded"
    >
      <q-card>
        <q-card-section>
          <p>
            The salmon scenario is focused on identifying barriers to benefit
            the Endangered Species Act-listed Atlantic salmon. To be included in
            the salmon scenario, crossings met the following criteria:
          </p>
          <ul>
            <li>
              If a crossing fell
              <span style="text-decoration: underline">
                within the Distinct Population Segment (DPS),</span
              >
              they were pre-filtered using the Critical Habitat HUC10s. Only
              crossings in one of these HUC10s were scored and prioritized.
            </li>
            <li>
              If a crossing fell
              <span style="text-decoration: underline">outside the DPS,</span>
              they were pre-filtered using the HUC10s with streamlines
              identified by DMR as Medium, High, or Very High quality Atlantic
              salmon habitat. Only crossings in one of these HUC10s were scored
              and prioritized.
            </li>
          </ul>
          <p>
            Barriers that met these criteria were prioritized using these
            metrics and weightings:
          </p>
        </q-card-section>
        <q-table
          :rows="salmonRows"
          :columns="cols"
          row-key="metricName"
          hide-bottom
          wrap-cells
          rows-per-page-options="0"
          style="border: 1px solid black"
        ></q-table>
        <p class="text-caption q-mt-md q-pb-md">
          *Some areas depicted on the Salmon Habitat Quality stream line layer
          are outside of the Distinct Population Segment and State/Federal
          active management areas for the endangered population of Atlantic
          salmon.
        </p>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      expand-icon-class="text-primary"
      header-class="text-body1 text-primary text-weight-medium"
      label="Alewife"
      v-model="navStore.alewifeExpanded"
      id="alewifeExpanded"
    >
      <q-card>
        <q-card-section>
          <p>
            Given the importance of alewife spawning ponds to alewife in Maine,
            the alewife scenario was run for those barriers downstream of mapped
            alewife spawning ponds, whose removal could improve access to these
            critical ponds.
          </p>
        </q-card-section>
        <q-table
          :rows="alewifeRows"
          :columns="cols"
          row-key="metricName"
          hide-bottom
          wrap-cells
          rows-per-page-options="0"
          style="border: 1px solid black"
        ></q-table>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      expand-icon-class="text-primary"
      header-class="text-body1 text-primary text-weight-medium"
      label="American Shad/Blueback Herring"
      v-model="navStore.shadExpanded"
      id="shadExpanded"
    >
      <q-card>
        <q-card-section>
          <p>
            Finally, American shad and Blueback herring were assessed via a
            separate scenario from alewife using the weights listed below for
            all barriers in the state.
          </p>
        </q-card-section>
        <q-table
          :rows="shadRows"
          :columns="cols"
          row-key="metricName"
          hide-bottom
          wrap-cells
          rows-per-page-options="0"
          style="border: 1px solid black"
        ></q-table>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>
<style scoped>
.tableStyle {
  min-width: 350px;
  max-width: 500px;
}
</style>
