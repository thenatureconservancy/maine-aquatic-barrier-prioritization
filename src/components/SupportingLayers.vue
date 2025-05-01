<script setup>
import { useSupportingLayersStore } from '../stores/supportingLayers'
import { ref } from 'vue'
const store = useSupportingLayersStore()
store.requestSupportingLayers()

/** REFS */
const tree = ref(null)
const mobile = false
const getDescription = {
  'Global Model':
    'SANTORO, M., CARTUS, O., CARVALHAIS, N., ROZENDAAL, D. M. A., AVITABILE, V., ARAZA, A., DE BRUIN, S., HEROLD, M., QUEGAN, S., RODRÍGUEZ-VEIGA, P., BALZTER, H., CARREIRAS, J., SCHEPASCHENKO, D., KORETS, M., SHIMADA, M., ITOH, T., MORENO MARTÍNEZ, Á., CAVLOVIC, J., CAZZOLLA GATTI, R., DA CONCEIÇÃO BISPO, P., DEWNATH, N., LABRIÈRE, N., LIANG, J., LINDSELL, J., MITCHARD, E. T. A., MOREL, A., PACHECO PASCAGAZA, A. M., RYAN, C. M., SLIK, F., VAGLIO LAURIN, G., VERBEECK, H., WIJAYA, A. & WILLCOCK, S. 2021. The global forest above-ground biomass pool for 2010 estimated from high-resolution satellite observations. Earth Syst. Sci. Data, 13, 3927-3950. <a href="https://essd.copernicus.org/articles/13/3927/2021/" target="_blank">Link to article</a> <br/><br/>SANTORO, M. & CARTUS, O. 2021. ESA Biomass Climate Change Initiative (Biomass_cci): Global datasets of forest above-ground biomass for the years 2010, 2017 and 2018, v3. NERC EDS Centre for Environmental Data Analysis. <a href="https://dx.doi.org/10.5285/5f331c418e9f4935b8eb1b836f8a91b8" target="_blank">Data download</a>',
  'Continental US Model':
    'WILLIAMS, C. A., HASLER, N., GU, H. & ZHOU, Y. 2020. Forest Carbon Stocks and Fluxes from the NFCMS, Conterminous USA, 1990-2010. ORNL DAAC, Oak Ridge, Tennessee, USA. <a href="https://doi.org/10.3334/ORNLDAAC/1829" target="_blank">Link to article</a>',
  'Canada Model':
    'MATASCI, G., HERMOSILLA, T., WULDER, M. A., WHITE, J. C., COOPS, N. C., HOBART, G. W., BOLTON, D. K., TOMPALSKI, P. & BATER, C. W. 2018. Three decades of forest structural dynamics over Canada' +
    "'s" +
    'forested ecosystems using Landsat time-series and lidar plots. Remote Sensing of Environment, 216, 697-714. <a href="https://www.sciencedirect.com/science/article/pii/S0034425718303572" target="_blank">Link to article</a>,&nbsp;<a href="https://opendata.nfis.org/mapserver/nfis-change_eng.html" target="_blank">Data download</a>',
  'Pacific Northwest Model':
    'HUDAK, A. T., FEKETY, P. A., KANE, V. R., KENNEDY, R. E., FILIPPELLI, S. K., FALKOWSKI, M. J., TINKHAM, W. T., SMITH, A. M. S., CROOKSTON, N. L., DOMKE, G. M., CORRAO, M. V., BRIGHT, B. C., CHURCHILL, D. J.,GOULD, P. J., MCGAUGHEY, R. J., KANE, J. T. & DONG, J. 2020. A carbon monitoring system for mapping regional, annual aboveground biomass across the northwestern USA. Environmental Research Letters, 15, 095003. <a href="https://dx.doi.org/10.1088/1748-9326/ab93f9" target="_blank">Link to article</a>. <br/><br/> FEKETY, P. A. & HUDAK, A. T. 2020. LiDAR Derived Forest Aboveground Biomass Maps, Northwestern USA, 2002-2016. ORNL DAAC, Oak Ridge, Tennessee, USA. <a href="https://doi.org/10.3334/ORNLDAAC/1766" target="_blank">Data download</a>',
  Emissions:
    'GFW 2021. Forest greenhouse gas emissions. Global Forest Watch. <a href="https://data.globalforestwatch.org/datasets/gfw::forest-greenhouse-gas-emissions/about" target="_blank">Link to article</a>',
  Flux: 'HARRIS, N. L., GIBBS, D. A., BACCINI, A., BIRDSEY, R. A., DE BRUIN, S., FARINA, M., FATOYINBO, L., HANSEN, M. C., HEROLD, M., HOUGHTON, R. A., POTAPOV, P. V., SUAREZ, D. R., ROMAN-CUESTA, R. M., SAATCHI, S. S., SLAY, C. M., TURUBANOVA, S. A. & TYUKAVINA, A. 2021. Global maps of twenty-first century forest carbon fluxes. Nature Climate Change, 11, 234-240. <a href="https://doi.org/10.1038/s41558-020-00976-6" target="_blank">Link to article</a>',
  Sequestration:
    'GFW 2021. Forest carbon removals. Global Forest Watch. <a href="https://data.globalforestwatch.org/datasets/gfw::forest-carbon-removals/about target="_blank">Link to article</a>',
  'Available for action':
    'SHANLEY, C.S., GRAVES, R.A., SCHINDEL, M., ROBERTSON, J.C., DREVER, C.R. CASE, M.J., & BISWAS, T. in review. Mapping forest-based natural climate solutions. SHANLEY, C.S., 2023. Mapping forest-based natural climate solutions. Harvard Dataverse. <a href="https://doi.org/10.7910/DVN/D3XUHZ" target="_blank">Link to article</a>',
  'Not currently available for action':
    'SHANLEY, C.S., GRAVES, R.A., SCHINDEL, M., ROBERTSON, J.C., DREVER, C.R. CASE, M.J., & BISWAS, T. in review. Mapping forest-based natural climate solutions. SHANLEY, C.S., 2023. Mapping forest-based natural climate solutions. Harvard Dataverse. <a href="https://doi.org/10.7910/DVN/D3XUHZ" target="_blank">Link to article</a>',
  'Not available for action':
    'SHANLEY, C.S., GRAVES, R.A., SCHINDEL, M., ROBERTSON, J.C., DREVER, C.R. CASE, M.J., & BISWAS, T. in review. Mapping forest-based natural climate solutions. SHANLEY, C.S., 2023. Mapping forest-based natural climate solutions. Harvard Dataverse. <a href="https://doi.org/10.7910/DVN/D3XUHZ" target="_blank">Link to article</a>'
}
const opacity = ref(1)
/** METHODS */
function setTransparency(value, id, type) {
  let layerInfo = id.split('_')
  let layerObj = {
    value: value,
    id: layerInfo[0],
    mapServiceIndex: layerInfo[1],
    type: type
  }
  store.state.opacity = layerObj
}

