import { defineStore } from "pinia";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
import IdentityManager from "@arcgis/core/identity/IdentityManager";
import Portal from "@arcgis/core/portal/Portal"
import PortalItem from "@arcgis/core/portal/PortalItem.js";
import { ref, computed } from 'vue'

export const useAuthStore = defineStore("auth", () => ({
  buttonLabel: ref('TNC sign in'),
  userName: ref(''),
  userAllowed: false,
  loading: false,

  async login() {
    console.log('login')
      const info = new OAuthInfo({
        appId: "RTOImDGGkkUKjkMA", // update per app
        popup: false,
        expiration: 20160, // 14 days in mins
      });
      this.info = info
      IdentityManager.registerOAuthInfos([info]);
      try {
        const credentials = await IdentityManager.getCredential(
          info.portalUrl + "/sharing",
          {
            oAuthPopupConfirmation: false,
          }
        );
        console.log(credentials)
        this.buttonLabel = 'Logout'
        //this.userName = credentials.userId
        this.checkPermissions()
           
      } catch (error) {
        console.log(error);
        alert("There was a problem connecting to the site.");
      }
  },
  //id: '9de47e18a68743ff9beb0be82bc5c545', access
  checkPermissions(){
  let _this = this;
  const portal = new Portal({
      url: "https://www.arcgis.com",
      authMode: 'immediate'
    })
    portal
  .load()
  .then(function (results) {
    let user = results.user.fullName
    const appItem = new PortalItem({
      id: '9de47e18a68743ff9beb0be82bc5c545',
      portal: portal
    })
    appItem
      .load()
      .then(function (results) {
        console.log(results)
        _this.userAllowed = true
        //set up watch from map to load the secure items
        _this.userName = "[ Welcome, " + user + " ]"
      })
      .catch((error) => {
        console.log(error)
        _this.userName = "[ Contact dcoker@tnc.org for access ]"
      })
  })
  },
  logout(){
    console.log('logout')
     // If already signed in, then destroy the credentials to sign out.
     this.buttonLabel = 'TNC sign in'
     IdentityManager.destroyCredentials();
     window.location.reload();
  }
  
}));