

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

Vue.use(Vuetify);
Vue.use(VueRouter);

import Dashboard from './components/admin/Dashboard.vue';
import User from './components/admin/User.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/admin/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/admin/users',
            name: 'User',
            component: User
        },
    ],
});

Vue.component('admin-navigation', require('./components/admin/Navigation.vue').default);


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router,
});
