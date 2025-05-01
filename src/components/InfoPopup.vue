<script setup>
import { ref, computed, watch } from 'vue'
import { useInfoPopupStore } from '../stores/InfoPopup'
import PhotoCarosel from './PhotoCarosel.vue'
const infoPopupStore = useInfoPopupStore()

let url = 'https://s3.us-west-1.amazonaws.com/maps.tnc.org/maine/SharedResources/CulvertPhotos/'
</script>

<template>
  <div class="">
    <div v-if="!infoPopupStore.details.Site_ID" class="customDiv">
      <p class="center text-grey-8">Select a barrier from the map to view details</p>
    </div>

    <div v-if="infoPopupStore.details.Site_ID !== ''">
      <p class="text-primary text-body1 text-bold">
        {{ infoPopupStore.details.Type }}
        {{ infoPopupStore.details.Site_ID }}
      </p>
    </div>
    <!-- tracelines-->
    <div class="row" v-if="infoPopupStore.details.Site_ID !== ''">
      <div class="col-6 text-caption">Downstream tracelines</div>
      <div class="col-2 self-center">
        <svg
          aria-labelledby="Preview"
          focusable="false"
          height="2"
          role="img"
          style="display: block"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g transform="matrix(1,0,0,1.5,0,1.4901161193847656e-8)">
            <path
              d="M 0.6666666666666666 0.6666666666666666 L 49.333333333333336 0.6666666666666666"
              fill="none"
              fill-rule="evenodd"
              stroke="rgba(243, 144, 29, 1)"
              stroke-dasharray="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="4"
              stroke-width="1.3333333333333333"
            ></path>
          </g>
        </svg>
      </div>
    </div>
    <div class="row q-mb-md" v-if="infoPopupStore.details.Site_ID !== ''">
      <div class="col-6 text-caption">Upstream tracelines</div>
      <div class="col-2 self-center">
        <svg
          aria-labelledby="Preview"
          focusable="false"
          height="2"
          role="img"
          style="display: block"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g transform="matrix(1,0,0,1.5,0,1.4901161193847656e-8)">
            <path
              d="M 0.6666666666666666 0.6666666666666666 L 49.333333333333336 0.6666666666666666"
              fill="none"
              fill-rule="evenodd"
              stroke="rgba(144, 33, 74, 1)"
              stroke-dasharray="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="4"
              stroke-width="1.3333333333333333"
            ></path>
          </g>
        </svg>
      </div>
    </div>
    <!-- details -->
    <q-list class="q-mb-md" v-if="infoPopupStore.details.Site_ID !== ''" bordered>
      <q-expansion-item
        v-for="(item, key) in infoPopupStore.infoList"
        expand-separator
        :label="item.title"
        :key="key"
        header-class="bg-blue-grey-6 text-body1 text-white"
        header-style="border-bottom: 1px solid white"
        expand-icon-class="text-white"
        dense
      >
        <q-list class="bg-white">
          <q-item v-for="(att, key) in item.children" :key="key">
            <q-item-section class="q-pr-lg">{{ att.name }}</q-item-section>
            <q-item-section class="q-pr-lg q-pl-sm bg-accent">{{ att.value }}</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-list>
    <!-- photos -->
    <div
      v-if="infoPopupStore.details.Site_ID !== ''"
      class="customDiv"
      v-show="infoPopupStore.photoList.length == 0"
    >
      <p class="center text-grey-8">no photos</p>
    </div>
    <photo-carosel v-show="infoPopupStore.photoList.length > 0"></photo-carosel>
  </div>
</template>
<style scoped>
.center {
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
}
.customDiv {
  height: 100px;
  border: 1px solid grey;
}
</style>