function setTicked() {
  let tickedObj = []

  store.state.ticked.forEach((layer) => {
    let node = tree.value.getNodeByKey(layer)
    let type = node.type
    let layerInfo = layer.split('_')
    tickedObj.push({
      mapServiceIndex: layerInfo[1],
      id: layerInfo[0],
      type: type
    })
  })

  store.state.treeState = {
    tickedObj: tickedObj,
    ticked: store.state.ticked,
    expanded: store.state.expanded
  }
}
</script>

<template>
  <div @click.stop @keypress.stop class="q-mx-md q-mb-md q-px-md q-pb-md">
    <q-linear-progress v-if="!store.state.showTree" dark query color="accent" class="q-mt-sm" />
    <div v-if="store.state.showTree">
      <q-tree
        ref="tree"
        :nodes="store.state.treeData"
        node-key="id"
        tick-strategy="leaf"
        v-model:ticked="store.state.ticked"
        v-model:expanded="store.state.expanded"
        @update:ticked="setTicked()"
      >
        <template v-slot:default-header="prop">
          <div class="row items-center" v-if="prop.node.icon">
            <div class="text-weight-bold text-primary">
              {{ prop.node.label }}
            </div>
            <q-btn
              @click.stop="clickedIcon(prop.node.id)"
              class="q-ml-sm"
              padding="none"
              color="primary"
              flat
              icon="info"
            />
          </div>
          <div class="row items-center" v-if="!prop.node.icon">
            <div class="">{{ prop.node.label }}</div>
          </div>
        </template>

        <template v-slot:body-toggle="prop">
          <div class="text-right q-pr-sm">
            <q-btn class="q-mr-sm" color="primary" padding="xs" size="sm" flat icon="info_outline">
              <q-menu anchor="top right" self="top right">
                <q-banner class="q-pa-md" style="width: 350px">
                  <q-toolbar>
                    <p class="q-mb-none text-body1">{{ prop.node.label }}</p>
                    <q-space></q-space>
                    <q-btn flat size="md" padding="xs" icon="close" v-close-popup></q-btn>
                  </q-toolbar>
                  <q-separator></q-separator>
                  <p class="q-mt-md" v-html="getDescription[prop.node.label]"></p>

                  <q-separator></q-separator>
                  <p class="q-ma-md">Set Opacity</p>
                  <div class="text-center">
                    <q-slider
                      type="number"
                      filled
                      style="max-width: 200px"
                      @change="setTransparency($event, prop.node.id, prop.node.type)"
                      :min="0"
                      :max="1"
                      :step="0.1"
                      snap
                      label
                      v-model="prop.node.opacity"
                    />
                  </div>
                </q-banner> </q-menu
            ></q-btn>
          </div>

          <!--q-expansion-item
                expand-icon="expand_more"
                expand-icon-class="text-accent"
                expand-icon-toggle
                dense
                dense-toggle
                label=""
                header-class="text-secondary text-caption"
                id="expandMore"
              >
                <div class="row q-pa-sm items-center shadow-2">
                  <div class="col-6">
                    <p class="text-primary q-mb-none">Set Opacity</p>
                    <q-input
                      dense
                      v-model.number="model"
                      type="number"
                      filled
                      style="max-width: 200px"
                      @change="setTransparency($event, prop.node.id, prop.node.type)"
                      :min="0"
                      :max="1"
                      :step="0.1"
                      :model-value="1"
                    />
                  </div>
                  <div class="col-5">
                    <q-btn flat color="accent" class="q-mr-xs hamburger" no-caps label="Layer Info">
                      <q-menu anchor="top right" self="top left">
                        <q-card class="q-pa-md" style="width: 300px">
                          Lorem Ipsum – tas ir teksta salikums, kuru izmanto poligrāfijā un
                          maketēšanas darbos. Lorem Ipsum ir kļuvis par vispārpieņemtu teksta
                          aizvietotāju kopš 16. gadsimta sākuma. Tajā laikā kāds nezināms iespiedējs
                          izveidoja teksta fragmentu, lai nodrukātu grāmatu ar burtu paraugiem. Tas
                          ir ne tikai pārdzīvojis piecus gadsimtus, bet bez ievērojamām izmaiņām
                          saglabājies arī mūsdienās, pārejot uz datorizētu teksta
                        </q-card>
                      </q-menu>
                    </q-btn>
                  </div>
                </div>
              </q-expansion-item-->
        </template>
      </q-tree>
    </div>
  </div>
