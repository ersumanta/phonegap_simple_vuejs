import Vue from'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import { routes } from './routes.js'
import { locales } from './locales.js'
import { store } from './store/index'
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.mixin({
    methods: {
        ...mapActions([
            "updateLanguage"
        ]),
        ...mapGetters([
            "getLanguage"
        ])
    }
});

var i18n = new VueI18n({
    locale: navigator.language.slice(0,2),
    messages: locales,
    fallbackLocale: 'en'
});

const router = new VueRouter({
    routes: routes
});

new Vue({
    el: "#app",
    router: router,
    render: h => h(App),
    i18n: i18n,
    store: store
});
