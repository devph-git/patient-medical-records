

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify';
Vue.use(Vuetify);git 


Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
});
