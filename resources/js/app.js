require('./bootstrap');

window.Vue = require('vue');

// import Swiper from 'swiper';
// import 'swiper/dist/swiper.css';
// Vue.use(Swiper);

//Landing page
Vue.component('intro', require('./components/landing/Intro.vue'));
Vue.component('library', require('./components/landing/Library.vue'));
Vue.component('pitch', require('./components/landing/Pitch.vue'));
Vue.component('saidaboutfilter', require('./components/landing/SaidAboutFilter.vue'));
Vue.component('subscription', require('./components/landing/Subscription.vue'));
Vue.component('tryfilter', require('./components/landing/TryFilter.vue'));
Vue.component('swiper', require('./components/landing/Swiper.vue'));
Vue.component('tryitout', require('./components/tryItOut/TryItOut.vue'));
Vue.component('tryitout2', require('./components/tryItOut/TryItOut2.vue'));
Vue.component('tryitout3', require('./components/tryItOut/TryItOut3.vue'));
Vue.component('tryitout4', require('./components/tryItOut/TryItOut4.vue'));

const app = new Vue({
    el: '#app'
});

if(document.querySelector('.swiper-container')) {
    const swiper = new Vue({
        el: '#swiper'
    });
    require('./swiper-init');
}


