<template>

    <div class="tryItOut-container">

        <div class="gradient-left tryItOut-gradient-top"></div>

        <div class="tryItOut-title-container">
            <div class="title-wrapper">
                <h2>Börja upptäck!</h2>
            </div>
            <a href="/testa/steg3" class="no-decor"><h3>Tillbaka</h3></a>
        </div>
        <h3 class="tryItOut-subtitle tm-24">Ditt magasin kommer till din brevlåda inom kort. Varsågod att börja upptäcka vårt välfyllda arkiv på webben så länge!</h3>

        <div class="discover-container">
            <div class="discover">
                <h2>UPPTÄCK WEBBARKIVET</h2>
            </div>

            <h3>UPPTÄCK VÅRA POPULÄRASTE ARTIKLAR:</h3>

            <div class="discover-article">
                <img src="/images/idioti.png" alt="Upptäck bild01">
                <h2>Omgiven av idioter</h2>
                <p>Därför stavas framtidens viktigaste konsumentmärkning Fair Tax.</p>
                <p class="author"><span class="text">TEXT:</span> JOHAN FRISK</p>
            </div>

            <div class="discover-article">
                <img src="/images/palme.png" alt="Upptäck bild02">
                <h2>Palmemordet: Den osannolika mördaren</h2>
                <p>Läs alla förhören, se Stig Engström på TV och få svar på dina frågor.</p>
                <p class="author"><span class="text">TEXT:</span> THOMAS PETTERSSON</p>
            </div>

        </div>

    </div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('Registrerad component mounted.')
        },
    }
</script>
