import { ref } from 'vue'
import { defineStore } from 'pinia'
import { computed, render, watch } from 'vue'
import { useChartsStore } from './charts'
import { useSelectionsStore } from './selections'

import pdfMake from 'pdfmake/build/pdfmake'
import htmlToPdfmake from 'html-to-pdfmake'
import html2canvas from 'html2canvas'

export const usePdfStore = defineStore('pdf', () => {
  const chartStore = useChartsStore()
  const selectionStore = useSelectionsStore()

  // Watch for screenshot to be generated for report
  // watch(
  //   () => selectionStore.mapScreenshot,
  //   () => {
  //     generatePdf()
  //   }
  // )

  watch(
    () => selectionStore.legendCapture,
    () => {
      console.log(selectionStore.legendCapture)
    }
  )

  async function generatePdf() {
    // Set font of doc
    pdfMake.fonts = {
      Roboto: {
        normal:
          'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics:
          'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics:
          'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
      }
    }

    // Summarydata
    let totalArea = chartStore.charts.totalAreaSelected
    let totalForest = chartStore.charts.totalForestArea

    totalArea = totalArea.toLocaleString('en-US')
    totalForest = totalForest.toLocaleString('en-US')

    let areaName = chartStore.charts.selectedAttributes[0].AreaName
    let hectares = chartStore.charts.selectedAttributes[0].Hectares.toLocaleString('en', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    let forestHa = chartStore.charts.selectedAttributes[0].ForestHa.toLocaleString('en', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    let harrisNet = chartStore.charts.selectedAttributes[0].HarrisNet.toLocaleString('en', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    let harrisEm = chartStore.charts.selectedAttributes[0].HarrisEm.toLocaleString('en', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    let harrisSeq = chartStore.charts.selectedAttributes[0].HarrisSeq.toLocaleString('en', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })

    // Filter null values in objects and place all object values into html2pdf var
    let ownership = ''
    let privateAtt = {}
    let state = {}
    let localGov = {}
    let NGO = {}
    let federalGov = {}
    let indigenous = {}
    let other = {}
    let provincial = {}

    function filterObj(object, newObj) {
      for (let key in object) {
        if (object.hasOwnProperty(key) && object[key] !== null) {
          newObj[key] = object[key]
        }
      }
    }

    /*
    chartStore.charts.selectedAttributesTable.forEach((att) => {
      if (att.OwnerType == 'Private') {
        filterObj(att, privateAtt)
        for (let key in privateAtt) {
          let uM = '(Avg. Ann. MtCO2e/yr)'
          let ownerLabel = ''
          let ownershipVals = ''

          if (key == 'OwnerType') {
            ownerLabel += '<span style="margin-bottom: 3px"><b>' + privateAtt[key] + ':</b></span>'
          }
          if (key == 'Hudak') {
            let newKey = ''
            newKey = 'Pacific Northwest Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              privateAtt[key] +
              '</span>'
          }
          if (key == 'Matasci') {
            let newKey = ''
            newKey = 'Canada Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              privateAtt[key] +
              '</span>'
          }
          if (key == 'Santoro') {
            let newKey = ''
            newKey = 'Global Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              privateAtt[key] +
              '</span>'
          }
          if (key == 'Williams') {
            let newKey = ''
            newKey = 'Continental US Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              privateAtt[key] +
              '</span>'
          }

          ownership += ownerLabel + ownershipVals
        }
      }
      if (att.OwnerType == 'State') {
        filterObj(att, state)
        for (let key in state) {
          let uM = '(Avg. Ann. MtCO2e/yr)'
          let ownerLabel = ''
          let ownershipVals = ''

          if (key == 'OwnerType') {
            ownerLabel += '<span style="margin-bottom: 3px"><b>' + state[key] + ':</b></span>'
          }
          if (key == 'Hudak') {
            let newKey = ''
            newKey = 'Pacific Northwest Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              state[key] +
              '</span>'
          }
          if (key == 'Matasci') {
            let newKey = ''
            newKey = 'Canada Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              state[key] +
              '</span>'
          }
          if (key == 'Santoro') {
            let newKey = ''
            newKey = 'Global Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              state[key] +
              '</span>'
          }
          if (key == 'Williams') {
            let newKey = ''
            newKey = 'Continental US Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              state[key] +
              '</span>'
          }

          ownership += ownerLabel + ownershipVals
        }
      }
      if (att.OwnerType == 'Local government') {
        filterObj(att, localGov)
        for (let key in localGov) {
          let uM = '(Avg. Ann. MtCO2e/yr)'
          let ownerLabel = ''
          let ownershipVals = ''

          if (key == 'OwnerType') {
            ownerLabel += '<span style="margin-bottom: 3px"><b>' + localGov[key] + ':</b></span>'
          }
          if (key == 'Hudak') {
            let newKey = ''
            newKey = 'Pacific Northwest Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              localGov[key] +
              '</span>'
          }
          if (key == 'Matasci') {
            let newKey = ''
            newKey = 'Canada Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              localGov[key] +
              '</span>'
          }
          if (key == 'Santoro') {
            let newKey = ''
            newKey = 'Global Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              localGov[key] +
              '</span>'
          }
          if (key == 'Williams') {
            let newKey = ''
            newKey = 'Continental US Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              localGov[key] +
              '</span>'
          }

          ownership += ownerLabel + ownershipVals
        }
      }
      if (att.OwnerType == 'NGO') {
        filterObj(att, NGO)
        for (let key in NGO) {
          let uM = '(Avg. Ann. MtCO2e/yr)'
          let ownerLabel = ''
          let ownershipVals = ''

          if (key == 'OwnerType') {
            ownerLabel += '<span style="margin-bottom: 3px"><b>' + NGO[key] + ':</b></span>'
          }
          if (key == 'Hudak') {
            let newKey = ''
            newKey = 'Pacific Northwest Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              NGO[key] +
              '</span>'
          }
          if (key == 'Matasci') {
            let newKey = ''
            newKey = 'Canada Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              NGO[key] +
              '</span>'
          }
          if (key == 'Santoro') {
            let newKey = ''
            newKey = 'Global Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              NGO[key] +
              '</span>'
          }
          if (key == 'Williams') {
            let newKey = ''
            newKey = 'Continental US Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              NGO[key] +
              '</span>'
          }

          ownership += ownerLabel + ownershipVals
        }
      }
      if (att.OwnerType == 'Federal') {
        filterObj(att, federalGov)
        for (let key in federalGov) {
          let uM = '(Avg. Ann. MtCO2e/yr)'
          let ownerLabel = ''
          let ownershipVals = ''

          if (key == 'OwnerType') {
            ownerLabel += '<span style="margin-bottom: 3px"><b>' + federalGov[key] + ':</b></span>'
          }
          if (key == 'Hudak') {
            let newKey = ''
            newKey = 'Pacific Northwest Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              federalGov[key] +
              '</span>'
          }
          if (key == 'Matasci') {
            let newKey = ''
            newKey = 'Canada Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              federalGov[key] +
              '</span>'
          }
          if (key == 'Santoro') {
            let newKey = ''
            newKey = 'Global Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              federalGov[key] +
              '</span>'
          }
          if (key == 'Williams') {
            let newKey = ''
            newKey = 'Continental US Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              federalGov[key] +
              '</span>'
          }

          ownership += ownerLabel + ownershipVals
        }
      }
      if (att.OwnerType == 'Indigenous') {
        filterObj(att, indigenous)
        for (let key in indigenous) {
          let uM = '(Avg. Ann. MtCO2e/yr)'
          let ownerLabel = ''
          let ownershipVals = ''

          if (key == 'OwnerType') {
            ownerLabel += '<span style="margin-bottom: 3px"><b>' + indigenous[key] + ':</b></span>'
          }
          if (key == 'Hudak') {
            let newKey = ''
            newKey = 'Pacific Northwest Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              indigenous[key] +
              '</span>'
          }
          if (key == 'Matasci') {
            let newKey = ''
            newKey = 'Canada Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              indigenous[key] +
              '</span>'
          }
          if (key == 'Santoro') {
            let newKey = ''
            newKey = 'Global Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              indigenous[key] +
              '</span>'
          }
          if (key == 'Williams') {
            let newKey = ''
            newKey = 'Continental US Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              indigenous[key] +
              '</span>'
          }

          ownership += ownerLabel + ownershipVals
        }
      }
      if (att.OwnerType == 'Other') {
        filterObj(att, other)
        for (let key in other) {
          let uM = '(Avg. Ann. MtCO2e/yr)'
          let ownerLabel = ''
          let ownershipVals = ''

          if (key == 'OwnerType') {
            ownerLabel += '<span style="margin-bottom: 3px"><b>' + other[key] + ':</b></span>'
          }
          if (key == 'Hudak') {
            let newKey = ''
            newKey = 'Pacific Northwest Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              other[key] +
              '</span>'
          }
          if (key == 'Matasci') {
            let newKey = ''
            newKey = 'Canada Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              other[key] +
              '</span>'
          }
          if (key == 'Santoro') {
            let newKey = ''
            newKey = 'Global Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              other[key] +
              '</span>'
          }
          if (key == 'Williams') {
            let newKey = ''
            newKey = 'Continental US Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              other[key] +
              '</span>'
          }

          ownership += ownerLabel + ownershipVals
        }
      }
      if (att.OwnerType == 'Provincial') {
        filterObj(att, provincial)
        for (let key in provincial) {
          let uM = '(Avg. Ann. MtCO2e/yr)'
          let ownerLabel = ''
          let ownershipVals = ''

          if (key == 'OwnerType') {
            ownerLabel += '<span style="margin-bottom: 3px"><b>' + provincial[key] + ':</b></span>'
          }
          if (key == 'Hudak') {
            let newKey = ''
            newKey = 'Pacific Northwest Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              provincial[key] +
              '</span>'
          }
          if (key == 'Matasci') {
            let newKey = ''
            newKey = 'Canada Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              provincial[key] +
              '</span>'
          }
          if (key == 'Santoro') {
            let newKey = ''
            newKey = 'Global Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              provincial[key] +
              '</span>'
          }
          if (key == 'Williams') {
            let newKey = ''
            newKey = 'Continental US Model' + uM
            ownershipVals +=
              '<span style="margin-left: 5px; margin-bottom: 3px;">' +
              newKey +
              ': ' +
              provincial[key] +
              '</span>'
          }

          ownership += ownerLabel + ownershipVals
        }
      }
    })*/

    var ownershipHtml = htmlToPdfmake(ownership)

    // Convert charts to images
    function getBase64Image2() {
      return new Promise((resolve, reject) => {
        const img = new Image()
        const svgElement = document.querySelector('.chart_two .apexcharts-svg')
        const imageBlobURL =
          'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgElement.outerHTML)
        img.onload = () => {
          var canvas = document.createElement('canvas')
          canvas.width = img.width
          canvas.height = img.height

          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0)
          const dataURL = canvas.toDataURL('image/png')
          resolve(dataURL)
        }
        img.onerror = (error) => {
          reject(error)
        }
        img.src = imageBlobURL
      })
    }

    function getBase64Image() {
      return new Promise((resolve, reject) => {
        const img = new Image()
        const svgElement = document.querySelector('.chart_one .apexcharts-svg')
        const imageBlobURL =
          'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgElement.outerHTML)
        img.onload = () => {
          var canvas = document.createElement('canvas')
          canvas.width = img.width
          canvas.height = img.height
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0)
          const dataURL = canvas.toDataURL('image/png')
          resolve(dataURL)
        }
        img.onerror = (error) => {
          reject(error)
        }
        img.src = imageBlobURL
      })
    }

    getBase64Image()
    getBase64Image2()

    // const divEl = document.createElement('div')
    // const legEl = document.querySelector('.esri-legend-layer')

    // divEl.classList.add('legend-screenshot')

    // legEl.parentNode.insertBefore(divEl, legEl)

    // divEl.appendChild(legEl)

    // function getLegend() {
    //   return new Promise((resolve, reject) => {
    //     html2canvas(document.querySelector('.legend-screenshot'), {
    //       height: 300,
    //       width: 200
    //     }).then(function (canvas) {
    //       document.body.appendChild(canvas)
    //       let legendImg = canvas.toDataURL()

    //       legendImg.onload = () => {
    //         resolve(legendImg)
    //       }

    //       legendImg.onerror = (error) => {
    //         reject(error)
    //       }
    //     })
    //   })
    // }

    // getLegend()

    let today = new Date()
    let dateString = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Build PDF
    let docDefinition = {
      pageOrientation: 'landscape',
      header: [
        {
          text: dateString,
          alignment: 'right',
          margin: [0, 20, 20, 0]
        }
      ],
      footer: function (currentPage, pageCount) {
        return {
          text: 'Page ' + currentPage.toString() + ' of ' + pageCount.toString(),
          alignment: 'center',
          margin: [0, 0, 0, 10]
        }
      },
      content: [
        {
          text: 'Emerald Edge Forest Carbon Report',
          style: ['header1', 'centerItem'],
          margin: [0, 0, 0, 20]
        },
        {
          text: 'Summary stats:',
          style: ['header2', ''],
          margin: [10, 0, 0, 20]
        },
        //first page summary row 1
        {
          style: 'section',
          table: {
            widths: ['50%', '50%'],
            body: [
              [
                {
                  text: ' ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, true, true, false]
                },
                {
                  text: ' ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, true, true, false]
                }
              ],
              [
                {
                  text: 'Area of interest:',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                },
                {
                  text: 'Total Hectares:',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                }
              ],

              [
                {
                  style: ['centerItem', 'header1b'],
                  text: areaName,
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                },
                {
                  style: ['centerItem', 'header1b'],
                  text: hectares,
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                }
              ],
              [
                {
                  style: ['centerItem', 'header1'],
                  text: ' ',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, true]
                },
                {
                  style: ['centerItem'],
                  text: ' ',
                  style: 'header1',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, true]
                }
              ]
            ]
          },
          margin: 10
        },
        //first page summary row 2
        {
          style: 'section',
          table: {
            widths: ['50%', '50%'],
            margin: [50, 50, 50, 50],
            body: [
              [
                {
                  text: ' ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, true, true, false]
                },
                {
                  text: ' ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, true, true, false]
                }
              ],
              [
                {
                  text: 'Total Forest Hectares:',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                },
                {
                  text: 'Sequestion (Avg. Ann. MgCO2e/yr): ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                }
              ],

              [
                {
                  style: ['centerItem', 'header1b'],
                  text: hectares,
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                },
                {
                  style: ['centerItem', 'header1b'],
                  text: harrisSeq,
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                }
              ],
              [
                {
                  style: ['centerItem', 'header1'],
                  text: ' ',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, true]
                },
                {
                  style: ['centerItem'],
                  text: ' ',
                  style: 'header1',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, true]
                }
              ]
            ]
          },
          margin: 10
        },
        //first page summary row 3
        {
          style: 'section',
          table: {
            widths: ['50%', '50%'],
            body: [
              [
                {
                  text: ' ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, true, true, false]
                },
                {
                  text: ' ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, true, true, false]
                }
              ],
              [
                {
                  text: 'Emission (Avg. Ann. MgCO2e/yr):',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                },
                {
                  text: 'Net (Avg. Ann. MgCO2e/yr): ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                }
              ],

              [
                {
                  style: ['centerItem', 'header1b'],
                  text: harrisEm,
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                },
                {
                  style: ['centerItem', 'header1b'],
                  text: harrisNet,
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                }
              ],
              [
                {
                  style: ['centerItem', 'header1'],
                  text: ' ',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, true]
                },
                {
                  style: ['centerItem'],
                  text: ' ',
                  style: 'header1',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, true]
                }
              ]
            ]
          },
          margin: 10
        },
        //map
        {
          image: selectionStore.mapScreenshot,
          style: ['centerItem'],
          margin: [0, 0, 0, 10]
        },
        // {
        //   image: await getLegend(),
        //   width: 100
        // },
        {
          style: 'section',
          text: ''
        },
        //space
        {
          style: ['section', 'header1'],
          text: ' ',
          margin: [0, 20, 0, 20]
        },
        //charts
        {
          style: 'section',
          table: {
            widths: ['50%', '50%'],
            margin: [50, 50, 50, 50],
            body: [
              [
                {
                  text: ' ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, true, false, false]
                },
                {
                  text: ' ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, true, true, false]
                }
              ],
              [
                {
                  text: 'Forest Carbon Flux',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                },
                {
                  text: 'Aboveground Forest Carbon',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                }
              ],
              [
                {
                  text: ' ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [true, false, true, false]
                },
                {
                  text: ' ',
                  style: 'header1a',
                  alignment: 'center',
                  fillColor: '#f1f1f1',
                  border: [false, false, true, false]
                }
              ],
              [
                {
                  style: ['centerItem'],
                  image: await getBase64Image(),
                  fillColor: '#f1f1f1',
                  margin: [5, 2, 10, 20],
                  width: 250,
                  border: [true, false, true, true]
                },
                {
                  style: ['centerItem'],
                  image: await getBase64Image2(),
                  fillColor: '#f1f1f1',
                  margin: [5, 2, 10, 20],
                  width: 250,
                  border: [false, false, true, true]
                }
              ]
            ]
          }
        }
        /*
        {
          text: areaName,
          style: ['header3']
        },
        {
          text: 'Hectares: ' + hectares,
          margin: [5, 2, 0, 2]
        },
        {
          text: 'Forest Hectares: ' + forestHa,
          margin: [5, 2, 0, 2]
        },
        {
          text: 'Emission (Avg. Ann. MtCO2e/yr): ' + harrisEm,
          margin: [5, 2, 0, 2]
        },
        {
          text: 'Sequestion (Avg. Ann. MtCO2e/yr): ' + harrisSeq,
          margin: [5, 2, 0, 2]
        },
        {
          text: 'Net (Avg. Ann. MtCO2e/yr): ' + harrisNet,
          margin: [5, 2, 0, 2]
        },
        ownershipHtml*/
      ],
      defaultStyle: {
        fontSize: 11,
        color: '#393b3a'
      },
      styles: {
        header1: {
          bold: true,
          fontSize: 18
        },
        header1a: {
          fontSize: 14
        },
        header1b: {
          bold: true,
          fontSize: 18,
          color: '#00703c'
        },
        header2: {
          bold: true,
          fontSize: 14
        },
        header3: {
          bold: true,
          fontSize: 12
        },
        header4: {
          fontSize: 12
        },
        anotherStyle: {
          italics: true,
          alignment: 'right'
        },
        boldItem: {
          bold: true
        },
        centerItem: {
          alignment: 'center'
        }
      }
    }

    pdfMake.createPdf(docDefinition).download()
    selectionStore.selections.printMap = false
  }

  return { generatePdf }
})
