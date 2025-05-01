<script setup>
import { computed } from 'vue'

//copy cels from excel, go to https://onlinetsvtools.com/convert-tsv-to-json
//paste output json below
const json = [
  {
    Heading: 'General',
    Subheading: '',
    Question: 'What is the Emerald Edge Carbon Map? ',
    Answer:
      'The Emerald Edge Carbon Map is an interactive, online map that integrates a suite of forest carbon datasets, overlaid with land ownership and land designation information, resulting in a robust carbon accounting tool to help land managers, communities, and  governments pinpoint the most impactful and actionable forest-based natural climate solutions and opportunities for sequestering carbon in the Emerald Edge, the world’s largest temperate rainforest, which spans Alaska, British Columbia, Washington state and Oregon.'
  },
  {
    Heading: 'General',
    Subheading: '',
    Question: 'Why is the Emerald Edge an important area of focus for the Carbon Map?',
    Answer:
      'The Emerald Edge is a globally important carbon storehouse. The coastal temperate rainforests stretching from Southeast Alaska through coastal British Columbia and into the Pacific Northwest pull an estimated 300 million metric tons of CO2e out of the atmosphere each year, equivalent to the carbon emissions from the annual energy usage of 58 million homes. With Improved Forest Management and increased protections, the region can annually absorb and durably store substantially more carbon, making the Emerald Edge critically important in addressing human-caused climate change. '
  },
  {
    Heading: 'General',
    Subheading: '',
    Question: 'What is the purpose of the Emerald Edge Carbon Map?',
    Answer:
      'The Emerald Edge Carbon Map provides users with the ability to leverage high-quality datasets to identify, quantify and prioritize forest-based natural climate solutions throughout the Emerald Edge by identifying locations that have the potential to sequester and store carbon beyond what would otherwise occur in a business-as-usual scenario.'
  },
  {
    Heading: 'About the Data',
    Subheading: '',
    Question: 'What kind of datasets are used to create the Emerald Edge Carbon Map?',
    Answer:
      'The Carbon Map relies on public regional, national, and global datasets on aboveground forest carbon stocks and fluxes alongside land ownership and land designation data. Below are summaries of the data sources by category—please see the Methods section in the Resources tab of this website for detailed methodology.\n<ul>\n<li><strong>Ecoregion:</strong> Map designers compiled subnational ecoregion datasets to define the most accurate boundaries. In Alaska, the extent was defined by Nowacki et al. 2001 Level 2 Coastal Rainforests. In British Columbia, the extent was defined by the Cool Hypermaritime and Highlands Ecodivision. The Washington and Oregon extent was defined by combining ecoregional data with fire regime groups (Fire regime groups were used to identify areas least susceptible to frequent, high-severity fires due to climate change. We included fire regime groups with long fire return intervals as well as those with shorter return intervals but with low-mixed severity).</li>\n<li><strong>Land Ownership:</strong> The Carbon Map synthesizes best available subnational land ownership and land designation spatial datasets, starting with the most authoritative publicly available government online datasets. These were supplemented, verified and augmented with finer-scale datasets obtained directly from local agencies. In cases where spatial data was not readily available, as was the case with some administratively protected areas (e.g., riparian buffers), the regulations were mapped using GIS analysis.</li>\n<li><strong>Forest Carbon:</strong> Map designers analyzed the best available high-resolution aboveground forest carbon stock maps at global, national and regional scales to compare the resulting patterns of climate mitigation benefits from improved forest management and conservation.</li>\n<li><strong>Carbon Flux:</strong> Map designers estimated forest carbon sequestration and losses for 2001-2021 based on a global map of carbon flux. This map includes emissions from all biological carbon pools for forest stand-replacing disturbances and sequestration into aboveground and below-ground biomass in standing and new forest. The carbon flux datasets used in the Carbon Map create an estimate of flux based on Intergovernmental Panel on Climate Change national greenhouse gas inventory rules by overlaying forest extent, loss and gain maps with emission and removal factors from the literature.</li></ul>'
  },
  {
    Heading: 'About the Data',
    Subheading: '',
    Question: 'Are the datasets used to build the Carbon Map publicly available? ',
    Answer:
      'The spatial data developed for the Carbon Map is archived and publicly <a href="https://doi.org/10.7910/DVN/D3XUHZ">available for download on the Harvard Dataverse</a>.'
  },
  {
    Heading: 'About the Data',
    Subheading: '',
    Question: 'How often are the datasets used to build the Carbon Map updated? ',
    Answer:
      'The Nature Conservancy and Nature United are committed to iteration and updates of the carbon map as new annual carbon data become available and as land-use and jurisdictional designations change. The Nature Conservancy and Nature United are also exploring methods and data sources to integrate co-benefits (such as biodiversity data) in future versions of the map and are committed to seeking user, stakeholder and Indigenous Peoples and local community feedback on an ongoing basis and addressing potential concerns about the map—such as issues of data sovereignty, data errors, lack of local context and land rights.'
  },
  {
    Heading: 'About the Data',
    Subheading: '',
    Question: 'What is the accuracy or resolution of the Carbon Map? ',
    Answer:
      'The Emerald Edge Carbon Map is built on high-resolution carbon mapping technologies and represents a first-of-its-kind mapping tool to help assess current forest carbon stocks, risks of carbon loss, net forest carbon sequestration rates and potential conservation opportunities in a land management context. TNC did not build the carbon models, but rather provides a synthesis of information put into a land management context to explore NCS project ideas. The carbon estimates are modeled, but do not replace on-the-ground field inventory and assessments. The Emerald Edge Carbon Map represents a starting point; the Carbon Map relies on ongoing verification of the data by users. '
  },
  {
    Heading: 'About the Data',
    Subheading: '',
    Question:
      'What are the differences between the forest carbon models (e.g., Harris, Santoro, Hudak, Williams)?',
    Answer:
      'To develop the Emerald Edge Carbon Map, we collated the best available forest carbon datasets. To facilitate comparisons across jurisdictions, we used global models which included forest carbon stock (Santoro et al.) and flux (Harris et al) data for all parts of the Emerald Edge Region. However, regional carbon stock models have been developed for portions of the Emerald Edge and we include those models in the Emerald Edge Carbon map to help users evaluate the range of values possible in their area of interest (PNW, Hudak et al.; Continental United States, Williams et al.,; Canada, Matasci et al.). These models vary in their methodologies, spatial resolution and extent, model assumptions, and uncertainty. More information on each model and the methods used to develop them can be found in the citations on the Resources tab of this website.'
  },
  {
    Heading: 'Findings and Map Abilities',
    Subheading: '',
    Question:
      'According to the Emerald Edge Carbon Map, how much additional carbon could the Emerald Edge sequester with improved forest management and conservation? ',
    Answer:
      'TNC and Nature United determined the Emerald Edge’s temperate rainforests encompass approximately 13 million hectares of forests that hold the potential for NCS action (NCS Action Category 1). These forests currently hold a total aboveground carbon of about 4,900 (±640) megatons CO2e. The average carbon density of these forests across the Emerald Edge is 370 metric tons CO2e per hectare. Analysis indicates that these forests acted as a net carbon sink, absorbing 36 megatons CO2e per year between 2001 and 2021, balancing the 91 megatons CO2e per year lost due to timber harvest or other disturbances.\n\nA preliminary analysis demonstrates that a conservative 10% increase in improved forest management and conservation within the coastal temperate rainforests could contribute 9.2 Mt CO2e annually. This corresponds to approximately 5.2% of the 2030 land-based climate commitments made by the United States and Canada combined.'
  },
  {
    Heading: 'Findings and Map Abilities',
    Subheading: '',
    Question: 'How does the Emerald Edge Carbon Map define and determine “Additionality”?',
    Answer:
      'The Emerald Edge Carbon Map utilizes a spatial approach to constrain the overestimation of potential carbon benefits, assigning lands categories representing the likely ability for forest management changes. That ability is based on the area’s level of already established management restrictions, such as National or Provincial Parks and legal protections around riparian zones. Areas without these restrictions or with management directives that allow active timber harvest are generally considered potentially available for NCS projects with additionality that warrant deeper investigation and analysis. This information allows decision-makers to prioritize interventions that offer carbon sequestration and storage gains, thus optimizing the impact of conservation efforts. By considering these factors, policies, voluntary or regulatory carbon markets, and incentive programs can be strategically employed to influence forest management choices and encourage conservation actions that genuinely contribute to addressing climate mitigation goals.'
  },
  {
    Heading: 'Findings and Map Abilities',
    Subheading: '',
    Question:
      'Do the flux numbers take into account the extent to which forest products may continue to store carbon after harvest? ',
    Answer:
      'No. The Carbon Map is intended to provide an initial overview to help identify potential locations and feasibility for carbon additionality, but on-the-ground inventory, assessment, verification and supply-chain tracking are needed to determine the durability of carbon storage before and after harvest scenarios. However, to provide a frame of reference: regional and national estimates have shown that, under current practices, approximately 43-54% of forest carbon removed by timber harvest is lost to the atmosphere within the first 20-years following harvest. '
  },
  {
    Heading: 'Findings and Map Abilities',
    Subheading: '',
    Question: 'Does the Carbon Map account for leakage?',
    Answer:
      'No. The Carbon Map estimates aboveground carbon in the forest and whether that forest was a source or sink of greenhouse gases between 2001-2021. Leakage refers to loss of carbon benefits due to the displacement of activities (such as logging) in a project area to areas outside the project. As stated above, the Carbon Map is intended to provide an initial overview to help identify potential locations and feasibility for carbon additionality, but on-the-ground inventory, assessment and verification are needed to determine the efficacy of specific projects. Leakage is project-specific and depends on a host of factors, for instance, how readily available are alternative places to log as a result of the carbon project. '
  },
  {
    Heading: 'Findings and Map Abilities',
    Subheading: '',
    Question: 'How does the Carbon Map account for estimates of below-ground carbon? ',
    Answer:
      'The flux estimates account for aboveground and belowground carbon estimates. The aboveground forest carbon models do not account for belowground forest carbon (as the name suggests) or soil carbon. However, there is a relationship between aboveground live forest carbon and belowground live forest carbon in the tree roots (the root to shoot ratio). Temperate forests globally show belowground live root biomass is approximately 25% of the total aboveground live forest biomass shown on the Carbon Map. Therefore, to estimate the live biomass combined this formula could be used: aboveground forest carbon + aboveground forest carbon *0.25.'
  },
  {
    Heading: 'Equity and Human Rights',
    Subheading: '',
    Question:
      'How have the perspectives of Indigenous Peoples and local communities informed the Emerald Edge Carbon Map? ',
    Answer:
      'In two decades of working in the Emerald Edge, TNC and Nature United have seen the transformative impact of deep, trust-based partnerships between Indigenous Peoples and local communities and conservation groups, producing lasting benefits for both people and the planet. Ongoing discussions and project collaborations have informed how the Carbon Map is designed—but its development represents a snapshot in time based on our current relationships and ways of working and will require future iterations to fully represent new partnerships. Additionally, the Carbon Map is an important source of data to inform existing and new relationships and community-based projects and help determine their carbon and actionable NCS potential.'
  },
  {
    Heading: 'Equity and Human Rights',
    Subheading: '',
    Question: 'How are Indigenous lands defined and determined in the land ownership layer? ',
    Answer:
      'The Carbon Map was limited to governmentally recognized ownership and land held in trust (such as by the U.S. Bureau of Indian Affairs) ownership designations for tribes, reservations, and Indigenous-owned corporations. It is not representative of the full influence and authority that Indigenous communities are working to re-establish over their traditional territories. '
  },
  {
    Heading: 'Equity and Human Rights',
    Subheading: '',
    Question:
      'Does the Emerald Edge Carbon Map reflect land-use practices, traditional knowledge and the local context of Indigenous and local communities? ',
    Answer:
      'The Emerald Edge Carbon Map does not yet reflect land-use practices and traditional knowledge of Indigenous and local communities, but TNC and Nature United are ready and available to support NCS projects that incorporate and reflect local and Indigenous knowledge, perspectives and priorities that go beyond the current capabilities of the Carbon Map. Furthermore, our Emerald Edge Program is grounded in values that respect Indigenous rights and authority, and seeks to support their self-determination, sovereignty and Indigenous lifeways and ways of knowing. The NCS projects and work that we co-develop and co-define alongside Indigenous and local communities reflect these values and contain learned expertise that supplements the abilities of the Carbon Map. '
  },
  {
    Heading: 'Use of the Map',
    Subheading: '',
    Question: 'Who is the Emerald Edge Carbon Map intended for? ',
    Answer:
      'The Carbon Map can be helpful to private landowners, Indigenous Peoples, public agencies and local communities in the Emerald Edge as they seek to make informed and data-driven decisions regarding land use and resource management that incorporates carbon implications. '
  },
  {
    Heading: 'Use of the Map',
    Subheading: '',
    Question: 'What kind of information does the Emerald Edge Carbon Map provide? ',
    Answer:
      'The Carbon Map provides high-resolution and spatially explicit representation of aboveground forest carbon stock and flux estimates in the Emerald Edge, allowing landowners, land managers, policymakers, planners and others to explore, quantify and prioritize areas with substantial carbon additionality potential.'
  },
  {
    Heading: 'Use of the Map',
    Subheading: '',
    Question:
      'How can the Emerald Edge Carbon Map be useful for land managers? What kinds of decisions can it help inform? ',
    Answer:
      'The Emerald Edge Carbon Map provides private landowners, Indigenous Peoples, public agencies and local communities with high-quality data to explore where land management interventions may offer significant carbon sequestration and storage gains beyond what would already be achieved. '
  },
  {
    Heading: 'Use of the Map',
    Subheading: '',
    Question:
      'Is the Carbon Map prescriptive? Will the data be used to determine how private, Tribal and public lands are managed? ',
    Answer:
      'The Emerald Edge Carbon Map does not prescribe specific actions; it is meant to be a tool for landowners and land managers to explore and guide sustainable land management decisions.'
  },
  {
    Heading: 'Use of the Map',
    Subheading: '',
    Question:
      'Can the Carbon Map be used to infringe upon Indigenous Peoples’ traditional land tenure, rights and decision-making authority? ',
    Answer:
      'The map’s designers are careful to avoid imposing external viewpoints and practices on local communities and instead seek to foster a collaborative approach that values traditional knowledge and practices. '
  },
  {
    Heading: 'Use of the Map',
    Subheading: '',
    Question:
      'Does the Carbon Map identify ways to ensure local communities enjoy the benefits of carbon sequestration initiatives — not just external stakeholders like governments, conservation organizations and corporations? ',
    Answer:
      'The Carbon Map allows all users to explore the benefits of carbon conservation initiatives for local communities, including improved livelihoods, ecosystem health and climate resilience. The Carbon Map does not prioritize certain users over others, and it is our hope that making this map publicly available can empower and equip local communities to make land-use decisions on their own lands.'
  },
  {
    Heading: 'Use of the Map',
    Subheading: '',
    Question:
      'Do you have examples of how the Carbon Map is being used to inform land-use decisions? ',
    Answer:
      'TNC and Nature United have used the Carbon Map to determine that between 2001 and 2021 the Emerald Edge’s temperate rainforests absorbed more carbon than they released into the atmosphere and that approximately 13 million hectares of these forests hold the potential for natural climate solution actions. The Emerald Edge Carbon Map is an important source of data to inform projects within the Emerald Edge program’s NCS Database and help determine their carbon and actionable NCS potential. We anticipate that the map can also help bring forward future project ideas and help identify First Nations, Tribes or landowners with whom TNC and Nature United might develop and deepen relationships to explore actionable NCS projects together. If you have your own examples of how the Carbon Map has informed your land-use decisions, please don’t hesitate to reach out and share it with: <a href="mailto:nikolaj.lasbo@tnc.org">Nikolaj Lasbo, marketing director, TNC\'s Emerald Edge Program.</a>'
  }
]
//not currently in use
const regionJson = [
  {
    Heading: 'Region-Specific FAQ',
    Subheading: 'Alaska',
    Question: 'Question1',
    Answer: 'Lorem Ipsum'
  },
  {
    Heading: 'Region-Specific FAQ',
    Subheading: 'Alaska',
    Question: 'Question2',
    Answer: 'Lorem Ipsum'
  },
  {
    Heading: 'Region-Specific FAQ',
    Subheading: 'Canada',
    Question: 'Question1',
    Answer: 'Lorem Ipsum'
  },
  {
    Heading: 'Region-Specific FAQ',
    Subheading: 'Canada',
    Question: 'Question2',
    Answer: 'Lorem Ipsum'
  },
  {
    Heading: 'Region-Specific FAQ',
    Subheading: 'Oregon',
    Question: 'Question1',
    Answer: 'Lorem Ipsum'
  },
  {
    Heading: 'Region-Specific FAQ',
    Subheading: 'Oregon',
    Question: 'Question2',
    Answer: 'Lorem Ipsum'
  },
  {
    Heading: 'Region-Specific FAQ',
    Subheading: 'Washington',
    Question: 'Question1',
    Answer: 'Lorem Ipsum'
  },
  {
    Heading: 'Region-Specific FAQ',
    Subheading: 'Washington',
    Question: 'Question2',
    Answer: 'Lorem Ipsum'
  }
]

