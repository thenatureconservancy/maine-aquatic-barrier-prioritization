import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePanelNavigationStore = defineStore('panelNavigation', () => {
  const tab = ref('geography')
  const rightDrawerOpen = ref(true)
  const helpTab = ref("introduction");
  const helpSection= ref("");
  const coastalExpanded = ref(false);
  const inlandExpanded = ref(false);
  const salmonExpanded = ref(false);  
  const alewifeExpanded = ref(false);
  const shadExpanded = ref(false);
  return { tab, rightDrawerOpen, helpTab, helpSection, coastalExpanded, inlandExpanded, salmonExpanded, alewifeExpanded, shadExpanded }
})
