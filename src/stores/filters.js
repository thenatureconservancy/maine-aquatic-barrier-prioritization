import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//query value is the false value
export const useFiltersStore = defineStore('filters', () => {
  const json = ref([
    {
      filterCategory: 'About the Crossing',
      aliasName: 'Barrier Class',
      variableType: 'Categorical',
      filterType: 'Select multiple',
      options: ['Barrier', 'Potential Barrier', 'Unknown'],
      attributeField: 'Barrier_Class',
      model: [],
      inUse: false
    },
    {
      filterCategory: 'About the Crossing',
      aliasName: 'Road Class',
      variableType: 'Categorical',
      filterType: 'Select multiple',
      options: [
        'Public',
        'Town',
        'State',
        'Railroad',
        'Federal',
        'County',
        'Private',
        'State Reserve'
      ],
      attributeField: 'Road_Class',
      model: [],
      inUse: false
    },
    {
      filterCategory: 'About the Crossing',
      aliasName: 'Type',
      variableType: 'Categorical',
      filterType: 'Select multiple',
      options: ['Crossing', 'Dam'],
      attributeField: 'Type',
      model: [],
      inUse: false
    },
    {
      filterCategory: 'About the Crossing',
      aliasName: 'Town',
      variableType: 'Categorical',
      filterType: 'Select one dropdown',
      options: [
        'Abbot',
        'Acton',
        'Adamstown Twp',
        'Addison',
        'Albany Twp',
        'Albion',
        'Alder Stream Twp',
        'Alexander',
        'Alfred',
        'Allagash',
        'Alna',
        'Alton',
        'Amherst',
        'Amity',
        'Andover West Surplus Twp',
        'Andover',
        'Anson',
        'Appleton',
        'Arrowsic',
        'Arundel',
        'Ashland',
        'Athens',
        'Atkinson Twp',
        'Auburn',
        'Augusta',
        'Aurora',
        'Avon',
        'Baileyville',
        'Bald Mountain Twp T2 R3',
        'Baldwin',
        'Bancroft Twp',
        'Bangor',
        'Bar Harbor',
        'Baring Plt',
        'Barnard Twp',
        'Batchelders Grant Twp',
        'Bath',
        'Beattie Twp',
        'Beaver Cove',
        'Beddington',
        'Belfast',
        'Belgrade',
        'Belmont',
        'Benedicta Twp',
        'Benton',
        'Berry Twp',
        'Berwick',
        'Bethel',
        'Biddeford',
        'Big Lake Twp',
        'Big Moose Twp',
        'Bigelow Twp',
        'Bingham',
        'Blaine',
        'Blanchard Twp',
        'Blue Hill',
        'Boothbay Harbor',
        'Boothbay',
        'Bowdoin College Grant East Twp',
        'Bowdoin College Grant West Twp',
        'Bowdoin',
        'Bowdoinham',
        'Bowerbank',
        'Bowtown Twp',
        'Bradford',
        'Bradley',
        'Bremen',
        'Brewer',
        'Bridgewater',
        'Bridgton',
        'Brighton Plt',
        'Bristol',
        'Brooklin',
        'Brooks',
        'Brooksville',
        'Brookton Twp',
        'Brownfield',
        'Brownville',
        'Brunswick',
        'Buckfield',
        'Bucksport',
        'Burlington',
        'Burnham',
        'Buxton',
        'Byron',
        'Calais',
        'Cambridge',
        'Camden',
        'Canaan',
        'Canton',
        'Cape Elizabeth',
        'Caratunk',
        'Caribou',
        'Carmel',
        'Carrabassett Valley',
        'Carroll Plt',
        'Carrying Place Town Twp',
        'Carrying Place Twp',
        'Carthage',
        'Cary Twp',
        'Casco',
        'Castine',
        'Castle Hill',
        'Caswell',
        'Cathance Twp',
        'Cedar Lake Twp',
        'Centerville Twp',
        'Chain of Ponds Twp',
        'Chapman',
        'Charleston',
        'Charlotte',
        'Chelsea',
        'Cherryfield',
        'Chester',
        'Chesterville',
        'China',
        'Clifton',
        'Clinton',
        'Coburn Gore',
        'Codyville Twp',
        'Columbia Falls',
        'Columbia',
        'Concord Twp',
        'Connor Twp',
        'Cooper',
        'Coplin Plt',
        'Corinna',
        'Corinth',
        'Cornish',
        'Cornville',
        'Crawford',
        'Cross Lake Twp',
        'Crystal',
        'Cumberland',
        'Cushing',
        'Cutler',
        'Cyr Plt',
        'Dallas Plt',
        'Damariscotta',
        'Danforth',
        'Day Block Twp',
        'Days Academy Grant Twp',
        'Dayton',
        'Dead River Twp',
        'Deblois',
        'Dedham',
        'Deer Isle',
        'Denmark',
        'Dennistown Plt',
        'Dennysville',
        'Detroit',
        'Devereaux Twp',
        'Dexter',
        'Dixfield',
        'Dixmont',
        'Dole Brook Twp',
        'Dover-Foxcroft',
        'Dresden',
        'Drew Plt',
        'Dudley Twp',
        'Durham',
        'Dyer Brook',
        'Dyer Twp',
        'E Twp',
        'Eagle Lake',
        'East Machias',
        'East Millinocket',
        'East Moxie Twp',
        'Eastbrook',
        'Easton',
        'Eastport',
        'Ebeemee Twp',
        'Eddington',
        'Edgecomb',
        'Edmunds Twp',
        'Eliot',
        'Elliottsville Twp',
        'Ellsworth',
        'Embden',
        'Enfield',
        'Etna',
        'Eustis',
        'Exeter',
        'Fairfield',
        'Falmouth',
        'Farmingdale',
        'Farmington',
        'Fayette',
        'Fletchers Landing Twp',
        'Forest Twp',
        'Forkstown Twp',
        'Fort Fairfield',
        'Fort Kent',
        'Frankfort',
        'Franklin',
        'Freedom',
        'Freeman Twp',
        'Freeport',
        'Frenchtown Twp',
        'Frenchville',
        'Friendship',
        'Fryeburg',
        'Gardiner',
        'Garfield Plt',
        'Garland',
        'Georgetown',
        'Gilead',
        'Glenburn',
        'Glenwood Plt',
        'Gorham',
        'Gouldsboro',
        'Grafton Twp',
        'Grand Isle',
        'Grand Lake Stream Plt',
        'Gray',
        'Great Pond',
        'Greenbush',
        'Greene',
        'Greenfield Twp',
        'Greenlaw Chopping Twp',
        'Greenville',
        'Greenwood',
        'Grindstone Twp',
        'Guilford',
        'Hallowell',
        'Hamlin',
        'Hammond Twp',
        'Hammond',
        'Hampden',
        'Hancock',
        'Hanover',
        'Harmony',
        'Harpswell',
        'Harrington',
        'Harrison',
        'Hartford',
        'Hartland',
        'Haynesville',
        'Hebron',
        'Hermon',
        'Hersey',
        'Herseytown Twp',
        'Highland Plt',
        'Hiram',
        'Hodgdon',
        'Holden',
        'Holeb Twp',
        'Hollis',
        'Hope',
        'Houlton',
        'Howland',
        'Hudson',
        'Indian Stream Twp',
        'Indian Twp Res',
        'Industry',
        'Island Falls',
        'Jackman',
        'Jackson',
        'Jay',
        'Jefferson',
        'Jim Pond Twp',
        'Johnson Mountain Twp',
        'Jonesboro',
        'Jonesport',
        'Katahdin Iron Works Twp',
        'Kenduskeag',
        'Kennebunk',
        'Kennebunkport',
        'King & Bartlett Twp',
        'Kingfield',
        'Kingman Twp',
        'Kingsbury Plt',
        'Kittery',
        'Knox',
        'Kossuth Twp',
        'Lagrange',
        'Lake View Plt',
        'Lakeville',
        'Lambert Lake Twp',
        'Lamoine',
        'Lang Twp',
        'Lebanon',
        'Lee',
        'Leeds',
        'Levant',
        'Lewiston',
        'Lexington Twp',
        'Liberty',
        'Lily Bay Twp',
        'Limerick',
        'Limestone',
        'Limington',
        'Lincoln Plt',
        'Lincoln',
        'Lincolnville',
        'Linneus',
        'Lisbon',
        'Litchfield',
        'Littleton',
        'Livermore Falls',
        'Livermore',
        'Long Pond Twp',
        'Lovell',
        'Lowell',
        'Lowelltown Twp',
        'Lubec',
        'Ludlow',
        'Lyman',
        'Machias',
        'Machiasport',
        'Macwahoc Plt',
        'Madawaska Lake Twp',
        'Madawaska',
        'Madison',
        'Madrid Twp',
        'Magalloway Plt',
        'Manchester',
        'Mapleton',
        'Mariaville',
        'Marion Twp',
        'Mars Hill',
        'Marshfield',
        'Masardis',
        'Mason Twp',
        'Massachusetts Gore',
        'Mattamiscontis Twp',
        'Mattawamkeag',
        'Maxfield',
        'Mayfield Twp',
        'Mechanic Falls',
        'Meddybemps',
        'Medford',
        'Medway',
        'Mercer',
        'Merrill Strip Twp',
        'Merrill',
        'Mexico',
        'Milbridge',
        'Milford',
        'Millinocket',
        'Milo',
        'Milton Twp',
        'Minot',
        'Molunkus Twp',
        'Monmouth',
        'Monroe',
        'Monson',
        'Monticello',
        'Montville',
        'Moose River',
        'Moosehead Junction Twp',
        'Moro Plt',
        'Morrill',
        'Moscow',
        'Mount Abram Twp',
        'Mount Chase',
        'Mount Desert',
        'Mount Katahdin Twp',
        'Mount Vernon',
        'Moxie Gore',
        'Naples',
        'Nashville Plt',
        'Nesourdnahunk Twp',
        'New Canada',
        'New Gloucester',
        'New Limerick',
        'New Portland',
        'New Sharon',
        'New Sweden',
        'New Vineyard',
        'Newburgh',
        'Newcastle',
        'Newfield',
        'Newport',
        'Newry',
        'Nobleboro',
        'Norridgewock',
        'North Berwick',
        'North Haven',
        'North Yarmouth',
        'Northfield',
        'Northport',
        'Norway',
        'Oakfield',
        'Oakland',
        'Ogunquit',
        'Old Orchard Beach',
        'Old Town',
        'Oqiton Twp',
        'Orient',
        'Orland',
        'Orneville Twp',
        'Orono',
        'Orrington',
        'Otis',
        'Otisfield',
        'Owls Head',
        'Oxbow North Twp',
        'Oxford',
        'Palermo',
        'Palmyra',
        'Paris',
        'Parkman',
        'Parlin Pond Twp',
        'Parsonsfield',
        'Passadumkeag',
        'Patten',
        'Pembroke',
        'Penobscot',
        'Perham',
        'Perkins Twp Swan Island',
        'Perkins Twp',
        'Perry',
        'Peru',
        'Phillips',
        'Phippsburg',
        'Pierce Pond Twp',
        'Pittsfield',
        'Pittston Academy Grant',
        'Pittston',
        'Pleasant Ridge Plt',
        'Plymouth Twp',
        'Plymouth',
        'Poland',
        'Portage Lake',
        'Porter',
        'Portland',
        'Pownal',
        'Prentiss Twp T4 R4 NBKP',
        'Prentiss Twp T7 R3 NBPP',
        'Presque Isle',
        'Princeton',
        'Prospect',
        'Pukakon Twp',
        'Rainbow Twp',
        'Randolph',
        'Rangeley Plt',
        'Rangeley',
        'Raymond',
        'Readfield',
        'Redington Twp',
        'Reed Plt',
        'Richardsontown Twp',
        'Richmond',
        'Riley Twp',
        'Ripley',
        'Robbinston',
        'Rockland',
        'Rockport',
        'Rockwood Strip T1 R1 NBKP',
        'Rome',
        'Roque Bluffs',
        'Roxbury',
        'Rumford',
        'Sabattus',
        'Saco',
        'Saint Agatha',
        'Saint Albans',
        'Saint Francis',
        'Saint George',
        'Saint John Plt',
        'Sakom Twp',
        'Salem Twp',
        'Sandwich Academy Grant Twp',
        'Sandy Bay Twp',
        'Sandy River Plt',
        'Sanford',
        'Sangerville',
        'Sapling Twp',
        'Scarborough',
        'Scopan Twp',
        'Searsmont',
        'Searsport',
        'Sebago',
        'Sebec',
        'Seboeis Plt',
        'Seboomook Twp',
        'Sedgwick',
        'Seven Ponds Twp',
        'Shapleigh',
        'Shawtown Twp',
        'Sherman',
        'Shirley',
        'Sidney',
        'Silver Ridge Twp',
        'Sinclair Twp',
        'Skowhegan',
        'Smithfield',
        'Smyrna',
        'Soldiertown Twp T2 R7 WELS',
        'Solon',
        'Somerville',
        'Sorrento',
        'South Berwick',
        'South Bristol',
        'South Portland',
        'South Thomaston',
        'Southport',
        'Southwest Harbor',
        'Spencer Bay Twp',
        'Springfield',
        'Squaretown Twp',
        'Stacyville',
        'Standish',
        'Starks',
        'Stetson',
        'Stetsontown Twp',
        'Steuben',
        'Stockholm',
        'StocktonSprings',
        'Stoneham',
        'Stonington',
        'Stow',
        'Strong',
        'Sullivan',
        'Summit Twp',
        'Sumner',
        'Surry',
        'Swanville',
        'Sweden',
        'T1 R10 WELS',
        'T1 R12 WELS',
        'T1 R5 WELS',
        'T1 R6 WELS',
        'T1 R8 WELS',
        'T10 R12 WELS',
        'T10 R3 WELS',
        'T10 R9 WELS',
        'T10 SD BPP',
        'T11 R16 WELS',
        'T11 R17 WELS',
        'T11 R4 WELS',
        'T12 R7 WELS',
        'T13 R12 WELS',
        'T14 R6 WELS',
        'T14 R7 WELS',
        'T15 R9 WELS',
        'T16 MD BPP',
        'T16 R5 WELS',
        'T16 R6 WELS',
        'T17 R3 WELS',
        'T19 ED BPP',
        'T19 MD BPP',
        'T2 R10 WELS',
        'T2 R13 WELS',
        'T2 R8 NWP',
        'T2 R8 WELS',
        'T2 R9 NWP',
        'T2 R9 WELS',
        'T24 MD BPP',
        'T26 ED BPP',
        'T3 Indian Purchase Twp',
        'T3 ND BPP',
        'T3 R1 NBPP',
        'T3 R10 WELS',
        'T3 R11 WELS',
        'T3 R12 WELS',
        'T3 R4 BKP WKR',
        'T3 R5 BKP WKR',
        'T3 R7 WELS',
        'T3 R8 WELS',
        'T32 MD BPP',
        'T35 MD BPP',
        'T4 Indian Purchase Twp',
        'T4 R10 WELS',
        'T4 R11 WELS',
        'T4 R17 WELS',
        'T4 R3 WELS',
        'T4 R7 WELS',
        'T4 R8 WELS',
        'T4 R9 NWP',
        'T40 MD BPP',
        'T5 R7 BKP WKR',
        'T5 R7 WELS',
        'T5 R8 WELS',
        'T5 R9 WELS',
        'T6 ND BPP',
        'T6 R10 WELS',
        'T6 R11 WELS',
        'T6 R13 WELS',
        'T6 R14 WELS',
        'T6 R6 WELS',
        'T6 R7 WELS',
        'T6 R8 WELS',
        'T7 R12 WELS',
        'T7 R5 WELS',
        'T7 R6 WELS',
        'T7 R8 WELS',
        'T7 R9 NWP',
        'T7 R9 WELS',
        'T7 SD BPP',
        'T8 R15 WELS',
        'T8 R16 WELS',
        'T8 R17 WELS',
        'T9 R17 WELS',
        'T9 R3 WELS',
        'T9 R4 WELS',
        'T9 R5 WELS',
        'T9 SD BPP',
        'TA R10 WELS',
        'TA R2 WELS',
        'TA R7 WELS',
        'TB R11 WELS',
        'Talmadge',
        'Taunton & Raynham Academy Grant',
        'Temple',
        'The Forks Plt',
        'Thomaston',
        'Thorndike Twp',
        'Thorndike',
        'Tim Pond Twp',
        'Topsfield',
        'Topsham',
        'Township 6 North of Weld',
        'Township C',
        'Township D',
        'Township E',
        'Tremont',
        'Trenton',
        'Trescott Twp',
        'Trout Brook Twp',
        'Troy',
        'Turner',
        'Union',
        'Unity Twp',
        'Unity',
        'Upton',
        'Van Buren',
        'Vassalboro',
        'Verona Island',
        'Vienna',
        'Wade',
        'Waite',
        'Waldo',
        'Waldoboro',
        'Wales',
        'Wallagrass',
        'Waltham',
        'Warren',
        'Washburn',
        'Washington',
        'Waterboro',
        'Waterford',
        'Waterville',
        'Wayne',
        'Weld',
        'Wellington',
        'Wells',
        'Wesley',
        'West Bath',
        'West Forks Plt',
        'West Gardiner',
        'West Paris',
        'Westbrook',
        'Westfield',
        'Westmanland',
        'Weston',
        'Westport Island',
        'Whitefield',
        'Whiting',
        'Whitneyville',
        'Williamsburg Twp',
        'Willimantic',
        'Wilton',
        'Windham',
        'Windsor',
        'Winn',
        'Winslow',
        'Winter Harbor',
        'Winterport',
        'Winterville Plt',
        'Winthrop',
        'Wiscasset',
        'Woodland',
        'Woodstock',
        'Woodville',
        'Woolwich',
        'Wyman Twp',
        'Yarmouth',
        'York',
        'T1 R11 WELS'
      ],
      attributeField: 'Town',
      model: '',
      inUse: false
    },
    {
      filterCategory: 'About the Crossing',
      aliasName: 'Flood Risk',
      variableType: 'Categorical',
      filterType: 'Select multiple',
      options: ['High', 'Medium', 'Low', 'Not Available'],
      attributeField: 'FloodRisk',
      model: [],
      inUse: false
    },
    {
      filterCategory: 'About the Crossing',
      aliasName: 'Tribal Land',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'OnTribalLand',
      model: '',
      inUse: false
    },
    {
      filterCategory: 'Network',
      aliasName: 'Upstream Functional Network Length (m)',
      variableType: 'Continuous Range',
      filterType: 'Range slider  (two-ended)',
      attributeField: 'batFuncUS',
      model: { min: 0, max: 3006600 },
      range: { min: 0, max: 3006600, step: 1000 },
      modRange: { min: 0, max: 3006600, step: 1000 },
      histogram: [11654, 14, 7, 4, 2, 0, 1, 0, 0, 1],
      inUse: false
    },
    {
      filterCategory: 'Network',
      aliasName: 'Total Func Net (Upstream + Downstream m)',
      variableType: 'Continuous Range',
      filterType: 'Range slider  (two-ended)',
      attributeField: 'batTotUSDS',
      model: { min: 5, max: 5839166 },
      range: { min: 5, max: 5839166, step: 1000 },
      modRange: { min: 5, max: 50000, step: 10 },
      histogram: [10393, 783, 117, 92, 35, 173, 0, 0, 0, 90],
      inUse: false
    },
    {
      filterCategory: 'Network',
      aliasName: 'Upstream Network Length',
      variableType: 'Continuous Range',
      filterType: 'Range slider  (two-ended)',
      attributeField: 'batLenUS',
      model: { min: 0, max: 17027228 },
      range: { min: 0, max: 17027228, step: 1000 },
      modRange: { min: 0, max: 17027228, step: 1000 },
      histogram: [11627, 15, 7, 16, 8, 5, 4, 0, 0, 1],
      inUse: false
    },
    {
      filterCategory: 'Landscape',
      aliasName: 'Barrier on a tidal stream (HAT +1m)',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'Tidal',
      model: '',
      inUse: false  
    },
    {
      filterCategory: 'Landscape',
      aliasName: 'Barrier on a coastal stream',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'CoastalStreams',
      model: '',
      inUse: false
    },
    {
      filterCategory: 'Landscape',
      aliasName: 'Barrier on conservedland',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'onConsLand',
      model: '',
      inUse: false
    },
    {
      filterCategory: 'Landscape',
      aliasName: 'Aquifer/coarse sediments',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'AquiferOrCoarseSed',
      model: '',
      inUse: false
    },
    {
      filterCategory: 'Landscape',
      aliasName: 'Calc/mod calcareous',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'CalcModCalc',
      model: '',
      inUse: false
    },
    {
      filterCategory: 'Landscape',
      aliasName: '% Forest in Upstream Drainage',
      variableType: 'Continuous Range',
      filterType: 'Range slider  (two-ended)',
      attributeField: 'DA_PercFor',
      model: { min: 0, max: 100 },
      range: { min: 0, max: 100, step: 10 },
      modRange: { min: 0, max: 100, step: 10 },
      histogram: [165, 107, 138, 210, 304, 511, 916, 1961, 3409, 3962],
      inUse: false
    },
    {
      filterCategory: 'Fish Habitat - Alewife',
      aliasName: 'Upstream acres of alewife ponds',
      variableType: 'Continuous Range',
      filterType: 'Range slider  (two-ended)',
      attributeField: 'usAlewifeAcres',
      model: { min: 0, max: 69419 },
      range: { min: 0, max: 69419, step: 100 },
      modRange: { min: 0, max: 60419, step: 100 },
      histogram: [11633, 35, 2, 0, 1, 9, 0, 0, 2, 1],
      inUse: false
    },
    {
      filterCategory: 'Fish Habitat - Inland Brook Trout (BKT)',
      aliasName: 'Prob of BKT occupancy (+2C)',
      variableType: 'Continuous Range',
      filterType: 'Range slider  (two-ended)',
      attributeField: 'occ_air_2',
      model: { min: 0, max: 1 },
      range: { min: 0, max: 1, step: 0.01 },
      modRange: { min: 0, max: 1, step: 0.01 },
      histogram: [38, 67, 57, 75, 107, 191, 344, 486, 1460, 8242],
      inUse: false
    },
    {
      filterCategory: 'Fish Habitat - Inland Brook Trout (BKT)',
      aliasName: 'Heritage Fish Pond Barr',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'HeritagePondBarrier',
      model: '',
      inUse: false
    },
    {
      filterCategory: 'Fish Habitat - Inland Brook Trout (BKT)',
      aliasName: 'Upstream BKT Hab',
      variableType: 'Continuous Range',
      filterType: 'Range slider  (two-ended)',
      attributeField: 'MilesBT_HVH_USonly',
      model: { min: 0, max: 376 },
      range: { min: 0, max: 376, step: 10 },
      modRange: { min: 0, max: 376, step: 10 },
      histogram: [11648, 12, 7, 5, 1, 3, 2, 2, 2, 1],
      inUse: false
    },
    {
      filterCategory: 'Fish Habitat - Inland Brook Trout (BKT)',
      aliasName: 'Total BKT Hab Length',
      variableType: 'Continuous Range',
      filterType: 'Range slider  (two-ended)',
      attributeField: 'MilesBT_HVH',
      model: { min: 0, max: 376 },
      range: { min: 0, max: 376, step: 10 },
      modRange: { min: 0, max: 376, step: 10 },
      inUse: false,
      
    },
    {
      filterCategory: 'Fish Habitat - Inland Brook Trout (BKT)',
      aliasName: 'EBTJV Wild BKT Patch',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'EBTJV_Patch',
      model: '',
      inUse: false
    },

    {
      filterCategory: 'Fish Habitat - Atlantic Salmon',
      aliasName: 'Salmon Critical Habitat HUC10',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'HUC10_CritSalmHab',
      model: '',
      inUse: false
    },
    {
      filterCategory: 'Fish Habitat - Atlantic Salmon',
      aliasName: 'DMR Priority Stream',
      variableType: 'Categorical',
      filterType: 'Select multiple',
      options_bare: [4, 3, 2, 1, 0],
      options: [{label: '4 = Very High',val:4},{label:'3 = High', val: 3},{label:'2 = Medium', val:2},{label:'1 = Low', val:1},{label: '0 = No', val: 0}],
      useMask: true,
      attributeField: 'onDMRSalmonPriority',
      model: [],
      inUse: false
    },
    {
      filterCategory: 'Fish Habitat - Atlantic Salmon',
      aliasName: '# salmon habitat units in Upstream network',
      variableType: 'Continuous Range',
      filterType: 'Range slider  (two-ended)',
      attributeField: 'US_SalmHabUnits',
      model: { min: 0, max: 62682 },
      range: { min: 0, max: 62682, step: 100 },
      modRange: { min: 0, max: 62682, step: 100 },
      inUse: false
    },
    {
      filterCategory: 'Fish Habitat - Atlantic Salmon',
      aliasName: 'Salmon Habitat Units in HUC10',
      variableType: 'Continuous Range',
      filterType: 'Range slider  (two-ended)',
      attributeField: 'HUC10_Habitat_Units',
      model: { min: 0, max: 43138 },
      range: { min: 0, max: 43138, step: 100 },
      modRange: { min: 0, max: 43138, step: 100 },
      inUse: false
    },
    {
      filterCategory: 'Fish Habitat - Smelt',
      aliasName: 'Upstream smelt sites',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'usSmeltSite',
      model: '',
      inUse: false
    },
    {
      filterCategory: 'Invasive Species',
      aliasName: 'Barrier to invasive species',
      variableType: 'Binary',
      filterType: 'Select one (yes/no)',
      attributeField: 'InvasiveBarrier',
      model: '',
      inUse: false
    }
  ])

  const filterCategories = ref(nest(json._rawValue))
  const def = ref('')
  const currentControl = ref('')

  function nest(json) {
    console.log(json)
    const structuredData = {}

    // Iterate over each entry in the JSON object
    for (const entry of json) {
      const heading = entry.filterCategory
      const name = entry.aliasName
      const variableType = entry.variableType
      const filterType = entry.filterType
      const attributeField = entry.attributeField
      const model = entry.model
      const range = entry.range ? entry.range : ''
      const options = entry.options ? entry.options : ''
      const modRange = entry.modRange ? entry.modRange : ''
      const histogram = entry.histogram ? entry.histogram : []
      const useMask = entry.useMask? entry.useMask : false
      const active = entry.active

      // Create a nested structure
      if (!structuredData[heading]) {
        structuredData[heading] = []
      }

      structuredData[heading].push({
        name: name,
        variableType: variableType,
        filterType: filterType,
        attributeField: attributeField,
        model: model,
        definitionExpression: '',
        options: options,
        range: range,
        modRange: modRange,
        histogram: histogram,
        useMask: useMask,
        inUse: false
      })
    }

    // Convert the nested structure to an array of objects
    const result = []
    for (const heading in structuredData) {
      result.push({
        title: heading,
        inUse: false,
        children: structuredData[heading]
      })
    }

    return result
  }

  function updateFilter(control) {
   json._rawValue.forEach((obj) => {
    if (obj.attributeField === control.attributeField){
      obj.inUse = true
    }
    else(
      obj.inUse = false
    )
   }) 

    let type = control.variableType
    let field = control.attributeField
    let value = control.model

    let newDef = ''

    if (type == 'Binary') {
      if (value == 'yes') {
        newDef = field + ' = 1'
      }
      if (value == 'no') {
        newDef = field + ' = 0'
      }
      if (value == '') {
        newDef = ''
      }

      control.definitionExpression = newDef
    }
    if (type == 'Categorical') {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          for (let i = 0; i < value.length; i++) {
            if(control.useMask){
              newDef = newDef + field + " = '" + value[i].val + "' or "
            }
            else{
              newDef = newDef + field + " = '" + value[i] + "' or "
            }
          }
          newDef = newDef.slice(0, -4)
        }
      }
      if (typeof value === 'string' || value instanceof String) {
        newDef = field + " = '" + value + "'"
      }
      if (typeof value === 'number' || value instanceof Number) {
        newDef = field + ' = ' + value
      }
      if (value == '') {
        newDef = ''
      }
      control.definitionExpression = newDef
    }
    if (type == 'Continuous Range') {
      if (value.min !== control.range.min || value.max !== control.range.max) {
        newDef = field + ' > ' + value.min + ' and ' + field + ' < ' + value.max
      } else {
        newDef = ''
      }
      control.definitionExpression = newDef
    }

    calcDef()
  }

  function calcDef() {
    let items = filterCategories.value
    let dq = ''
    for (let i = 0; i < items.length; i++) {
      let item = items[i].children
      let itemsActive = 0
      for (let a = 0; a < item.length; a++) {
        if (item[a].definitionExpression !== '') {
          itemsActive = itemsActive + 1
          dq = dq + '(' + item[a].definitionExpression + ') and '
        }
      }
      items[i].active = itemsActive > 0 ? true : false
    }

    dq = dq.slice(0, -5)
    def.value = dq
  }

  function clearAll() {
    let items = this.filterCategories
    for (let i = 0; i < items.length; i++) {
      for (let a = 0; a < items[i].children.length; a++) {
        let type = items[i].children[a].variableType
        let model = items[i].children[a].model
        if (type == 'Binary') {
          if (items[i].children[a].model !== '') {
            items[i].children[a].model = ''
            items[i].children[a].definitionExpression = ''
             items[i].children[a].inUse = 'false'
            items[i].active = false
          }
        }
        if (type == 'Categorical') {
          if (Array.isArray(model)) {
            if (model.length > 0) {
              items[i].children[a].model = []
              items[i].children[a].definitionExpression = ''
               items[i].children[a].inUse = 'false'
              items[i].active = false
            }
          }
          if (typeof model === 'string' || model instanceof String) {
            if (model !== '') {
              items[i].children[a].model = ''
              items[i].children[a].definitionExpression = ''
               items[i].children[a].inUse = 'false'
              items[i].active = false
            }
          }
          if (typeof model === 'number' || model instanceof Number) {
            if (model !== '') {
              items[i].children[a].model = ''
              items[i].children[a].definitionExpression = ''
               items[i].children[a].inUse = 'false'
              items[i].active = false
            }
          }
        }
        if (type == 'Continuous Range') {
          if (
            items[i].children[a].model.min !== items[i].children[a].range.min ||
            items[i].children[a].model.max !== items[i].children[a].range.max ||
            items[i].children[a].model.step !== items[i].children[a].range.step
          ) {
            items[i].children[a].model = {
              min: items[i].children[a].range.min,
              max: items[i].children[a].range.max,
              step: items[i].children[a].range.step
            }
            items[i].children[a].definitionExpression = ''
            items[i].children[a].inUse = 'false'
            items[i].active = false
          }
        }
      }
    }
    calcDef()
  }

  return { filterCategories, updateFilter, def, calcDef, clearAll, json }
})
