<template>
    <div class="hamburger-container">

        <div class="hamburger-button" @click="isActive = !isActive" :class="{ active: isActive }">
            <div class="bar top"></div>
            <div class="bar mid" :class="{ active: isActive }"></div>
            <div class="bar bot" :class="{ active: isActive }"></div>
        </div>
        
        <div class="hamburger-menu" :class="{ active: isActive }">

            <a href="https://magasinetfilter.se/">Logga in <img src="/images/sign-in-black.svg" alt="sign-in"></a>
            <a href="https://magasinetfilter.se/annonsera/">ANNONSERA</a>
            <a href="https://magasinetfilter.se/kontakt/">KONTAKT OCH MEDARBETARE</a>
            <a href="https://magasinetfilter.se/frilansare/">SKRIVA FÖR FILTER</a>
            <a href="https://pluspren.se/info/villkor.htm">VILLKOR OCH POLICY</a>

        </div>
 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
            }
        },
        mounted() {
            console.log('Hamburger component mounted.')
        }
    }
</script>
