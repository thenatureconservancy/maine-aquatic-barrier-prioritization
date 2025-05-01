<script setup>
import { ref, computed, watch } from 'vue'
import { useInfoPopupStore } from '../stores/InfoPopup'
const infoPopupStore = useInfoPopupStore()

let url = 'https://s3.us-west-1.amazonaws.com/maps.tnc.org/maine/SharedResources/CulvertPhotos/'
</script>

<template>
  <q-carousel
    control-type="regular"
    control-color="primary"
    animated
    v-model="infoPopupStore.slide"
    arrows
    infinite
    autoplay
  >
    <q-carousel-slide
      v-for="(photo, key) in infoPopupStore.photoList"
      :name="key"
      :img-src="url + photo"
    >
      <div class="absolute-bottom custom-caption text-body1">
        <div>{{ key + 1 + ' of ' + infoPopupStore.photoList.length }}</div>
      </div>
      <div class="absolute-top custom-caption text-body1">
        <div>{{ photo.split('_')[1].replace('.JPG', '').replace('.jpg', '').toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) }}</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>
<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  font-weight: 500;
  text-shadow: 0 0 5px black;

}
</style>
