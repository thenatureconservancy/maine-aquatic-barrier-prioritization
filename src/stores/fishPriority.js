import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useGeographyStore } from './geography'

export const useFishPriorityStore = defineStore('fishPriority', () => {
  const geographyStore = useGeographyStore()
  const count = ref('11,683')
  const speciesSliders = ref([
    {
      title: 'Atlantic Salmon',
      fields: {
        statewide: 'AtlanticSalmon_Statewide_Tier',
        huc8: 'AtlanticSalmon_HUC8_Tier',
        huc10: 'AtlanticSalmon_HUC10_Tier'
      },
      statewide: {
        field: 'AtlanticSalmon_Statewide_Tier',
        1: 1167,
        2: 1752,
        3: 2921,
        4: 2922,
        5: 2921
      },
      setup: {
        min: 0,
        max: 5
      },
      model: {
        min: 0,
        max: 5
      },
      symbolize: false,
      selected: [],
      active: false
    },
    {
      title: 'Inland Brook Trout',
      fields: {
        statewide: 'BrookTrout_Statewide_Tier',
        huc8: 'BrookTrout_HUC8_Tier',
        huc10: 'BrookTrout_HUC10_Tier'
      },
      statewide: {
        field: 'AtlanticSalmon_Statewide_Tier',
        1: 1167,
        2: 1752,
        3: 2921,
        4: 2922,
        5: 2921
      },
      setup: {
        min: 0,
        max: 5
      },
      model: {
        min: 0,
        max: 5
      },
      symbolize: false,
      selected: [],
      active: false
    },
    {
      title: 'Shad/Blueback Herring',
      fields: {
        statewide: 'ShadBBH_Statewide_Tier',
        huc8: 'ShadBBH_HUC8_Tier',
        huc10: 'ShadBBH_HUC10_Tier'
      },
      statewide: {
        field: 'AtlanticSalmon_Statewide_Tier',
        1: 1167,
        2: 1752,
        3: 2921,
        4: 2922,
        5: 2921
      },
      setup: {
        min: 0,
        max: 5
      },
      model: {
        min: 0,
        max: 5
      },
      symbolize: false,
      selected: [],
      active: false
    },
    {
      title: 'Coastal Anadromous',
      fields: {
        statewide: 'Coastal_Statewide_Tier',
        huc8: 'Coastal_HUC8_Tier',
        huc10: 'Coastal_HUC10_Tier'
      },
      statewide: {
        field: 'AtlanticSalmon_Statewide_Tier',
        1: 1167,
        2: 1752,
        3: 2921,
        4: 2922,
        5: 2921
      },
      setup: {
        min: 0,
        max: 5
      },
      model: {
        min: 0,
        max: 5
      },
      symbolize: false,
      selected: [],
      active: false
    },
    {
      title: 'Alewife',
      fields: {
        statewide: 'Alewife_Statewide_Tier',
        huc8: 'Alewife_HUC8_Tier',
        huc10: 'Alewife_HUC10_Tier'
      },
      setup: {
        min: 0,
        max: 5
      },
      statewide: {
        field: 'AtlanticSalmon_Statewide_Tier',
        1: 1167,
        2: 1752,
        3: 2921,
        4: 2922,
        5: 2921
      },
      model: {
        min: 0,
        max: 5
      },
      symbolize: false,
      selected: [],
      active: false
    }
  ])
  const otherSliders = ref([
    {
      title: 'Filter 1',
      fields: {
        statewide: 'AtlanticSalmon_Statewide_Tier',
        huc8: 'AtlanticSalmon_HUC8_Tier',
        huc10: 'AtlanticSalmon_HUC10_Tier'
      },
      setup: {
        min: 0,
        max: 5
      },
      model: {
        min: 0,
        max: 5
      },
      symbolize: false
    },
    {
      title: 'Filter 2',
      fields: {
        statewide: 'BrookTrout_Statewide_Tier',
        huc8: 'BrookTrout_Statewide_HUC8_Tier',
        huc10: 'BrookTrout_Statewide_HUC10_Tier'
      },
      setup: {
        min: 0,
        max: 5
      },
      model: {
        min: 0,
        max: 5
      },
      symbolize: false
    },
    {
      title: 'Filter 3',
      fields: {
        statewide: 'ShadBBH_Statewide_Tier',
        huc8: 'ShadBBH_HUC8_Tier',
        huc10: 'ShadBBH_HUC10_Tier'
      },
      setup: {
        min: 0,
        max: 5
      },
      model: {
        min: 0,
        max: 5
      },
      symbolize: false
    }
  ])
  function clearAll() {
    for (var i = 0; i < speciesSliders.value.length; i++) {
      speciesSliders.value[i].selected = []
    }
    getDef()
  }

  const selected = ref([])
  const def = ref('')
  const symbolizeByField = ref({
    label: 'None',
    val: 'none',
    statewide: 'None',
    huc8: 'None',
    huc10: 'None'
  })
  function getDef() {
    let species = speciesSliders.value
    let defquery = ''
    for (let i = 0; i < species.length; i++) {
      let field = species[i].fields[geographyStore.tab]
      console.log(field)
      if (species[i].selected.length > 0) {
        if (!defquery) {
          defquery = defquery + '('
        } else {
          defquery = defquery + ' and ('
        }
        let ors = ''
        for (let a = 0; a < species[i].selected.length; a++) {
          ors = ors + field + '=' + (species[i].selected[a] + 1) + ' or '
        }
        ors = ors.slice(0, -3)
        defquery = defquery + ors + ')'
      }
    }
    console.log(defquery)

    def.value = defquery
  }
  const options = [
    { label: 'Tier 1', value: '1' },
    { label: 'Tier 2', value: '2' },
    { label: 'Tier 3', value: '3' },
    { label: 'Tier 4', value: '4' },
    { label: 'Tier 5', value: '5' }
  ]
  function removeKey(key, index) {
    console.log(selected)
  }
  function addKey(key, index) {
    console.log(speciesSliders._rawValue[index])
    speciesSliders._rawValue[index].selected.push(key)
  }
  function findSymbolizeByOption(title) {
    console.log(title)
    let options = [
      { label: 'None', val: 'none', statewide: 'None', huc8: 'None', huc10: 'None' },
      {
        label: 'Atlantic Salmon',
        val: 'salmon',
        statewide: 'AtlanticSalmon_Statewide_Tier',
        huc8: 'AtlanticSalmon_HUC8_Tier',
        huc10: 'AtlanticSalmon_HUC10_Tier'
      },
      {
        label: 'Inland Brook Trout',
        val: 'trout',
        statewide: 'BrookTrout_Statewide_Tier',
        huc8: 'BrookTrout_HUC8_Tier',
        huc10: 'BrookTrout_HUC10_Tier'
      },
      {
        label: 'Shad/Blueback Herring',
        val: 'shad',
        statewide: 'ShadBBH_Statewide_Tier',
        huc8: 'ShadBBH_HUC8_Tier',
        huc10: 'ShadBBH_HUC10_Tier'
      },
      {
        label: 'Coastal Anadromous',
        val: 'ana',
        statewide: 'Coastal_Statewide_Tier',
        huc8: 'Coastal_HUC8_Tier',
        huc10: 'Coastal_HUC10_Tier'
      },
      {
        label: 'Alewife',
        val: 'alewife',
        statewide: 'Alewife_Statewide_Tier',
        huc8: 'Alewife_HUC8_Tier',
        huc10: 'Alewife_HUC10_Tier'
      }
    ]
    let obj = options.find((o) => {
      return o.label == title
    })
    console.log(obj)
    return obj
  }
  function selectAllKeys() {
    console.log('in progress')
  }
  return {
    speciesSliders,
    otherSliders,
    options,
    selected,
    addKey,
    removeKey,
    def,
    getDef,
    symbolizeByField,
    findSymbolizeByOption,
    selectAllKeys,
    clearAll,
    count
  }
})
