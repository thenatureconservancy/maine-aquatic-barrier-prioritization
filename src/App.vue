<script setup>
import { useQuasar } from 'quasar'
import { computed, render, watch, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFishPriorityStore } from './stores/fishPriority'
import { usePanelNavigationStore } from './stores/panelNavigation'
import { useExportStore } from "./stores/export";
import SignInButton from './components/SignInButton.vue';   
import {useAuthStore } from './stores/auth';
import Help from './views/Help.vue';

const navStore = usePanelNavigationStore();
const authStore = useAuthStore();
const fpStore = useFishPriorityStore();
const exportStore = useExportStore();
const panelStore = usePanelNavigationStore()
const route = useRoute()
const showDialog = ref(false)

const width = ref(window.innerWidth/2.2)
const height = ref(window.innerHeight )
</script>
<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-primary" height-hint="98">
  <q-toolbar
    style="border-bottom: 1px solid rgba(0, 0, 0, 0.12);"
    class="bg-white text-primary text-subtitle1"
  >
    <q-btn flat icon="menu" color="grey-8" padding="sm" class="">
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item
            clickable
            v-close-popup
            tag="a"
            target="_blank"
            href="https://maps.tnc.org/maine"
          >
            <q-item-section>TNC Maine Mapping Portal</q-item-section>
          </q-item>
          <q-separator inset />
          <q-item
            clickable
            v-close-popup
            tag="a"
            target="_blank"
            href="https://maps.tnc.org/maine/culvertfloodriskexplorer/"
          >
            <q-item-section>Culvert Flood Risk Explorer</q-item-section>
          </q-item>
          <q-separator inset />
          <q-item
            clickable
            v-close-popup
            tag="a"
            target="_blank"
            href="https://maps.tnc.org/maine/coastalriskexplorer/"
          >
            <q-item-section>Coastal Risk Explorer</q-item-section>
          </q-item>
          <q-separator inset />
          <q-item
            clickable
            v-close-popup
            tag="a"
            target="_blank"
            href="https://tnc.maps.arcgis.com/apps/webappviewer/index.html?id=a3f9165cf45f49f2b509c9e4684cee57"
          >
            <q-item-section>Aquatic Barrier Prioritization</q-item-section>
          </q-item>
          <q-separator inset />

          <q-item
            clickable
            v-close-popup
            tag="a"
            target="_blank"
            href="https://tnc.maps.arcgis.com/apps/instant/basic/index.html?appid=4ddff19e921f4110b2a2e3022ad06170"
          >
            <q-item-section>Future Habitat</q-item-section>
          </q-item>
          <q-separator inset />
        </q-list>
      </q-menu>
    </q-btn>
    <img
      style="
              width: 138px;
              padding-top: 20px;
              padding-bottom: 15px;
              padding-left: 15px;
              margin-right: 20px;
            "
      src="./assets/tnc.png" 
    />
    <q-separator vertical inset></q-separator>

    <q-breadcrumbs active-color="primary" class="q-pl-lg">
      <q-breadcrumbs-el
        label="TNC Maine Mapping Portal"
        icon="home"
        href="https://maps.tnc.org/maine"
      />
      <q-breadcrumbs-el
        
        class="text-grey"
        label="Aquatic Barrier Prioritization"
        icon="img:/icon_sm.png"
        
      />
    </q-breadcrumbs>
    <q-space></q-space>
    <q-space></q-space>
   <div>
   <SignInButton></SignInButton>
   <q-btn
   unelevated=""
   size="sm"
   square
   color="primary"
   padding=""
   class="q-mx-xs"
   @click="panelStore.rightDrawerOpen = true"
   >help</q-btn>

   <q-btn
   unelevated=""
   size="sm"
   square
   color="primary"
   padding=""
  >Data Export
 <q-menu>
   <div class="q-pa-lg">
     <div class="row items-end" style="border-bottom: 1px solid #143153">
      <p class="text-body1 text-bold text-primary q-mb-xs"> Export options: </p>
      <q-space></q-space>
      <p class="text-caption text-primary q-mb-xs"> #records: {{ fpStore.count }}</p>
     </div>
     <!--q-checkbox v-if="fpStore.count !== '11,634'" size="xs" val="selected" v-model="exportStore.useSelected">Selected<br/> ({{ fpStore.count == '11,634'? 0: fpStore.count }})</q-checkbox-->
     <p class="q-ma-sm">Select data categories to include in file</p>
    
   <q-list class="q-mb-md" bordered>
     <q-expansion-item
       v-for="(item, key) in exportStore.dataDownloadObject"
       expand-separator
       :key="key"
       header-class="text-primary"
       header-style="border-bottom: 1px solid #143153"
       expand-icon-class="text-blue-grey-9"
       dense
       expand-icon-toggle
     >
     <template v-slot:header>
       <q-item-section class="col-1">
       <q-checkbox size="xs" v-model="item.download" ></q-checkbox>
     </q-item-section>
       <q-item-section>
         <q-item-label class="">{{ item.title }} </q-item-label>
       </q-item-section>
     </template>
       <q-list class="bg-white">
         <q-item dense v-for="(att, key) in item.children" :key="key">
           <q-item-section class="q-pr-lg">
             <q-item-label>{{ att.name }}</q-item-label>
             <!--q-item-label class="text-caption">description of field possibly here??</q-item-label-->
           </q-item-section>
         </q-item>
       </q-list>
     </q-expansion-item>
   </q-list>
   <q-btn @click="exportStore.getDataDownload = !exportStore.getDataDownload" square unelevated color="primary">Download csv</q-btn>
   <q-btn @click="exportStore.getDataDictionary()" class="" square stack size="md" flat color="primary">Data dictionary</q-btn>
   </div>
 </q-menu>
 </q-btn>
 <p v-if="authStore.userName" :class="authStore.userName.includes('Contact')? 'text-caption q-mb-none q-pb-none text-red' : 'text-caption q-mb-none q-pb-none'" >
  {{ authStore.userName }} &nbsp; <q-spinner-hourglass v-if="authStore.loading" class="q-mb-xs" size="14px" color="primary"></q-spinner-hourglass ></p>
 </div>
  <!--q-tabs
          indicator-color="primary"
          active-class="bg-primary text-white bordered outlined"
          no-caps
          class="text-dark q-ml-md bg-accent"
          v-if="!mobile"
          v-model="tab"
          dense
        >
          <q-route-tab to="/" name="map" label="Map"/>
        
          <q-route-tab to="/help/faq" label="Help" />
          <q-tab>Export Data</q-tab>
  </q-tabs-->
        <q-space></q-space>
        <div id="searchDiv" style="border: 2px solid #143153"></div>
        <!--q-btn v-if="mobile" flat icon="menu" color="blue-grey-9" padding="md" no-caps>
          <q-menu>
            <q-list style="min-width: 100px" dense>
              <q-item clickable v-close-popup class="q-pa-md" to="/">
                <q-item-section class="q-pa-sm text-body2">Analysis</q-item-section>
              </q-item>
              <q-separator inset />
              <q-item clickable v-close-popup to="/resources">
                <q-item-section class="q-pa-sm text-body2">Resources</q-item-section>
              </q-item>
              <q-separator inset />
              <q-item clickable v-close-popup to="/help/faq">
                <q-item-section class="q-pa-sm text-body2">Help</q-item-section>
              </q-item>
              <q-separator inset />
              <q-item clickable v-close-popup>
                <q-item-section class="q-pa-sm text-body2" @click="startPdf()"
                  >Download PDF</q-item-section
                >
              </q-item>
            </q-list>
            <q-space></q-space>
          </q-menu>
        </q-btn>
        <q-btn
          v-if="showPdf && !mobile"
          outline
          icon="download"
          color="primary"
          @click="startPdf()"
          label="Download pdf"
          class="q-mr-md"
        >
        </q-btn-->

    <div>
      <!--q-btn
        @click="showHelp = true"
        padding="5px"
        flat
        color="primary"
        icon="help_outlined"
        size="lg"
        class="q-mx-md"
      /-->
    </div>
  </q-toolbar>
    </q-header>
     

    <q-page-container>
      <router-view />
      <q-dialog v-model="showDialog" backdrop-filter="blur(4px)">
        <q-card>
          <q-card-section class="bg-blue-grey-1 q-pa-sm">
            <div class="text-body1 text-bold text-primary"> Welcome to the Emerald Edge Carbon Map</div>
          </q-card-section>

          <q-card-section class="q-pt-md">
          

