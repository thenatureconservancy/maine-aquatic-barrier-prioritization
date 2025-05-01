<script setup>
import { ref } from 'vue'

const tab = ref('faq')
</script>

<template>
  <div style="width: 100vw; height: 100vh" class="bg-blue-grey-1 row">
    <div class="col-md-3 col-sm-3 col-xs-3">
      <q-tabs
        v-model="tab"
        :vertical="true"
        class="text-blue-grey-6"
        active-class="text-primary bg-grey-1"
      >
        <q-route-tab name="faq" label="FAQ" to="/help/faq" />
        <!--q-route-tab name="howto" label="HOW-TO" to="/help/howto" /-->
        <q-route-tab name="glossary" label="GLOSSARY" to="/help/glossary" />
        <q-route-tab name="contact" label="CONTACT" to="/help/contact" />
      </q-tabs>
    </div>
    <div class="col bg-white">
      <router-view />
    </div>
  </div>
  <!--mobile-->
</template>
