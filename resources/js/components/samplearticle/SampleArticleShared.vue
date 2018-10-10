<template>

    <div class="samplearticle-container">
        <div class="samplearticle-header">

            <img src="/images/palmeLarge.png" alt="Palme">
            
            <div class="samplearticle-divider">
                <p>Reportage</p>
            </div>

        </div>

        <div class="samplearticle-content">

            <img class="bookmark" src="/images/bookmark.svg" alt="Bookmark">

            <a href="/testa/steg1" class="testa-mobile no-decor button-fx-mobile">
                <h3>Testa en månad gratis</h3>
            </a>

            <img class="article-image negative-bm" src="/images/samplearticleshared.png" alt="artikel">

        </div>

        <!-- <div class="samplearticle-footer">

            <h3>DELA ARTIKELN</h3>
            <div class="image-container">
                <img class="margin-right" src="/images/facebook.svg" alt="facebook">
                <img src="/images/twitter.svg" alt="twitter">
            </div>


        </div> -->

    </div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('Article component mounted.')
        }
    }
</script>
