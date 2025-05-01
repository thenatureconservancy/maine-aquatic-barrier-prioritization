import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import esriRequest from '@arcgis/core/request'

export const useSupportingLayersStore = defineStore('supportingLayers', () => {
  //reactive
  const state = ref({
    ticked: ['3_0'],
    expanded: ['2_0', '9_0', '14_0', '18_0'],
    filter: '',
    filterRef: null,
    showTree: false,
    treeData: [],
    treeState: {},
    opacity: 1
  })

  //static
  const supportingMapLayers = [
    {
      mapService:
        'https://cumulus-ags.tnc.org/arcgis/rest/services/nascience/Emerald_Edge/MapServer',
      skipLayers: [0, 1, 4, 6, 8, 23, 28, 29, 30, 31, 32, 33],
      title: 'Layers',
      popupTemplate: [
        {
          id: 9999,
          fields: [
            { fieldName: 'Subbasin', label: 'Sub Basin' },
            { fieldName: 'SubbasinR', label: 'Sub Basin R' },
            { fieldName: 'AreaC', label: 'Area(units)' }
          ]
        },
        // for now this placeholder is required.  I am not sure why but the last layer in this list will not display correctly.
        {
          id: 9999,
          fields: [{ fieldName: 'none', label: 'placeholder' }]
        }
      ]
    }
  ]

  //getters
  /*const aoiName = computed(() => {
    let aoi = selections.value.aoi

    if (aoi == 'Geography') {
      aoi = 'Geography'
      if (selections.value.country) {
        aoi = aoi + ' > ' + selections.value.country.replace('c', 'C').replace('us', 'US')
      }
    }
    if (selections.value.state) {
      aoi = aoi + ' > ' + selections.value.state
    }
    return aoi
  })*/

  //actions
  function requestSupportingLayers() {
    //for each map service object in supporting map layers

    try {
      let obj = []
      let smnum = supportingMapLayers.length
      console.log(smnum)
      let smcount = 0
      supportingMapLayers.forEach((service, index) => {
        esriRequest(service.mapService + '/layers?f=pjson', {
          responseType: 'json'
        }).then(function (response) {
          console.log(response)
          let layerJson = response.data.layers
          //push main header to the object
          obj.push({
            label: service.title,
            children: [],
            id: 999 + index,
            noTick: true,
            type: 'header'
          })
          let storeNodes = []
          let type = ''
          layerJson.forEach((l) => {
            service.popupTemplate.forEach((popup) => {
              if (l.id == popup.id) {
                type = 'Featue Layer'
              } else type = 'Raster Layer'
            })
            // add layer to layer viewer if it's id is not present in the skip array
            if (service.skipLayers.indexOf(l.id) == -1) {
              // Group Layer with no parent
              if (l.type == 'Group Layer' && !l.parentLayer) {
                //push the object to the list as child of main header
                obj[index].children.push({
                  label: l.name,
                  children: [],
                  id: l.id + '_' + index,
                  noTick: true,
                  type: type
                })
                //find the index of the object we just pushed, saves the reference to the location
                let parentIndex = obj[index].children.findIndex(
                  (obj) => obj.id == l.id + '_' + index
                )
                //save the parent node to the store with reference to its location in the object
                storeNodes.push({
                  parentIndex: parentIndex,
                  parentLoc: obj[index].children[parentIndex],
                  parentId: l.id + '_' + index,
                  description: l.description
                })
              }
              // featurel layer with parent
              if (l.type !== 'Group Layer' && l.parentLayer) {
                //find the location of the parent in the node lookup
                let nodesIndex = storeNodes.findIndex(
                  (obj) => obj.parentId == l.parentLayer.id + '_' + index
                )
                //set the location of the parent
                let parentLoc = storeNodes[nodesIndex].parentLoc
                //push the child to the parent
                parentLoc.children.push({
                  label: l.name,
                  children: [],
                  body: 'toggle',
                  id: l.id + '_' + index,
                  description: l.description,
                  type: type,
                  opacity: 1
                })
              }
              // group layer with parent
              if (l.type == 'Group Layer' && l.parentLayer) {
                //find the location of the parent in the node lookup
                let nodesIndex = storeNodes.findIndex(
                  (obj) => obj.parentId == l.parentLayer.id + '_' + index
                )
                //set the location of the parent
                let parentLoc = storeNodes[nodesIndex].parentLoc
                //push the new parent into the found parent as child
                parentLoc.children.push({
                  label: l.name,
                  children: [],
                  id: l.id + '_' + index,
                  noTick: true,
                  type: type
                })
                //find the index of the child we just pushed
                let parentIndex = parentLoc.children.findIndex(
                  (obj) => obj.id == l.id + '_' + index
                )
                //save the reference to the location
                parentLoc = parentLoc.children[parentIndex]
                //save the parent node to the store with reference to its location in the object
                storeNodes.push({
                  parentIndex: parentIndex,
                  parentLoc: parentLoc,
                  parentId: l.id + '_' + index,
                  description: l.description,
                  opacity: 1
                })
              }
              // feature layer with no parent length = number of nodes
              if (l.type !== 'Group Layer' && !l.parentLayer) {
                obj[index].children.push({
                  label: l.name,
                  children: [],
                  body: 'toggle',
                  id: l.id + '_' + index,
                  description: l.description,
                  opacity: 1,
                  type: type
                })
              }
            }
          })
          smcount = smcount + 1

          if (smcount == smnum) {
            console.log(obj.children)
            state.value.treeData = obj[0].children
            state.value.showTree = true
            //context.commit('updateSupportingLayers', obj)
            //context.commit('updateSLReady', true)
          }
        })
      })
    } catch (error) {
      console.log(error)
      //context.commit('updateSupportingLayers', 'error')
    }
  }

  return { state, supportingMapLayers, requestSupportingLayers }
})
