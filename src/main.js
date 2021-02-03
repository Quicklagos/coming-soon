import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import BaseButton from './components/UI/BaseButton.vue'


const app = createApp(App)

app.component('the-header', TheHeader)
app.component('the-footer', TheFooter)
app.component('base-button', BaseButton)



app.mount('#app')
