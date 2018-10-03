require('./bootstrap');

window.Vue = require('vue');

// import Swiper from 'swiper';
// import 'swiper/dist/swiper.css';
// Vue.use(Swiper);

Vue.component('intro', require('./components/Intro.vue'));
Vue.component('library', require('./components/Library.vue'));
Vue.component('pitch', require('./components/Pitch.vue'));
Vue.component('saidaboutfilter', require('./components/SaidAboutFilter.vue'));
Vue.component('subscription', require('./components/Subscription.vue'));
Vue.component('tryfilter', require('./components/TryFilter.vue'));
Vue.component('swiper', require('./components/Swiper.vue'));

const app = new Vue({
    el: '#app'
});

const swiper = new Vue({
    el: '#swiper'
});

require('./swiper-init');