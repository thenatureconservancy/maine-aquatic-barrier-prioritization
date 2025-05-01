<template>
  <q-btn
    id="sign-in-button"
    unelevated=""
    size="sm"
    square
    color="primary"
    padding=""
    class=""
    @click="authenticate()"
  >
    {{ authStore.buttonLabel }}</q-btn
  >
</template>

<script setup>
import { useAuthStore } from "../stores/auth.js";
import { onMounted, ref } from "vue";

const authStore = useAuthStore();

function authenticate() {
  if (authStore.buttonLabel == "sign in") {
    authStore.login();
  } else {
    authStore.logout();
  }
}

/*
function authenticate() {
  console.log("calls authenticate");
  let userauth = localStorage.getItem("MABUserWantsAuth");
  if (!userauth) {
    console.log("gets here");
    localStorage.setItem("MABUserWantsAuth", "yes");
    window.location.reload();
  }
  if (userauth == "yes") {
    localStorage.removeItem("MABUserWantsAuth");
    authStore.logout();
  }
}
// Function to sign in or out of the portal used by the sign in/out button click event.

onMounted(() => {
  //only run this if the user wants to login
  console.log(localStorage.getItem("MABUserWantsAuth"));
  if (localStorage.getItem("MABUserWantsAuth") == "yes") {
    console.log();
    //Create a new OAuthInfo object.
    authStore.login();
  }
});*/
</script>
