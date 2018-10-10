<template>
    <div class="intro-container">

        <div class="magazine-container desktop">
            <div class="magazine-1"></div>
            <div class="magazine-2"></div>
            <div class="magazine-3"></div>
        </div>

        <div class="intro-content">
            <h1 class="title">Granskar, underhåller & fördjupar</h1>
            <h3 class="intro">Filter har gjort det till en dygd att gå över ån efter vatten. Vi ifrågasätter vedertagna »sanningar« och vänder på de extra stenarna för att hitta detaljer som ger nya perspektiv.</h3>
            <a id="tryItOutNow" href="/testa/steg1" class="testa-desktop no-decor button-fx">
                <h3>Testa en månad gratis</h3>
            </a>
        </div>

        <div class="magazine-container mobile">
            <div class="magazine-1"></div>
            <div class="magazine-2"></div>
            <div class="magazine-3"></div>
        </div>
        
 
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Intro component mounted.')
        }
    }
</script>
