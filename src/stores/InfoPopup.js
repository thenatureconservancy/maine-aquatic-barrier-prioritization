import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'



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
    { category: 'About the Crossing', alias: 'HUC12 Code', field: 'HUC12' },
    { category: 'About the Crossing', alias: 'HUC10 Name', field: 'HUC10_Name' },
    { category: 'About the Crossing', alias: 'HUC10 Code', field: 'HUC10' },
    { category: 'About the Crossing', alias: 'HUC8 Name', field: 'HUC8_Name' },
    { category: 'About the Crossing', alias: 'HUC6 Name', field: 'HUC6_Name' },
    { category: 'About the Crossing', alias: 'Passability Score (0-1)', field: 'Passability' },
    { category: 'About the Crossing', alias: 'Flood Risk Estimate', field: 'FloodRisk' },
    { category: 'Prioritization Results', alias: 'Atlantic Salmon- Statewide Tier', field: 'AtlanticSalmon_Statewide_Tier'},
    { category: 'Prioritization Results', alias: 'Atlantic Salmon- HUC8 Tier', field: 'AtlanticSalmon_HUC8_Tier' },
    { category: 'Prioritization Results', alias: 'Atlantic Salmon- HUC10 Tier', field: 'AtlanticSalmon_HUC10_Tier' },
    { category: 'Prioritization Results', alias: 'Inland Brook Trout- Statewide Tier', field: 'BrookTrout_Statewide_Tier' },
    { category: 'Prioritization Results', alias: 'Inland Brook Trout- HUC8 Tier', field: 'BrookTrout_HUC8_Tier' },
    { category: 'Prioritization Results', alias: 'Inland Brook Trout- HUC10 Tier', field: 'BrookTrout_HUC10_Tier' },
    { category: 'Prioritization Results', alias: 'Shad/Blueback Herring- Statewide Tier', field: 'ShadBBH_Statewide_Tier' },
    { category: 'Prioritization Results', alias: 'Shad/Blueback Herring- HUC8 Tier', field: 'ShadBBH_HUC8_Tier' },
    { category: 'Prioritization Results', alias: 'Shad/Blueback Herring- HUC10 Tier', field: 'ShadBBH_HUC10_Tier' },
    { category: 'Prioritization Results', alias: 'Coastal Anadromous- Statewide Tier', field: 'Coastal_Statewide_Tier' },
    { category: 'Prioritization Results', alias: 'Coastal Anadromous- HUC8 Tier', field: 'Coastal_HUC8_Tier' },
    { category: 'Prioritization Results', alias: 'Coastal Anadromous- HUC10 Tier', field: 'Coastal_HUC10_Tier' },
    { category: 'Prioritization Results', alias: 'Alewife- Statewide Tier', field: 'Alewife_Statewide_Tier' },
    { category: 'Prioritization Results', alias: 'Alewife- HUC8 Tier', field: 'Alewife_HUC8_Tier' },
    { category: 'Prioritization Results', alias: 'Alewife- HUC10 Tier', field: 'Alewife_HUC10_Tier' },
    { category: 'Network', alias: '# Downstream Barriers', field: 'batCountDS' },
    { category: 'Network', alias: '# Downstream Hydropower', field: 'DSHydro' },
    { category: 'Network', alias: '# Downstream Passage Facilities', field: 'DSFishways' },
    { category: 'Network', alias: 'Absolute Gain (meters)', field: 'batAbs' },
    { category: 'Network', alias: 'Downstream Passability Product (0-1)', field: 'dsPassabilityProduct' },
    { category: 'Network', alias: 'Total Drainage Area (sq km)', field: 'TotDASqKM' },
    { category: 'Network', alias: 'Total Func Net (Upstream + Downstream, meters)', field: 'batTotUSDS' },
    { category: 'Network', alias: 'Upstream Functional Network Length (meters)', field: 'batFuncUS' },
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
      alias: 'Total BKT Hab Length (miles)',
      field: 'MilesBT_HVH'
    },
    {
      category: 'Fish Habitat - Inland Brook Trout (BKT)',
      alias: 'Upstream BKT Hab (miles)',
      field: 'MilesBT_HVH_USonly'
    },
    {
      category: 'Fish Habitat - Atlantic Salmon',
      alias: 'Cumulative upstream salmon habitat units',
      field: 'cumulativeSalmHabUnits'
    },
    {
      category: 'Fish Habitat - Atlantic Salmon',
      alias: 'Salmon Habitat Quality',
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
   
    const authStore = useAuthStore()
    let list = ''
    if (authStore.userAllowed){
     list = internalPhotos[details.value.Site_ID]
    }
        
    else{
     list = photos[details.value.Site_ID]
    }
    
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
