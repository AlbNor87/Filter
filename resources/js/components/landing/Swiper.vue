<template>

    <!-- Marking up two sets of the slides since I initiated 
    two seperate swiper-components with different javascript attributes. 
    One for mobile and one for desktop. -->

    <div>

        <div class="swiper-container mobile">

            <div class="swiper-wrapper">
                  <!-- Slides -->
                <div class="swiper-slide slide">
                    <div class="mobile-slide">
                        <p>“Jag pratar ofta med folk i min omgivning om sådant jag läst i Filter”</p>
                        <p class="quoted">Olle D - Läsare</p>
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="mobile-slide">
                        <p>“Men jag gillar ju Filter, det är en supertidning. Sköna killar!”</p>
                        <p class="quoted">Sigge Eklund - Författare</p>
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="mobile-slide">
                        <p>“Jag använder ofta Filter när jag brygger kaffe!”</p>
                        <p class="quoted">Sauron - Mörkrets Härskare</p>
                    </div>
                </div>

            </div>

            <div class="swiper-pagination"></div>

        </div>

        <div class="swiper-container desktop">

            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide slide">
                    <div class="desktop-slide">
                        <p>“Jag pratar ofta med folk i min omgivning om sådant jag läst i Filter”</p>
                        <p class="quoted">Olle D - Läsare</p>
                        <!-- <img src="/images/quote_desktop/" alt=""> -->
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="desktop-slide">
                        <p>“Men jag gillar ju Filter, det är en supertidning. Sköna killar!”</p>
                        <p class="quoted">Sigge Eklund - Författare</p>
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="desktop-slide">
                        <p>“Jag använder ofta Filter när jag brygger kaffe!”</p>
                        <p class="quoted">Sauron - Mörkrets Härskare</p>
                    </div>
                </div>

            </div>
         
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev button-fx"></div>
            <div class="swiper-button-next button-fx"></div>

        </div>
    </div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('Swiper component mounted.')
        }
    }
</script>
