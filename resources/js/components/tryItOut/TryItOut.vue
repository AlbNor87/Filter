<template>

    <div class="tryItOut-container">

        <div class="gradient-left tryItOut-gradient-top"></div>

        <h2 class="tryItOut-title">Testa en månad gratis!</h2>
        <h3 class="tryItOut-subtitle">Välj den prenumeration du vill testa.</h3>

        <div class="spread-sheet">

            <div class="row no-border">

                <div class="column web">

                    <img class="spread-sheet-tablet" src="/images/tablet.svg" alt="tablet">
                    <h2 class="column-title">Webb</h2>
                   
                </div>

                <div class="column magazine">
                    <img class="spread-sheet-newspaper" src="/images/newspaper.svg" alt="paper">
                    <h2 class="column-title">Magasin</h2>
                </div>

                <p class="center-text">FÖRSTA MÅNADEN GRATIS, DÄREFTER:</p>

            </div>

            <div class="row">

                <div class="column web">
                    <h3><span class="spread-sheet-digit">19</span> kr / mån</h3>
                </div>

                <div class="column magazine">
                    <h3><span class="spread-sheet-digit">39</span> kr / mån</h3>
                </div>

            </div>

            <div class="row">

                <p class="center-text mailbox">MAGASINET HEM I BREVLÅDAN</p>

                <div class="column web spread-extra-top-padding">
                    <img class="spread-cross" src="/images/cross.svg" alt="kryss">     
                </div>
                <div class="column magazine spread-extra-top-padding">
                    <img class="spread-check" src="/images/check.svg" alt="check">     
                </div>

            </div>

            <div class="row">

                <p class="center-text web-access">ALLA ARTIKLAR I FILTERS WEBB-BIBLIOTEK</p>

                <div class="column web spread-extra-top-padding">
                    <img class="spread-check" src="/images/check.svg" alt="check">      
                </div>
                <div class="column magazine spread-extra-top-padding">
                    <img class="spread-check" src="/images/check.svg" alt="check">     
                </div>

            </div>

            <div class="row">

                <p class="center-text digital-form">PAPPERSTIDNINGEN I DIGITAL FORM</p>

                <div class="column web spread-extra-top-padding">
                    <img class="spread-check" src="/images/check.svg" alt="check">      
                </div>
                <div class="column magazine spread-extra-top-padding">
                    <img class="spread-check" src="/images/check.svg" alt="check">     
                </div>

            </div>

            <div class="row">
                <a href="/testa/steg2" class="spread-select-button border-right no-decor">
                    <h4>Välj</h4>
                </a>
                <a href="/testa/steg2" class="spread-select-button border-left no-decor">
                    <h4>Välj</h4>
                </a>
            </div>
  
        </div>

        <div class="always-container">

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
                <p>Fortsätt läs där du slutade senast</p>
            </div>

            <div class="always-content">
                <div class="check">
                    <img src="/images/check.svg" alt="check">
                </div>
                <p>Bokmärk artiklar för framtida läsning</p>
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
                <p>Diskutera artiklar med andra läsare och skribenter</p>
            </div>

        </div>

    </div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('TryItOut component mounted.')
        }
    }
</script>