const data = computed(() => {
  return nest(json)
})

const regionData = computed(() => {
  return nestRegion(regionJson)
})

function nest(json) {
  const structuredData = {}

  // Iterate over each entry in the JSON object
  for (const entry of json) {
    const heading = entry.Heading
    const subheading = entry.Subheading
    const question = entry.Question
    const answer = entry.Answer

    // Create a nested structure
    if (!structuredData[heading]) {
      structuredData[heading] = {}
    }
    if (!structuredData[heading][subheading]) {
      structuredData[heading][subheading] = []
    }
    structuredData[heading][subheading].push({ Question: question, Answer: answer })
  }

  // Convert the nested structure to an array of objects
  const result = []
  for (const heading in structuredData) {
    for (const subheading in structuredData[heading]) {
      result.push({
        title: heading,
        children: structuredData[heading][subheading]
      })
    }
  }

  return result
}

function nestRegion(regionJson) {
  const structuredData = {}

  // Iterate over each entry in the JSON object
  for (const entry of regionJson) {
    const heading = entry.Heading
    const subheading = entry.Subheading
    const question = entry.Question
    const answer = entry.Answer

    // Create a nested structure
    if (!structuredData[heading]) {
      structuredData[heading] = {}
    }
    if (!structuredData[heading][subheading]) {
      structuredData[heading][subheading] = []
    }
    structuredData[heading][subheading].push({ Question: question, Answer: answer })
  }

  // Convert the nested structure to an array of objects
  const result = []
  for (const heading in structuredData) {
    const children = []
    for (const subheading in structuredData[heading]) {
      children.push({
        title: subheading,
        children: structuredData[heading][subheading]
      })
    }
    result.push({
      title: heading,
      children: children
    })
  }

  return result
}
</script>
<template>
  <q-scroll-area style="height: calc(100vh - 100px)">
    <div class="text-primary text-right">
      <p class="text-h6 q-pa-md q-mb-none q-mr-md text-weight-light text-blue-grey-9">
        FREQUENTLY ASKED QUESTIONS
      </p>
      <div class="q-pa-md text-left">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            v-for="(row, index) in data"
            :key="index"
            expand-separator
            :label="row.title"
            header-class="text-white bg-primary text-h6 text-weight-light"
            default-opened
            expand-icon-class="text-white"
          >
            <q-expansion-item
              expand-separator
              v-for="(child, index) in row.children"
              :key="index"
              :label="child.Question"
              :header-inset-level="0.5"
              :content-inset-level="1"
            >
              <q-card class="q-pb-md text-dark">
                <div class="q-mr-xl" v-html="child.Answer"></div>
              </q-card>
            </q-expansion-item>
          </q-expansion-item>

          <!--q-expansion-item
            v-for="(row, index) in regionData"
            :key="index"
            expand-separator
            :label="row.title"
            header-class="text-white bg-primary text-h6 text-weight-light"
            default-opened
            expand-icon-class="text-white"
          >
            <q-expansion-item
              v-for="(child, index) in row.children"
              :key="index"
              expand-separator
              :label="child.title"
              :header-inset-level="0.5"
              :content-inset-level="0.5"
            >
              <q-expansion-item
                v-for="(child2, index) in child.children"
                :key="index"
                expand-separator
                :label="child2.Question"
                :header-inset-level="0.5"
                :content-inset-level="0.5"
              >
                <q-card>
                  <q-card-section>
                    {{ child2.Answer }}
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-expansion-item>
          </q-expansion-item-->
        </q-list>
      </div>
    </div>
  </q-scroll-area>
</template>
