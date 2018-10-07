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

if(window.location.pathname === '/') {
    const app = new Vue({
        el: '#app'
    });
    
    const swiper = new Vue({
        el: '#swiper'
    });
}

require('./swiper-init');



//Try It Out page
Vue.component('tryitout', require('./components/tryItOut/TryItOut.vue'));

if(window.location.pathname === '/testa') {
    const testa = new Vue({
        el: '#testa'
    });    
}


