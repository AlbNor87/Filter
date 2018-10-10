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
Vue.component('samplearticle', require('./components/samplearticle/SampleArticle.vue'));
Vue.component('samplearticleshared', require('./components/samplearticle/SampleArticleShared.vue'));
Vue.component('subscribe', require('./components/samplearticle/Subscribe.vue'));
Vue.component('paywall', require('./components/samplearticle/PayWall.vue'));
Vue.component('hamburger', require('./components/hamburger/Hamburger.vue'));


const app = new Vue({
    el: '#app'
});

if(document.querySelector('.swiper-container')) {
    const swiper = new Vue({
        el: '#swiper'
    });
    require('./swiper-init');
}

if(document.querySelector('#tryItOutNow')) {

    window.onscroll = function() {myFunction()};

    function myFunction() {
        if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
            console.log('Its working!');
            let target= document.querySelector("#tryItOutNowNavbar");
            target.classList.remove('ghost');
        } else {
            document.querySelector("#tryItOutNowNavbar").classList.add('ghost');
        }
    }

}


if(document.querySelector('#hamburger')) {
    const hamburger = new Vue({
        el: '#hamburger'
    });
}