<p>This interactive Carbon Map integrates a suite of forest carbon datasets, with land ownership and land designation information, to help identify actionable forest-based natural climate solutions (NCS) and opportunities for sequestering carbon.</p>

 

<p>Please note that this product is currently in "beta" testing and does not yet reflect stewardship practices and traditional knowledge of Indigenous and local communities. The Nature Conservancy and Nature United are ready and available to support NCS projects that incorporate and reflect local and Indigenous knowledge, perspectives and priorities that go beyond the current capabilities of the Carbon Map.</p>

 

<p>Visit <a href=https://www.nature.org/en-us/about-us/where-we-work/priority-landscapes/emerald-edge/>nature.org</a> to learn more about our values and principles.</p>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page-container>
        <q-drawer class="shadow-5 no-scroll full-height" overlay v-model="panelStore.rightDrawerOpen" side="right" :width="width" :height="height" bordered>
     
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title class="text-white">Help</q-toolbar-title>
        <q-btn flat icon="close" @click="panelStore.rightDrawerOpen = false;navStore.helpSection = ''" />
        </q-toolbar>
         <Help></Help>

    </q-drawer>
  </q-layout>

</template>

<style>
.outlined{
  border: 1px solid #143153
}

body {
 font-family: "Barlow", sans-serif !important;
 }
</style>
