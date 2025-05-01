import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { setAssetPath } from '@esri/calcite-components/dist/components';
setAssetPath(location.href);

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(Quasar, quasarUserOptions)

app.mount('#app')
