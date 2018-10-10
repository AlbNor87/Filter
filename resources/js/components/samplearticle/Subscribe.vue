<template>

    <div class="subscribe-container">

        <div class="subscribe-wrapper">

            <h2 class="subscribe-title">Bli prenumerant</h2>
            <h3 class="subscribe-subtitle">Få fri tillgång till alla nummer digitalt och upptäck och ta del av vårt berikade arkiv på det sätt som passar dig bäst.</h3>

            <div class="magazine-container mobile subscribe">
                <div class="magazine-1"></div>
                <div class="magazine-2"></div>
                <div class="magazine-3"></div>
            </div>

            <div class="subscribe-library">
                <div class="subscribe-gradient"></div>
                
                <h2 class="subscribe-library-subtitle">Över 500 artiklar <br> samlat i ett bibliotek</h2>
            </div>

        </div>

        <a href="/testa/steg1" class="testa-mobile-static no-decor button-fx-mobile" v-if="showExtras">
            <h3>Testa en månad gratis</h3>
        </a>

        <div class="always-container no-margin">

            <div class="gradient-left"></div>
            <h2 class="always-title">ALLTID SOM FILTERMEDLEM:</h2>
            <div class="always-content">
                <div class="check">
                    <img src="/images/check.svg" alt="check">
                </div>
                <p>Grävande och trovärdig kvalitéts-journalistik</p>
            </div>

            <div class="always-content">
                <div class="check">
                    <img src="/images/check.svg" alt="check">
                </div>
                <p>Välj själv om du vill få texten uppläst för dig eller läsa själv</p>
            </div>

            <div class="always-content">
                <div class="check">
                    <img src="/images/check.svg" alt="check">
                </div>
                <p>Säg upp prenumerationen när du vill</p>
            </div>

            <h2 class="tryFilter-title mt30" v-if="showExtras">Provsmaka Filter</h2>

            <div class="article-container mb72" v-if="showExtras">

                <div class="tryFilter-article mt16">
                    <img src="/images/tryFilter03.png" alt="Prova Filter bild03">
                    <h2>Fett fusk</h2>
                    <p>En god olivolja kan förgylla vilken sallad som helst. Men det finns knappast någon annan matvara som det fuskas så mycket med. Fyra av tio extra jungfruoljor fick underkänt när Hunger skickade dem på test.</p>
                    <p class="author"><span class="text">TEXT:</span> IVAR ANDERSSON</p>
                </div>

            </div>

        </div>

    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                showExtras: false,
            }
        },
        mounted() {
            console.log('TryItOutFooter component mounted.');
            
            if(window.location.pathname === '/artikel/shared'){
                this.showExtras = true;
            }

        },
    }
</script>
