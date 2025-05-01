<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
const $q = useQuasar()
const mobile = computed(() => {
  return $q.screen.lt.sm || $q.screen.lt.xs ? true : false
})

const resources = ref([
  {
    Title: 'Emerald Edge Website (nature.org)',
    Link: 'https://www.nature.org/en-us/about-us/where-we-work/priority-landscapes/emerald-edge/',
    LinkText: 'Visit Site',
    SummaryDescription:
      'At the invitation of Indigenous Peoples and local communities, The Nature Conservancy and our Canadian affiliate Nature United are working in partnership to protect ecologically important areas and foster sustainable economies.',
    Thumbnailimage: 'WOPA.Jpg',
    Photocredit: '© Bryan Evans'
  },
  {
    Title: 'Carbon Map Factsheet',
    Link: 'https://www.nature.org/content/dam/tnc/nature/en/documents/Emerald_Edge_Carbon_Map_Factsheet.pdf',
    LinkText: 'Download Document',
    SummaryDescription:
      'The Carbon Map factsheet provides a 4-page overview of the tool, context on how and why it was developed, and key findings. Please visit the link to download the factsheet and please feel free to distribute it within your networks.',
    Thumbnailimage: 'EE_WOPA.Jpg',
    Photocredit: '© Erika Nortemann / TNC'
  },
  {
    Title: 'How the Emerald Edge Could Help Change the World',
    Link: 'https://www.nature.org/en-us/what-we-do/our-priorities/tackle-climate-change/climate-change-stories/emerald-edge-carbon-storage/',
    LinkText: 'Read More',
    SummaryDescription:
      'The vast old-growth forests of the Emerald Edge are one of the world’s best examples of Indigenous-led natural climate solutions. Learn more about the carbon power of these rainforests and about the Indigenous and local communities who steward them.',
    Thumbnailimage: 'EE_NCM_2.Jpg',
    Photocredit: '© Jason Houston'
  },
  {
    Title: 'Emerald Edge Accelerator Factsheet',
    Link: 'https://tnc.box.com/s/0j5yvikc1ucjmf7mga1dyia73a5p7ygq',
    LinkText: 'Download Document',
    SummaryDescription:
      'Informed by the Carbon Map, the Emerald Edge Accelerator program has created a portfolio of viable, high-impact projects that will conserve annually at least 9 million metric tons of C02e mitigation across 40 million hectares.',
    Thumbnailimage: 'EE_NCM.Jpg',
    Photocredit: '© Jason Houston'
  }
])
</script>
<template>
  <div class="bg-white q-pa-md">
    <div class="bg-blue-grey-9">
      <p class="text-center text-h3 text-white text-weight-thin q-pa-lg">Resources</p>
    </div>
  </div>
  <q-scroll-area style="height: calc(100vh - 220px)">
    <q-list>
      <q-item
        v-for="(item, key) in resources"
        :key="key"
        :class="key & 1 ? 'bg-blue-grey-1' : 'bg-white'"
      >
        <q-item-section v-if="!mobile" class="col-1"></q-item-section>
        <q-item-section class="col-md-3">
          <q-item-label class="text-h5 text-blue-grey-9 q-pa-md">{{ item.Title }}</q-item-label>
          <q-item-label class="q-px-md q-pb-md"
            ><q-btn
              :href="item.Link"
              target="_blank"
              :label="item.LinkText"
              color="secondary"
              unelevated
            ></q-btn
          ></q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1">{{ item.SummaryDescription }}</q-item-label>
        </q-item-section>

        <q-item-section class="col items-end">
          <q-img style="width: 250px" class="q-ma-md" :src="item.Thumbnailimage">
            <div class="absolute-bottom text-white text-caption q-pa-none">
              {{ item.Photocredit }}
            </div></q-img
          >
        </q-item-section>
        <q-item-section v-if="!mobile" class="col-1"></q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>
<style scoped>
.q-img__content > div {
  padding: 8px;
}
#background {
  --s: 15px; /* control the size*/
  --c1: #080707;
  --c2: #363636;
  --c3: #1f1f1f;
  opacity: 0.1;
  background:
    conic-gradient(
        from 75deg,
        var(--c1) 15deg,
        var(--c2) 0 30deg,
        #0000 0 180deg,
        var(--c2) 0 195deg,
        var(--c1) 0 210deg,
        #0000 0
      )
      calc(0.5 * var(--s)) calc(0.5 * var(--s) / 0.577),
    conic-gradient(
      var(--c1) 30deg,
      var(--c3) 0 75deg,
      var(--c1) 0 90deg,
      var(--c2) 0 105deg,
      var(--c3) 0 150deg,
      var(--c2) 0 180deg,
      var(--c3) 0 210deg,
      var(--c1) 0 256deg,
      var(--c2) 0 270deg,
      var(--c1) 0 286deg,
      var(--c2) 0 331deg,
      var(--c3) 0
    );
  background-size: var(--s) calc(var(--s) / 0.577);
}
</style>
