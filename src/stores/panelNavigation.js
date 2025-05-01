import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePanelNavigationStore = defineStore('panelNavigation', () => {
  const tab = ref('geography')

  return { tab }
})
