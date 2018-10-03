<template>

    <div class="swiper-container">

    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide slide">
            <p>“Jag pratar ofta med folk i min omgivning om sådant jag läst i Filter”</p>
            <p class="quoted">Olle D - Läsare</p>
        </div>
        <div class="swiper-slide slide">
            <p>“Jag använder ofta Filter när jag brygger kaffe!”</p>
            <p class="quoted">Hannibal Lecter - Psykopat</p>
            </div>
        <div class="swiper-slide slide">
            <p>“Jag använder nästan alltid Filter på instagram!”</p>
            <p class="quoted">Sauron - Härskare</p>
        </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('Swiper component mounted.')
        }
    }
</script>
