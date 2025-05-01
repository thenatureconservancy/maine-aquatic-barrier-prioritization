<template>
    <button @click="startEsriLogin">Login with Esri</button>
  </template>
   
  <script setup>
  import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
  import IdentityManager from "@arcgis/core/identity/IdentityManager";
   
  const startEsriLogin = () => {
    console.log("Button clicked");
    const info = new OAuthInfo({
      appId: "RTOImDGGkkUKjkMA",
      portalUrl: "https://www.arcgis.com",
      popup: false,
      expiration: 20160,
    });
    IdentityManager.registerOAuthInfos([info]);
    IdentityManager.getCredential("https://www.arcgis.com/sharing");
  };</script>