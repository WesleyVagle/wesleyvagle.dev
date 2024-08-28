import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
AOS.init({
    // Global settings:
    duration: 1000,  // Duration of all animations
    delay: 500,      // Delay for all animations
    easing: 'ease-out-cubic',  // Easing function for all animations
    offset: 0,     // Offset value for all animations
    once: true       // Whether animation should happen only once
});

app.use(router)

app.mount('#app')