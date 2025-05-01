import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { exportFile } from "quasar";

export const useExportStore = defineStore('export', () => {
  const data = ref([])
  const getDataDownload = ref(false)
  const dataDownloadObject = ref([
    {
        "title": "About the Crossing",
        "children": [
            {
                "name": "Site_ID",
                "field": "Site_ID",
                
            },
            {
                "name": "Most Recent Survey Date",
                "field": "Date_",
                
            },
            {
                "name": "Stream",
                "field": "Stream"
            },
            {
                "name": "Town",
                "field": "Town"
            },
            {
                "name": "Tributary To",
                "field": "Tributary_To"
            },
            {
                "name": "Type",
                "field": "Type"
            },
            {
                "name": "Road Class",
                "field": "Road_Class"
            },
            {
                "name": "Barrier Class",
                "field": "Barrier_Class"
            },
            {
                "name": "Dam Name (if applicable)",
                "field": "Dam_Name"
            },
            {
                "name": "HUC12 Name",
                "field": "HUC12_Name"
            },
            {
                "name": "HUC10 Name",
                "field": "HUC10_Name"
            },
            {
                "name": "HUC8 Name",
                "field": "HUC8_Name"
            },
            {
                "name": "HUC6 Name",
                "field": "HUC6_Name"
            },
            {
                "name": "Passability Score (0-1)",
                "field": "Passability"
            }
        ],
        "download": true,
        "fieldsList": ['Site_ID','Date_,Stream','Town,Tributary_To','Type,Road_Class','Barrier_Class','Dam_Name','HUC12_Name','HUC10_Name','HUC8_Name','HUC6_Name', 'Passability']
    },
    {
        "title": "Network",
        "children": [
            {
                "name": "# Downstream Barriers",
                "field": "batCountDS"
            },
            {
                "name": "# Downstream Hydropower",
                "field": "DSHydro"
            },
            {
                "name": "# Downstream Passage Facilities",
                "field": "DSFishways"
            },
            {
                "name": "Absolute Gain (m)",
                "field": "batAbs"
            },
            {
                "name": "Downstream Passability Product (0-1)",
                "field": "dsPassabilityProduct"
            },
            {
                "name": "Total Drainage Area (sq km)",
                "field": "TotDASqKM"
            },
            {
                "name": "Total Func Net (Upstream + Downstream m)",
                "field": "batTotUSDS"
            },
            {
                "name": "Upstream Functional Network Length (m)",
                "field": "batFuncUS"
            }
        ],
        "download": true,
        "fieldsList": ['batCountDS','DSHydro','DSFishways','batAbs','dsPassabilityProduct','TotDASqKM','batTotUSDS','batFuncUS'],
        
    },
    {
        "title": "Landscape",
        "children": [
            {
                "name": "% Forest in Total Network 100m buff",
                "field": "buff100_Tot_Perc_Statewide_fore"
            },
            {
                "name": "% Forest in Upstream Drainage",
                "field": "DA_PercFor"
            },
            {
                "name": "% Forest Upstream Network 100m buff",
                "field": "buff100_US_Perc_Statewide_fores"
            },
            {
                "name": "Aquifer/coarse sediments",
                "field": "AquiferOrCoarseSed",
        
            },
            {
                "name": "Calc/mod calcareous",
                "field": "CalcModCalc",
        
            }
        ],
        "download": true,
        "fieldsList": ['buff100_Tot_Perc_Statewide_fore','DA_PercFor','buff100_US_Perc_Statewide_fores','AquiferOrCoarseSed','CalcModCalc']
    },
    {
        "title": "Fish Habitat - Alewife",
        "children": [
            {
                "name": "Upstream acres of alewife ponds",
                "field": "usAlewifeAcres"
            }
        ],
        "download": true,
        "fieldsList": ['usAlewifeAcres']
    },
    {
        "title": "Fish Habitat - Inland Brook Trout (BKT)",
        "children": [
            {
                "name": ">=50% Prob of BKT occupancy (+2C)",
                "field": "bkt_p20_occ_gt50",
               
            },
            {
                "name": "Barrier on sea run BKT river",
                "field": "SeaRunBT",
            
            },
            {
                "name": "Heritage Fish Pond Barr",
                "field": "HeritagePondBarrier",
             
            },
            {
                "name": "Prob of BKT occupancy (+2C)",
                "field": "occ_air_2",
         
            },
            {
                "name": "Total BKT Hab Length",
                "field": "MilesBT_HVH"
            },
            {
                "name": "Upstream BKT Hab",
                "field": "MilesBT_HVH_USonly"
            }
        ],
        "download": true,
        "fieldsList": ['bkt_p20_occ_gt50','SeaRunBT','HeritagePondBarrier','occ_air_2','MilesBT_HVH','MilesBT_HVH_USonly']
    },
    {
        "title": "Fish Habitat - Atlantic Salmon",
        "children": [
            {
                "name": "Cumulative upstream salmon habitat units",
                "field": "cumulativeSalmHabUnits"
            },
            {
                "name": "DMR Quality Salmon Habitat",
                "field": "onDMRSalmonPriority"
            },
            {
                "name": "Salmon Critical Habitat HUC10",
                "field": "HUC10_CritSalmHab",
            
            }
        ],
        "download": true,
        "fieldsList": ['cumulativeSalmHabUnits','onDMRSalmonPriority','HUC10_CritSalmHab']
    },
    {
        "title": "Fish Habitat - Smelt",
        "children": [
            {
                "name": "Upstream smelt sites",
                "field": "usSmeltSite",
            
            }
        ],
        "download": true,
        "fieldsList": ['usSmeltSite']
    },
    {
        "title": "Invasive Species",
        "children": [
            {
                "name": "Barrier to invasive species",
                "field": "InvasiveBarrier",
             
            }
        ],
        "download": true,
        "fieldsList": ['InvasiveBarrier']
    }
  ])

  const useSelected = ref('selected')
  function getDataDictionary() {
    let dictionary = []
    for(let i = 0; i < dataDownloadObject._rawValue.length; i++) {
        if (dataDownloadObject._rawValue[i].download) {
         dictionary = dictionary.concat(dataDownloadObject._rawValue[i].children)
        }
    }
    data._rawValue = dictionary

    jsonToCsv()
  }
  function getFieldsList(){
    let fieldsList = []
    for(let i = 0; i < dataDownloadObject._rawValue.length; i++) {
        if (dataDownloadObject._rawValue[i].download) {
         fieldsList = fieldsList.concat(dataDownloadObject._rawValue[i].fieldsList)
        }
    }
    console.log(fieldsList)
    return fieldsList
  }
  function jsonToCsv(type) {
  // Convert JSON to CSV format
    let jsonData = []
    //get fieds from dataDownloadObject
    
    if (data._rawValue.length > 0) {
      let f = []
      let fileName = ''
      //if its the map data flatten the attributes object
      if(data._rawValue[0].attributes) {
        fileName = 'Maine_ABP_selection.csv'
      for(let i = 0; i < data._rawValue.length; i++) {
        jsonData.push(data._rawValue[i].attributes)
      }
     }
     else{
        fileName = 'DataDictionary.csv'
        jsonData = data._rawValue
     }
      
      let csv = ''
      // Extract headers
      const headers = Object.keys(jsonData[0])
      csv += headers.join(',') + '\n'

      // Extract values
      jsonData.forEach((obj) => {
        const values = headers.map((header) => obj[header])
        csv += values.join(',') + '\n'
      })
      const status = exportFile(fileName, csv, "text/csv");

      if (status !== true) {
        alert("Browser denied file download. Please check your browser settings.");
      }
    
  }
  }
  return { jsonToCsv, data, dataDownloadObject, useSelected, getDataDownload, getFieldsList, getDataDictionary }
})


