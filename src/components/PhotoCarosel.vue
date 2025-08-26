<script setup>
import { ref, computed, watch } from 'vue'
import { useInfoPopupStore } from '../stores/InfoPopup'
import { useAuthStore } from '../stores/auth.js'
const infoPopupStore = useInfoPopupStore()
const authStore = useAuthStore()
let url = authStore.userAllowed? 'https://vpndata.tnc.org/Maine/PrivateCulvertPhotos/':'https://s3.us-west-1.amazonaws.com/maps.tnc.org/maine/SharedResources/CulvertPhotos/'

const imageDialogVisible = ref(false)
const currentImageSrc = ref('')
function showFullImage(imageUrl) {
  if (!imageUrl) return
  currentImageSrc.value = imageUrl
  imageDialogVisible.value = true
}
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
      @click="showFullImage(url+ photo)"
    >
      <div class="absolute-bottom custom-caption text-body1">
        <div>{{ key + 1 + ' of ' + infoPopupStore.photoList.length }}</div>
      </div>
      <div class="absolute-top custom-caption text-body1">
        <div>{{ photo.split('_')[1].replace('.JPG', '').replace('.jpg', '').toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) }}</div>
      </div>
      <div class="absolute-top text-right q-pa-sm" >
        <div><q-icon name="fullscreen" color="white" size="md"></q-icon></div>
      </div>
    </q-carousel-slide>
  </q-carousel>
  
  <q-dialog v-model="imageDialogVisible" full-width>
    <q-card>
      <q-img :src="currentImageSrc" class="q-ma-md" fit="contain" style="width: 80vw; height:80vh"/> 
      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" @click="imageDialogVisible = false" />
      </q-card-actions>
    </q-card>
  </q-dialog>
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
