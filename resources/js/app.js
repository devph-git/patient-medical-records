

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify';

Vue.use(Vuetify);


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('admin-navigation', require('./components/admin/Navigation.vue').default);


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
});
