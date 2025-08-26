import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useGeographyStore = defineStore('geography', () => {
  const huc8_options = [
    {
      value: '01030002',
      label: 'Dead'
    },
    {
      value: '01020004',
      label: 'Piscataquis'
    },
    {
      value: '01060002',
      label: 'Saco'
    },
    {
      value: '01010002',
      label: 'Allagash'
    },
    {
      value: '01010010',
      label: 'Becaguimec Stream-Saint John River'
    },
    {
      value: '01010006',
      label: 'Headwaters Saint John River'
    },
    {
      value: '01060001',
      label: 'Presumpscot'
    },
    {
      value: '01050004',
      label: 'Passamaquoddy Bay-Bay of Fundy'
    },
    {
      value: '01020002',
      label: 'East Branch Penobscot'
    },
    {
      value: '01050001',
      label: 'St. Croix'
    },
    {
      value: '01050003',
      label: 'St. George-Sheepscot'
    },
    {
      value: '01040002',
      label: 'Lower Androscoggin'
    },
    {
      value: '01010007',
      label: 'Big Black River-Saint John River'
    },
    {
      value: '01040001',
      label: 'Upper Androscoggin'
    },
    {
      value: '01030003',
      label: 'Lower Kennebec'
    },
    {
      value: '01060003',
      label: 'Piscataqua-Salmon Falls'
    },
    {
      value: '01020001',
      label: 'West Branch Penobscot'
    },
    {
      value: '01020003',
      label: 'Mattawamkeag'
    },
    {
      value: '01010005',
      label: 'Meduxnekeag'
    },
    {
      value: '01050002',
      label: 'Maine Coastal'
    },
    {
      value: '01010009',
      label: 'Little River-Saint John River'
    },
    {
      value: '01030001',
      label: 'Upper Kennebec'
    },
    {
      value: '01020005',
      label: 'Lower Penobscot'
    },
    {
      value: '01010003',
      label: 'Fish'
    },
    {
      value: '01010008',
      label: 'St. Francis River-Saint John River'
    },
    {
      value: '01010004',
      label: 'Aroostook'
    }
  ]
  const huc8_options_all = [
    {
      value: '01030002',
      label: 'Dead'
    },
    {
      value: '01020004',
      label: 'Piscataquis'
    },
    {
      value: '01060002',
      label: 'Saco'
    },
    {
      value: '01010002',
      label: 'Allagash'
    },
    {
      value: '01010010',
      label: 'Becaguimec Stream-Saint John River'
    },
    {
      value: '01010006',
      label: 'Headwaters Saint John River'
    },
    {
      value: '01060001',
      label: 'Presumpscot'
    },
    {
      value: '01050004',
      label: 'Passamaquoddy Bay-Bay of Fundy'
    },
    {
      value: '01020002',
      label: 'East Branch Penobscot'
    },
    {
      value: '01050001',
      label: 'St. Croix'
    },
    {
      value: '01050003',
      label: 'St. George-Sheepscot'
    },
    {
      value: '01040002',
      label: 'Lower Androscoggin'
    },
    {
      value: '01010007',
      label: 'Big Black River-Saint John River'
    },
    {
      value: '01040001',
      label: 'Upper Androscoggin'
    },
    {
      value: '01030003',
      label: 'Lower Kennebec'
    },
    {
      value: '01060003',
      label: 'Piscataqua-Salmon Falls'
    },
    {
      value: '01020001',
      label: 'West Branch Penobscot'
    },
    {
      value: '01020003',
      label: 'Mattawamkeag'
    },
    {
      value: '01010005',
      label: 'Meduxnekeag'
    },
    {
      value: '01050002',
      label: 'Maine Coastal'
    },
    {
      value: '01010009',
      label: 'Little River-Saint John River'
    },
    {
      value: '01030001',
      label: 'Upper Kennebec'
    },
    {
      value: '01020005',
      label: 'Lower Penobscot'
    },
    {
      value: '01010003',
      label: 'Fish'
    },
    {
      value: '01010008',
      label: 'St. Francis River-Saint John River'
    },
    {
      value: '01010004',
      label: 'Aroostook'
    }
  ]
  const huc10_options = [
    {
      value: 209,
      label: 'Sunday River-Androscoggin River'
    },
    {
      value: 26,
      label: 'North Branch Dead River'
    },
    {
      value: 16,
      label: 'Upper Mattawamkeag River'
    },
    {
      value: 85,
      label: 'Schoodic Point-Petit-Manan Point Frontal Drainages'
    },
    {
      value: 6,
      label: 'Umcolcus Stream-Aroostook River'
    },
    {
      value: 228,
      label: 'Penobscot Bay'
    },
    {
      value: 3,
      label: 'North Branch Penobscot River'
    },
    {
      value: 106,
      label: 'Lower Sebasticook River'
    },
    {
      value: 4,
      label: 'Aziscohos Lake'
    },
    {
      value: 13,
      label: 'St. Croix Stream'
    },
    {
      value: 67,
      label: 'Mattamiscontis Stream-Piscataquis River'
    },
    {
      value: 166,
      label: 'Little Ossipee River'
    },
    {
      value: 63,
      label: 'West Branch Mattawamkeag River'
    },
    {
      value: 17,
      label: 'Vasseur Stream-St. John River'
    },
    {
      value: 10,
      label: 'Big Lake-Grand Falls Flowage'
    },
    {
      value: 13,
      label: 'South Branch Meduxnekeag River'
    },
    {
      value: 39,
      label: 'Squa Pan Lake-Aroostook River'
    },
    {
      value: 44,
      label: 'Bagaduce River'
    },
    {
      value: 29,
      label: 'West Branch Carrabassett River'
    },
    {
      value: 16,
      label: 'Seboeis River'
    },
    {
      value: 289,
      label: 'Androscoggin Lake-Androscoggin River'
    },
    {
      value: 19,
      label: 'Gilman Stream'
    },
    {
      value: 56,
      label: 'Moosehead Lake'
    },
    {
      value: 21,
      label: 'Grand Manan Channel'
    },
    {
      value: 241,
      label: 'Frontal Drainages of Southern York County'
    },
    {
      value: 102,
      label: 'Narraguagus River-Narraguagus Bay'
    },
    {
      value: 66,
      label: 'Frontal York County Drainages'
    },
    {
      value: 46,
      label: 'Grand Falls-St. John River'
    },
    {
      value: 149,
      label: 'Royal River'
    },
    {
      value: 277,
      label: 'Belgrade Lakes-Messalonskee Stream'
    },
    {
      value: 1,
      label: 'Lower Chiputneticook Lakes'
    },
    {
      value: 106,
      label: 'Union River Bay'
    },
    {
      value: 100,
      label: 'Sebec River'
    },
    {
      value: 35,
      label: 'Fish River'
    },
    {
      value: 38,
      label: 'Ellis River'
    },
    {
      value: 109,
      label: 'Muscongus Bay'
    },
    {
      value: 48,
      label: 'Lower Machias River'
    },
    {
      value: 113,
      label: 'Kenduskeag Stream'
    },
    {
      value: 285,
      label: 'Sebago Lake'
    },
    {
      value: 12,
      label: 'Holeb Pond-Moose River'
    },
    {
      value: 17,
      label: 'Upper East Branch Penobscot River-Grand Lake Matagamon'
    },
    {
      value: 19,
      label: 'Grand Lake Stream'
    },
    {
      value: 46,
      label: 'Sunkhaze Stream-Penobscot River'
    },
    {
      value: 142,
      label: 'Graham Lake'
    },
    {
      value: 36,
      label: 'Sheepscot Bay'
    },
    {
      value: 36,
      label: 'Lower Mattawamkeag River'
    },
    {
      value: 35,
      label: 'East Branch Mattawamkeag River'
    },
    {
      value: 29,
      label: 'Lower West Branch Penobscot River'
    },
    {
      value: 1,
      label: 'Little Black River'
    },
    {
      value: 2,
      label: 'Caucomgomok Lake'
    },
    {
      value: 205,
      label: 'Salmon Falls River'
    },
    {
      value: 13,
      label: 'Seboeis Stream'
    },
    {
      value: 14,
      label: 'Moxie Stream-Kennebec River'
    },
    {
      value: 11,
      label: 'Chamberlain Lake-Webster Brook'
    },
    {
      value: 2,
      label: 'Musquacook Stream'
    },
    {
      value: 56,
      label: 'Hampton River-Frontal Atlantic Ocean'
    },
    {
      value: 5,
      label: 'Upper St. Croix River'
    },
    {
      value: 79,
      label: 'Marsh River'
    },
    {
      value: 83,
      label: 'Lower St. Croix River'
    },
    {
      value: 10,
      label: 'North Branch Meduxnekeag River'
    },
    {
      value: 73,
      label: 'Fall Brook-Kennebec River'
    },
    {
      value: 126,
      label: 'Carrabassett Stream-Kennebec River'
    },
    {
      value: 31,
      label: 'Middle Mattawamkeag River'
    },
    {
      value: 102,
      label: 'Lower Sandy River'
    },
    {
      value: 106,
      label: 'Bombazee Rips-Kennebec River'
    },
    {
      value: 245,
      label: 'Togus Stream-Kennebec River'
    },
    {
      value: 9,
      label: 'Enchanted Stream-Dead River'
    },
    {
      value: 51,
      label: 'Belfast Bay'
    },
    {
      value: 2,
      label: 'Middle Machias River'
    },
    {
      value: 18,
      label: 'East Machias River-Round Lake'
    },
    {
      value: 1,
      label: 'Mary L Pond-St. John River'
    },
    {
      value: 12,
      label: 'Old Stream'
    },
    {
      value: 35,
      label: 'Passadumkeag River'
    },
    {
      value: 5,
      label: 'Peabody River-Androscoggin River'
    },
    {
      value: 2,
      label: 'Big Brook'
    },
    {
      value: 2,
      label: 'Jo-Mary Lake'
    },
    {
      value: 1,
      label: 'Long Lake'
    },
    {
      value: 139,
      label: 'Casco Bay'
    },
    {
      value: 63,
      label: 'Big Presque Isle Stream'
    },
    {
      value: 14,
      label: 'Machias Bay'
    },
    {
      value: 14,
      label: 'South Branch Moose River'
    },
    {
      value: 2,
      label: 'Magalloway River'
    },
    {
      value: 11,
      label: 'Brassua Lake-Moose River'
    },
    {
      value: 3,
      label: 'Nesowadnehunk Stream'
    },
    {
      value: 15,
      label: 'Gagnon Brook-St. John River'
    },
    {
      value: 1,
      label: 'Southwest Branch St. John River'
    },
    {
      value: 187,
      label: 'Blue Hill-Mount Desert Frontal Drainages'
    },
    {
      value: 170,
      label: 'Webb River-Androscoggin River'
    },
    {
      value: 133,
      label: 'Pleasant River-Pleasant Bay'
    },
    {
      value: 115,
      label: 'Great Moose Lake'
    },
    {
      value: 103,
      label: 'B Stream-Meduxnekeag River'
    },
    {
      value: 5,
      label: 'Tomah Stream'
    },
    {
      value: 236,
      label: 'Mousam River'
    },
    {
      value: 1,
      label: 'Upper West Branch Penobscot River'
    },
    {
      value: 28,
      label: 'Great Works Stream-Penobscot River'
    },
    {
      value: 20,
      label: 'Salmon Stream-Penobscot River'
    },
    {
      value: 46,
      label: 'Dennys River'
    },
    {
      value: 30,
      label: 'Long Pond-Moose River'
    },
    {
      value: 206,
      label: 'St. George River'
    },
    {
      value: 125,
      label: 'Cobscook Bay-Frontal Passamaquoddy Bay'
    },
    {
      value: 35,
      label: 'Upper Carrabassett River'
    },
    {
      value: 6,
      label: 'Chesuncook Lake'
    },
    {
      value: 195,
      label: 'Cathance River-Androscoggin River'
    },
    {
      value: 10,
      label: 'Austin Stream'
    },
    {
      value: 213,
      label: 'Little Madawaska River-Aroostook River'
    },
    {
      value: 1,
      label: 'Machias River'
    },
    {
      value: 1,
      label: 'Fish River Lake'
    },
    {
      value: 17,
      label: 'Middle West Branch Penobscot River'
    },
    {
      value: 82,
      label: 'Lake Auburn-Androscoggin River'
    },
    {
      value: 38,
      label: 'Molunkus Stream'
    },
    {
      value: 83,
      label: 'Moose Pond-Saco River'
    },
    {
      value: 169,
      label: 'Nezinscot River'
    },
    {
      value: 75,
      label: 'Twentyfive Mile Stream'
    },
    {
      value: 43,
      label: 'Lower Piscataquis River'
    },
    {
      value: 1,
      label: 'Millimagasset Stream'
    },
    {
      value: 18,
      label: 'Bocabec River-Frontal Passamaquoddy Bay'
    },
    {
      value: 71,
      label: 'Fore River'
    },
    {
      value: 61,
      label: 'Pennamaquan River'
    },
    {
      value: 13,
      label: 'Middle East Branch Penobscot River'
    },
    {
      value: 44,
      label: 'Middle Carrabassett River'
    },
    {
      value: 191,
      label: 'Little Androscoggin River'
    },
    {
      value: 1,
      label: 'Northwest Branch St. John River'
    },
    {
      value: 89,
      label: 'Stillwater River'
    },
    {
      value: 89,
      label: 'Upper Sebasticook River'
    },
    {
      value: 1,
      label: 'Churchill Lake'
    },
    {
      value: 21,
      label: 'Chute River-St. John River'
    },
    {
      value: 21,
      label: 'Seeboomook Lake'
    },
    {
      value: 130,
      label: 'Saco Bay'
    },
    {
      value: 78,
      label: 'Pleasant River'
    },
    {
      value: 81,
      label: 'Wilson Stream'
    },
    {
      value: 160,
      label: 'Johns Bay-Boothbay Harbor'
    },
    {
      value: 133,
      label: 'Presque Isle Stream-Aroostook River'
    },
    {
      value: 73,
      label: 'Eagle Lake'
    },
    {
      value: 1,
      label: 'Mooseleuk Stream'
    },
    {
      value: 6,
      label: 'Spencer Stream'
    },
    {
      value: 16,
      label: 'South Branch Dead River'
    },
    {
      value: 129,
      label: 'Sebasticook Lake'
    },
    {
      value: 41,
      label: 'East Machias River'
    },
    {
      value: 91,
      label: 'Middle Sandy River'
    },
    {
      value: 12,
      label: 'Umbagog Lake'
    },
    {
      value: 98,
      label: 'Middle Piscataquis River'
    },
    {
      value: 62,
      label: 'Upper Sandy River'
    },
    {
      value: 1,
      label: 'Fox Brook-St. John River'
    },
    {
      value: 123,
      label: 'Cobbosseecontee Stream'
    },
    {
      value: 81,
      label: 'Upper Piscataquis River'
    },
    {
      value: 13,
      label: 'Nahamakanta Stream'
    },
    {
      value: 17,
      label: 'Lower Carrabassett River'
    },
    {
      value: 12,
      label: 'St. Froid Lake'
    },
    {
      value: 125,
      label: 'Great Works River'
    },
    {
      value: 9,
      label: 'Bran Lake-St. John River'
    },
    {
      value: 43,
      label: 'Kennebunk River'
    },
    {
      value: 8,
      label: 'Upper Chiputneticook Lakes'
    },
    {
      value: 53,
      label: 'Lower East Branch Penobscot River'
    },
    {
      value: 135,
      label: 'Swift River-Androscoggin River'
    },
    {
      value: 64,
      label: 'Kennebec River Estuary'
    },
    {
      value: 69,
      label: 'Wesserunsett Stream'
    },
    {
      value: 2,
      label: 'Allagash River'
    },
    {
      value: 35,
      label: 'Wyman Lake'
    },
    {
      value: 56,
      label: 'Souadabscook Stream'
    },
    {
      value: 85,
      label: 'Roque Bluffs Frontal Drainages'
    },
    {
      value: 174,
      label: 'Frenchman Bay'
    },
    {
      value: 239,
      label: 'Outlet Saco River'
    },
    {
      value: 65,
      label: 'Lower Richardson Lake'
    },
    {
      value: 24,
      label: 'Baskahegan Stream'
    },
    {
      value: 141,
      label: 'Sheepscot River'
    },
    {
      value: 12,
      label: 'Baker Branch St. John River'
    },
    {
      value: 23,
      label: 'Stonington Frontal Drainages'
    },
    {
      value: 67,
      label: 'Middle Sebasticook River'
    },
    {
      value: 34,
      label: 'Flagstaff Lake'
    },
    {
      value: 292,
      label: 'Presumpscot River'
    },
    {
      value: 121,
      label: 'Penobscot River-Penobscot Bay'
    },
    {
      value: 85,
      label: 'Ossipee River'
    },
    {
      value: 10,
      label: 'Big Musquash Stream'
    },
    {
      value: 163,
      label: 'Kezar Lake-Saco River'
    }
  ]
  const huc10_options_all = [
    {
      value: 209,
      label: 'Sunday River-Androscoggin River'
    },
    {
      value: 26,
      label: 'North Branch Dead River'
    },
    {
      value: 16,
      label: 'Upper Mattawamkeag River'
    },
    {
      value: 85,
      label: 'Schoodic Point-Petit-Manan Point Frontal Drainages'
    },
    {
      value: 6,
      label: 'Umcolcus Stream-Aroostook River'
    },
    {
      value: 228,
      label: 'Penobscot Bay'
    },
    {
      value: 3,
      label: 'North Branch Penobscot River'
    },
    {
      value: 106,
      label: 'Lower Sebasticook River'
    },
    {
      value: 4,
      label: 'Aziscohos Lake'
    },
    {
      value: 13,
      label: 'St. Croix Stream'
    },
    {
      value: 67,
      label: 'Mattamiscontis Stream-Piscataquis River'
    },
    {
      value: 166,
      label: 'Little Ossipee River'
    },
    {
      value: 63,
      label: 'West Branch Mattawamkeag River'
    },
    {
      value: 17,
      label: 'Vasseur Stream-St. John River'
    },
    {
      value: 10,
      label: 'Big Lake-Grand Falls Flowage'
    },
    {
      value: 13,
      label: 'South Branch Meduxnekeag River'
    },
    {
      value: 39,
      label: 'Squa Pan Lake-Aroostook River'
    },
    {
      value: 44,
      label: 'Bagaduce River'
    },
    {
      value: 29,
      label: 'West Branch Carrabassett River'
    },
    {
      value: 16,
      label: 'Seboeis River'
    },
    {
      value: 289,
      label: 'Androscoggin Lake-Androscoggin River'
    },
    {
      value: 19,
      label: 'Gilman Stream'
    },
    {
      value: 56,
      label: 'Moosehead Lake'
    },
    {
      value: 21,
      label: 'Grand Manan Channel'
    },
    {
      value: 241,
      label: 'Frontal Drainages of Southern York County'
    },
    {
      value: 102,
      label: 'Narraguagus River-Narraguagus Bay'
    },
    {
      value: 66,
      label: 'Frontal York County Drainages'
    },
    {
      value: 46,
      label: 'Grand Falls-St. John River'
    },
    {
      value: 149,
      label: 'Royal River'
    },
    {
      value: 277,
      label: 'Belgrade Lakes-Messalonskee Stream'
    },
    {
      value: 1,
      label: 'Lower Chiputneticook Lakes'
    },
    {
      value: 106,
      label: 'Union River Bay'
    },
    {
      value: 100,
      label: 'Sebec River'
    },
    {
      value: 35,
      label: 'Fish River'
    },
    {
      value: 38,
      label: 'Ellis River'
    },
    {
      value: 109,
      label: 'Muscongus Bay'
    },
    {
      value: 48,
      label: 'Lower Machias River'
    },
    {
      value: 113,
      label: 'Kenduskeag Stream'
    },
    {
      value: 285,
      label: 'Sebago Lake'
    },
    {
      value: 12,
      label: 'Holeb Pond-Moose River'
    },
    {
      value: 17,
      label: 'Upper East Branch Penobscot River-Grand Lake Matagamon'
    },
    {
      value: 19,
      label: 'Grand Lake Stream'
    },
    {
      value: 46,
      label: 'Sunkhaze Stream-Penobscot River'
    },
    {
      value: 142,
      label: 'Graham Lake'
    },
    {
      value: 36,
      label: 'Sheepscot Bay'
    },
    {
      value: 36,
      label: 'Lower Mattawamkeag River'
    },
    {
      value: 35,
      label: 'East Branch Mattawamkeag River'
    },
    {
      value: 29,
      label: 'Lower West Branch Penobscot River'
    },
    {
      value: 1,
      label: 'Little Black River'
    },
    {
      value: 2,
      label: 'Caucomgomok Lake'
    },
    {
      value: 205,
      label: 'Salmon Falls River'
    },
    {
      value: 13,
      label: 'Seboeis Stream'
    },
    {
      value: 14,
      label: 'Moxie Stream-Kennebec River'
    },
    {
      value: 11,
      label: 'Chamberlain Lake-Webster Brook'
    },
    {
      value: 2,
      label: 'Musquacook Stream'
    },
    {
      value: 56,
      label: 'Hampton River-Frontal Atlantic Ocean'
    },
    {
      value: 5,
      label: 'Upper St. Croix River'
    },
    {
      value: 79,
      label: 'Marsh River'
    },
    {
      value: 83,
      label: 'Lower St. Croix River'
    },
    {
      value: 10,
      label: 'North Branch Meduxnekeag River'
    },
    {
      value: 73,
      label: 'Fall Brook-Kennebec River'
    },
    {
      value: 126,
      label: 'Carrabassett Stream-Kennebec River'
    },
    {
      value: 31,
      label: 'Middle Mattawamkeag River'
    },
    {
      value: 102,
      label: 'Lower Sandy River'
    },
    {
      value: 106,
      label: 'Bombazee Rips-Kennebec River'
    },
    {
      value: 245,
      label: 'Togus Stream-Kennebec River'
    },
    {
      value: 9,
      label: 'Enchanted Stream-Dead River'
    },
    {
      value: 51,
      label: 'Belfast Bay'
    },
    {
      value: 2,
      label: 'Middle Machias River'
    },
    {
      value: 18,
      label: 'East Machias River-Round Lake'
    },
    {
      value: 1,
      label: 'Mary L Pond-St. John River'
    },
    {
      value: 12,
      label: 'Old Stream'
    },
    {
      value: 35,
      label: 'Passadumkeag River'
    },
    {
      value: 5,
      label: 'Peabody River-Androscoggin River'
    },
    {
      value: 2,
      label: 'Big Brook'
    },
    {
      value: 2,
      label: 'Jo-Mary Lake'
    },
    {
      value: 1,
      label: 'Long Lake'
    },
    {
      value: 139,
      label: 'Casco Bay'
    },
    {
      value: 63,
      label: 'Big Presque Isle Stream'
    },
    {
      value: 14,
      label: 'Machias Bay'
    },
    {
      value: 14,
      label: 'South Branch Moose River'
    },
    {
      value: 2,
      label: 'Magalloway River'
    },
    {
      value: 11,
      label: 'Brassua Lake-Moose River'
    },
    {
      value: 3,
      label: 'Nesowadnehunk Stream'
    },
    {
      value: 15,
      label: 'Gagnon Brook-St. John River'
    },
    {
      value: 1,
      label: 'Southwest Branch St. John River'
    },
    {
      value: 187,
      label: 'Blue Hill-Mount Desert Frontal Drainages'
    },
    {
      value: 170,
      label: 'Webb River-Androscoggin River'
    },
    {
      value: 133,
      label: 'Pleasant River-Pleasant Bay'
    },
    {
      value: 115,
      label: 'Great Moose Lake'
    },
    {
      value: 103,
      label: 'B Stream-Meduxnekeag River'
    },
    {
      value: 5,
      label: 'Tomah Stream'
    },
    {
      value: 236,
      label: 'Mousam River'
    },
    {
      value: 1,
      label: 'Upper West Branch Penobscot River'
    },
    {
      value: 28,
      label: 'Great Works Stream-Penobscot River'
    },
    {
      value: 20,
      label: 'Salmon Stream-Penobscot River'
    },
    {
      value: 46,
      label: 'Dennys River'
    },
    {
      value: 30,
      label: 'Long Pond-Moose River'
    },
    {
      value: 206,
      label: 'St. George River'
    },
    {
      value: 125,
      label: 'Cobscook Bay-Frontal Passamaquoddy Bay'
    },
    {
      value: 35,
      label: 'Upper Carrabassett River'
    },
    {
      value: 6,
      label: 'Chesuncook Lake'
    },
    {
      value: 195,
      label: 'Cathance River-Androscoggin River'
    },
    {
      value: 10,
      label: 'Austin Stream'
    },
    {
      value: 213,
      label: 'Little Madawaska River-Aroostook River'
    },
    {
      value: 1,
      label: 'Machias River'
    },
    {
      value: 1,
      label: 'Fish River Lake'
    },
    {
      value: 17,
      label: 'Middle West Branch Penobscot River'
    },
    {
      value: 82,
      label: 'Lake Auburn-Androscoggin River'
    },
    {
      value: 38,
      label: 'Molunkus Stream'
    },
    {
      value: 83,
      label: 'Moose Pond-Saco River'
    },
    {
      value: 169,
      label: 'Nezinscot River'
    },
    {
      value: 75,
      label: 'Twentyfive Mile Stream'
    },
    {
      value: 43,
      label: 'Lower Piscataquis River'
    },
    {
      value: 1,
      label: 'Millimagasset Stream'
    },
    {
      value: 18,
      label: 'Bocabec River-Frontal Passamaquoddy Bay'
    },
    {
      value: 71,
      label: 'Fore River'
    },
    {
      value: 61,
      label: 'Pennamaquan River'
    },
    {
      value: 13,
      label: 'Middle East Branch Penobscot River'
    },
    {
      value: 44,
      label: 'Middle Carrabassett River'
    },
    {
      value: 191,
      label: 'Little Androscoggin River'
    },
    {
      value: 1,
      label: 'Northwest Branch St. John River'
    },
    {
      value: 89,
      label: 'Stillwater River'
    },
    {
      value: 89,
      label: 'Upper Sebasticook River'
    },
    {
      value: 1,
      label: 'Churchill Lake'
    },
    {
      value: 21,
      label: 'Chute River-St. John River'
    },
    {
      value: 21,
      label: 'Seeboomook Lake'
    },
    {
      value: 130,
      label: 'Saco Bay'
    },
    {
      value: 78,
      label: 'Pleasant River'
    },
    {
      value: 81,
      label: 'Wilson Stream'
    },
    {
      value: 160,
      label: 'Johns Bay-Boothbay Harbor'
    },
    {
      value: 133,
      label: 'Presque Isle Stream-Aroostook River'
    },
    {
      value: 73,
      label: 'Eagle Lake'
    },
    {
      value: 1,
      label: 'Mooseleuk Stream'
    },
    {
      value: 6,
      label: 'Spencer Stream'
    },
    {
      value: 16,
      label: 'South Branch Dead River'
    },
    {
      value: 129,
      label: 'Sebasticook Lake'
    },
    {
      value: 41,
      label: 'East Machias River'
    },
    {
      value: 91,
      label: 'Middle Sandy River'
    },
    {
      value: 12,
      label: 'Umbagog Lake'
    },
    {
      value: 98,
      label: 'Middle Piscataquis River'
    },
    {
      value: 62,
      label: 'Upper Sandy River'
    },
    {
      value: 1,
      label: 'Fox Brook-St. John River'
    },
    {
      value: 123,
      label: 'Cobbosseecontee Stream'
    },
    {
      value: 81,
      label: 'Upper Piscataquis River'
    },
    {
      value: 13,
      label: 'Nahamakanta Stream'
    },
    {
      value: 17,
      label: 'Lower Carrabassett River'
    },
    {
      value: 12,
      label: 'St. Froid Lake'
    },
    {
      value: 125,
      label: 'Great Works River'
    },
    {
      value: 9,
      label: 'Bran Lake-St. John River'
    },
    {
      value: 43,
      label: 'Kennebunk River'
    },
    {
      value: 8,
      label: 'Upper Chiputneticook Lakes'
    },
    {
      value: 53,
      label: 'Lower East Branch Penobscot River'
    },
    {
      value: 135,
      label: 'Swift River-Androscoggin River'
    },
    {
      value: 64,
      label: 'Kennebec River Estuary'
    },
    {
      value: 69,
      label: 'Wesserunsett Stream'
    },
    {
      value: 2,
      label: 'Allagash River'
    },
    {
      value: 35,
      label: 'Wyman Lake'
    },
    {
      value: 56,
      label: 'Souadabscook Stream'
    },
    {
      value: 85,
      label: 'Roque Bluffs Frontal Drainages'
    },
    {
      value: 174,
      label: 'Frenchman Bay'
    },
    {
      value: 239,
      label: 'Outlet Saco River'
    },
    {
      value: 65,
      label: 'Lower Richardson Lake'
    },
    {
      value: 24,
      label: 'Baskahegan Stream'
    },
    {
      value: 141,
      label: 'Sheepscot River'
    },
    {
      value: 12,
      label: 'Baker Branch St. John River'
    },
    {
      value: 23,
      label: 'Stonington Frontal Drainages'
    },
    {
      value: 67,
      label: 'Middle Sebasticook River'
    },
    {
      value: 34,
      label: 'Flagstaff Lake'
    },
    {
      value: 292,
      label: 'Presumpscot River'
    },
    {
      value: 121,
      label: 'Penobscot River-Penobscot Bay'
    },
    {
      value: 85,
      label: 'Ossipee River'
    },
    {
      value: 10,
      label: 'Big Musquash Stream'
    },
    {
      value: 163,
      label: 'Kezar Lake-Saco River'
    }
  ]

  const tab = ref('statewide')
  const select = ref('')
  const searchTerm = ref('')

  const loadValues = computed(() => {
    let label = ''
    let value = []
    select.value = ''

    if (tab.value == 'huc8') {
      label = 'Enter a HUC 8 or select from the map'
      value = huc8_options
    }
    if (tab.value == 'huc10') {
      label = 'Enter a HUC 10 or select from the map'
      value = huc10_options
    }

    return { label: label, value: value }
  })
  return { tab, select, loadValues, searchTerm, huc8_options, huc10_options, huc10_options_all, huc8_options_all }
})
