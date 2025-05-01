import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInfoPopupStore = defineStore('InfoPopup', () => {
  const data = ref([
    { category: 'About the Crossing', alias: 'Site_ID', field: 'Site_ID' },
    { category: 'About the Crossing', alias: 'Most Recent Survey Date', field: 'Date_', maskDate: 'Y' },
    { category: 'About the Crossing', alias: 'Stream', field: 'Stream' },
    { category: 'About the Crossing', alias: 'Town', field: 'Town' },
    { category: 'About the Crossing', alias: 'Tributary To', field: 'Tributary_To' },
    { category: 'About the Crossing', alias: 'Type', field: 'Type' },
    { category: 'About the Crossing', alias: 'Road Class', field: 'Road_Class' },
    { category: 'About the Crossing', alias: 'Barrier Class', field: 'Barrier_Class' },
    { category: 'About the Crossing', alias: 'Dam Name (if applicable)', field: 'Dam_Name' },
    { category: 'About the Crossing', alias: 'HUC12 Name', field: 'HUC12_Name' },
    { category: 'About the Crossing', alias: 'HUC10 Name', field: 'HUC10_Name' },
    { category: 'About the Crossing', alias: 'HUC8 Name', field: 'HUC8_Name' },
    { category: 'About the Crossing', alias: 'HUC6 Name', field: 'HUC6_Name' },
    { category: 'About the Crossing', alias: 'Passability Score (0-1)', field: 'Passability' },
    { category: 'Network', alias: '# Downstream Barriers', field: 'batCountDS' },
    { category: 'Network', alias: '# Downstream Hydropower', field: 'DSHydro' },
    { category: 'Network', alias: '# Downstream Passage Facilities', field: 'DSFishways' },
    { category: 'Network', alias: 'Absolute Gain (m)', field: 'batAbs' },
    { category: 'Network', alias: 'Downstream Passability Product (0-1)', field: 'dsPassabilityProduct' },
    { category: 'Network', alias: 'Total Drainage Area (sq km)', field: 'TotDASqKM' },
    { category: 'Network', alias: 'Total Func Net (Upstream + Downstream m)', field: 'batTotUSDS' },
    { category: 'Network', alias: 'Upstream Functional Network Length (m)', field: 'batFuncUS' },
    {
      category: 'Landscape',
      alias: '% Forest in Total Network 100m buff',
      field: 'buff100_Tot_Perc_Statewide_fore'
    },
    { category: 'Landscape', alias: '% Forest in Upstream Drainage', field: 'DA_PercFor' },
    {
      category: 'Landscape',
      alias: '% Forest Upstream Network 100m buff',
      field: 'buff100_US_Perc_Statewide_fores'
    },
    { category: 'Landscape', alias: 'Aquifer/coarse sediments', field: 'AquiferOrCoarseSed', maskYN: 'Y' },
    { category: 'Landscape', alias: 'Calc/mod calcareous', field: 'CalcModCalc', maskYN: 'Y' },
    {
      category: 'Fish Habitat - Alewife',
      alias: 'Upstream acres of alewife ponds',
      field: 'usAlewifeAcres'
    },
    {
      category: 'Fish Habitat - Inland Brook Trout (BKT)',
      alias: '>=50% Prob of BKT occupancy (+2C)',
      field: 'bkt_p20_occ_gt50',
      maskYN: 'Y'
    },
    {
      category: 'Fish Habitat - Inland Brook Trout (BKT)',
      alias: 'Barrier on sea run BKT river',
      field: 'SeaRunBT',
      maskYN: 'Y'
    },
    {
      category: 'Fish Habitat - Inland Brook Trout (BKT)',
      alias: 'Heritage Fish Pond Barr',
      field: 'HeritagePondBarrier',
      maskYN: 'Y'
    },
    {
      category: 'Fish Habitat - Inland Brook Trout (BKT)',
      alias: 'Prob of BKT occupancy (+2C)',
      field: 'occ_air_2',
      maskPercent: 'Y'
    },
    {
      category: 'Fish Habitat - Inland Brook Trout (BKT)',
      alias: 'Total BKT Hab Length',
      field: 'MilesBT_HVH'
    },
    {
      category: 'Fish Habitat - Inland Brook Trout (BKT)',
      alias: 'Upstream BKT Hab',
      field: 'MilesBT_HVH_USonly'
    },
    {
      category: 'Fish Habitat - Atlantic Salmon',
      alias: 'Cumulative upstream salmon habitat units',
      field: 'cumulativeSalmHabUnits'
    },
    {
      category: 'Fish Habitat - Atlantic Salmon',
      alias: 'DMR Quality Salmon Habitat',
      field: 'onDMRSalmonPriority',
      maskHighLow: 'Y'
    },
    {
      category: 'Fish Habitat - Atlantic Salmon',
      alias: 'Salmon Critical Habitat HUC10',
      field: 'HUC10_CritSalmHab',
      maskYN: 'Y'
    },
    { category: 'Fish Habitat - Smelt', 
      alias: 'Upstream smelt sites', 
      field: 'usSmeltSite',
      maskYN: 'Y'},
    {
      category: 'Invasive Species',
      alias: 'Barrier to invasive species',
      field: 'InvasiveBarrier',
      maskYN: 'Y'
    }
  ])
  const details = ref({ Site_ID: '' })

  const slide = ref(0)

  const photoList = computed(() => {
    let list = photos[details.value.Site_ID]

    if (list) {
      return list
    } else {
      return []
    }
  })

  const infoList = computed(() => {
    const json = data.value
    const structuredData = {}
    // Iterate over each entry in the JSON object
    for (const entry of json) {
      const heading = entry.category
      const alias = entry.alias
      const field = entry.field
      let value = details.value[entry.field] 
      if(entry.maskYN && entry.maskYN == 'Y'){
        value = details.value[entry.field] == 0 ? 'No' : 'Yes'
      }
      if(entry.maskPercent && entry.maskPercent == 'Y'){
        value = Math.round(details.value[entry.field] * 100) + '%'
      }
      if(entry.maskHighLow && entry.maskHighLow == 'Y'){
        let obj = {0: 'No', 1: 'Low', 2:'Medium', 3:'High', 4:'Very High'} 
        value = obj[details.value[entry.field]]
      }
      if(entry.maskDate && entry.maskDate == 'Y'){
        value = new Date(details.value[entry.field]).toLocaleDateString()
      }
      // Create a nested structure
      if (!structuredData[heading]) {
        structuredData[heading] = []
      }

      structuredData[heading].push({
        name: alias,
        field: field,
        value: typeof value == 'number' && value > 0 && !Number.isInteger(value) ? new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1
      }).format(value) : value
      })
    }

    // Convert the nested structure to an array of objects
    const result = []
    for (const heading in structuredData) {
      result.push({
        title: heading,
        children: structuredData[heading],
        download: true
      })
    }
    console.log(result)
    return result
  })

  function infoListD(){
    const json = data.value
    const structuredData = {}
    // Iterate over each entry in the JSON object
    for (const entry of json) {
      const heading = entry.category
      const alias = entry.alias
      const field = entry.field
      let value = details.value[entry.field] 
      if(entry.maskYN && entry.maskYN == 'Y'){
        value = details.value[entry.field] == 0 ? 'No' : 'Yes'
      }
      if(entry.maskPercent && entry.maskPercent == 'Y'){
        value = Math.round(details.value[entry.field] * 100) + '%'
      }
      if(entry.maskHighLow && entry.maskHighLow == 'Y'){
        let obj = {0: 'No', 1: 'Low', 2:'Medium', 3:'High', 4:'Very High'} 
        value = obj[details.value[entry.field]]
      }
      if(entry.maskDate && entry.maskDate == 'Y'){
        value = new Date(details.value[entry.field]).toLocaleDateString()
      }
      // Create a nested structure
      if (!structuredData[heading]) {
        structuredData[heading] = []
      }

      structuredData[heading].push({
        name: alias,
        field: field,
        value: typeof value == 'number' && value > 0 && !Number.isInteger(value) ? new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1
      }).format(value) : value
      })
    }

    // Convert the nested structure to an array of objects
    const result = []
    for (const heading in structuredData) {
      result.push({
        title: heading,
        children: structuredData[heading],
        download: true
      })
    }
    console.log(result)
    return result
  }

  return { data, details, slide, photoList, infoList,infoListD }
})
