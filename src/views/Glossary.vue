<script setup>
const items = [
  {
    Term: '<strong>Additionality</strong>',
    Definition:
      'Reductions in greenhouse gases (GHGs) that occur as a direct result of an activity relative to an established baseline. If the reductions would have occurred in the absence of the activity, they are not considered additional.'
  },
  {
    Term: '<strong>Carbon Flux</strong>',
    Definition:
      'The transfer of greenhouse gases (GHGs) between the atmosphere and natural systems, quantified as the amount of carbon sequestered or emitted by a particular system.'
  },
  {
    Term: '<strong>Carbon markets</strong>',
    Definition:
      'Trading systems through which countries or other jurisdictions may buy or sell credits in an effort to meet their jurisdictional limits on emissions'
  },
  {
    Term: '<strong>Carbon offsets</strong>',
    Definition:
      'Compensation for the emission of greenhouse gases (GHGs) elsewhere through the purchase and claiming of carbon credits. A carbon credit represents one metric ton of CO2e that has been sequestered or removed from the atmosphere. Credits can be bought, sold, or traded in voluntary or compliance carbon markets. For an organization or country to become carbon neutral, the total number of credits claimed must be equal to any remaining emissions on a yearly basis. For NCS projects that generate credits, the potential positive and negative impacts to biodiversity, local communities, and other ecosystem services should be considered in addition to the climate benefit'
  },
  {
    Term: '<strong>Carbon sequestration</strong>',
    Definition:
      'The removal of carbon from the atmosphere and its storage in natural systems. In the context of NCS, refers to CO2 taken up by plants through photosynthesis and stored as carbon in biomass and soils'
  },
  {
    Term: '<strong>Carbon sink</strong>',
    Definition:
      'Systems that absorb and store more CO2 than they release, reducing CO2 concentration in the atmosphere. The main natural carbon sinks are soil, trees and other plants, and the ocean. As deforestation and global warming increase, these sinks may be weakened and reduced.'
  },
  {
    Term: '<strong>Carbon stocks</strong>',
    Definition:
      'The total carbon stored in an item or system at a point in time, regardless of the time it took to build up.'
  },
  {
    Term: '<strong>CO2e</strong>',
    Definition:
      'For ease of comparison, greenhouse gases (GHGs) other than CO2 are translated to their carbon dioxide equivalents based on their varying global warming potential.'
  },
  {
    Term: '<strong>Co-benefits</strong>',
    Definition:
      'The added benefits to people and nature arising from acts to control climate change, other than the direct mitigation benefit.'
  },
  {
    Term: '<strong>Data resolution</strong>',
    Definition:
      'Data resolution refers to the level of detail or granularity in which data is captured, represented, or measured. It determines the level of precision and accuracy in describing or quantifying a particular aspect of data.'
  },
  {
    Term: '<strong>Emerald Edge</strong>',
    Definition:
      'The Emerald Edge is the world’s largest coastal temperate rainforest, spanning Alaska, British Columbia, Washington state and Oregon—with over 100 million acres of lush forest, rivers, islands and mountain streams. The Emerald Edge sustains hundreds of communities and thousands of species of flora and fauna—including bears, salmon, wolves and whales—and thanks to its immense carbon-storage capacity, plays a critical role in regulating the global climate. For millennia, Indigenous First Nations, Alaska Natives and coastal Tribes have called this region home, relying on the lands and waters for traditional practices, fishing and other cultural and economic uses. These original stewards’ cultures, languages and livelihoods were born from the landscape and to this day—and for generations to come—they maintain a vibrant and strong connection to the lands and waters.'
  },
  {
    Term: '<strong>Forest carbon datasets</strong>',
    Definition:
      'Forest carbon datasets represent the carbon stocks in a forest ecosystem, including carbon stored aboveground and/or belowground. These datasets may also represent the carbon flux associated with forest ecosystems. These datasets can be generated remotely (i.e. via satellite images and statistical models) or through on-the-ground assessment (i.e., via forest inventories).'
  },
  {
    Term: '<strong>Indigenous Peoples and local communities (IPLCs)</strong>',
    Definition:
      'Peoples and communities who possess a profound relationship with their natural landscapes, which they depend on for cultural, spiritual, economic and physical well-being. Original inhabitants and migrants who have a close relationship with the landscape are likewise considered to be IPLCs. TNC recognizes the collective rights of indigenous peoples as codified in international law.'
  },
  {
    Term: '<strong>Leakage </strong>',
    Definition:
      'An increase of greenhouse gas (GHG) emissions that occurs outside the bounds of an emissions reduction activity and that results from the restrictions caused by that activity.'
  },
  {
    Term: '<strong>Natural climate solutions (NCS)</strong>',
    Definition:
      'Conservation, improved land management, and restoration actions that increase carbon sequestration or avoid greenhouse gas (GHGs) emissions in forests, wetlands, grasslands, and agricultural lands across the globe, while also supporting people and biodiversity'
  },
  {
    Term: '<strong>Riparian zone</strong>',
    Definition:
      'Transition zones adjacent to flowing water in rivers and streams as well as springs, seeps, terraces, and many low-elevation alluvial floodplains, or sometimes lakes and tidewaters. Riparian zones occur at all elevations, from valley bottom floodplains to headwater streams.'
  },
  {
    Term: '<strong>Spatial approach</strong>',
    Definition:
      'The spatial approach is a concept in geography used to understand and analyze social, economic, and environmental phenomena in a spatial or geographic context'
  },
  {
    Term: '<strong>Temperate rainforest</strong>',
    Definition:
      'Temperate rainforests are rainforests with coniferous or broadleaf forests that occur in the temperate zone outside the tropics and receive heavy rain.'
  }
]
</script>
<template>
  <q-scroll-area style="height: calc(100vh - 100px)">
    <div class="text-blue-grey-9 text-right q">
      <p class="text-h6 q-pa-md text-weight-light q-mb-none q-mr-md">GLOSSARY</p>
      <q-list>
        <q-item class="text-left shadow-3 q-ma-md" v-for="(item, key) in items" :key="key">
          <q-item-section>
            <q-item-label
              header
              class="text-body1 text-blue-grey-9"
              v-html="item.Term"
            ></q-item-label>
            <q-item-label class="q-mt-none q-ml-md q-mb-md" v-html="item.Definition">
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-scroll-area>
</template>