</template>

<script>
/*export default {
  name: 'SupportingLayers',
  data() {
    return {
      ticked: this.$store.state.tree.ticked,
      expanded: this.$store.state.tree.expanded,

      filter: '',
      filterRef: null,
      showTree: false,
      treeData: []
    }
  },
  props: ['displayClass'],
  computed: {
    slReady() {
      return this.$store.state.data.slReady
    }
  },
  created() {
    if (this.slReady) {
      this.treeData = this.$store.state.data.supportingLayers
      this.showTree = true
    } else {
      this.$store.dispatch('requestSupportingLayers')
    }
  },

  watch: {
    ticked() {
      //get type and create ticked object with layer id and layer type to retrieve in map
      let tickedObj = []
      this.ticked.forEach((layer) => {
        let node = this.$refs.tree.getNodeByKey(layer)
        let type = node.type
        let layerInfo = layer.split('_')
        tickedObj.push({
          mapServiceIndex: layerInfo[1],
          id: layerInfo[0],
          type: type
        })
      })
      this.$store.commit('updateTreeState', {
        tickedObj: tickedObj,
        ticked: this.ticked,
        expanded: this.expanded
      })
    },
    slReady() {
      if (this.slReady) {
        this.treeData = this.$store.state.data.supportingLayers
        this.showTree = true
      }
    }
  },
  methods: {
    setTransparency(value, id, type) {
      let layerInfo = id.split('_')
      let layerObj = {
        value: value,
        id: layerInfo[0],
        mapServiceIndex: layerInfo[1],
        type: type
      }
      this.$store.commit('updateSupportingLayerVisibleOpacity', layerObj)
    },
    resetFilter() {
      this.filter = ''
      this.filterRef.focus()
    }
  }
} */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.supportingLayersMap {
  background-color: white;
  max-height: calc(100vh - 120px);
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 350px;
  padding: 20px;
}

.supportingLayersPanel {
  padding: 10px;
}
</style>
<style>
.q-tree__node-body {
  padding: 0px !important;
  top: -30px;
  margin-bottom: -30px;
  left: 25px;
}
</style>
