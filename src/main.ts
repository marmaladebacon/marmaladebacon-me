import { createApp } from 'vue';
import App from './App.vue';
import Purecss from 'purecss';

const mainApp = createApp(App);
mainApp.mount('#app');
mainApp.component('Purecss', Purecss);

