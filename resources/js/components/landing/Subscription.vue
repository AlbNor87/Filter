<template>

    <div class="subscription-container">

        <div class="gradient-left"></div>

        <h2 class="subscription-title">Vad passar dig?</h2>

        <div class="outer-subtype-wrapper">

            <div class="subtype-container extra-top-margin subtype-desktop-left">
                
                <div class="inner-subtype-wrapper">

                    <div class="subtype-header">
                        <h2 class="subtype-title">Webb</h2>
                        <img class="tablet" src="/images/tablet.svg" alt="tablet">
                    </div>

                    <div class="subtype-content">
                        <div class="check">
                            <img src="/images/check.svg" alt="check">
                        </div>
                        <p>Full tillgång till över 500 artiklar på Filters webbplats</p>
                    </div>

                    <div class="subtype-content">
                        <div class="check">
                            <img src="/images/check.svg" alt="check">
                        </div>
                        <p>Diskutera artiklar med läsare och skribenter</p>
                    </div>

                    <div class="subtype-content">
                        <div class="check">
                            <img src="/images/check.svg" alt="check">
                        </div>
                        <p>Lyssna eller läs - välj själv</p>
                    </div>

                    <div class="subtype-content">
                        <div class="check">
                            <img src="/images/check.svg" alt="check">
                        </div>
                        <p>Säg upp när du vill</p>
                    </div>
                </div>

                <div class="select">
                    <a href="/testa/steg2" class="select-button no-decor button-fx">
                        <h4>Välj</h4>
                    </a>
                    <div class="price">
                        <h3><span class="digit">19</span> kr / mån</h3>
                    </div>
                </div>
                
            </div>

            <div class="subtype-container subtype-desktop-right">

                <div class="inner-subtype-wrapper">

                    <div class="subtype-header">
                        <h2 class="subtype-title">Magasin</h2>
                        <img class="newspaper" src="/images/newspaper.svg" alt="paper">
                    </div>

                    <div class="subtype-content">
                        <div class="check">
                            <img src="/images/check.svg" alt="check">
                        </div>
                        <p>Magasinet Filter hem i din brevlåda varannan månad</p>
                    </div>

                    <div class="subtype-content">
                        <div class="check">
                            <img src="/images/check.svg" alt="check">
                        </div>
                        <p>Full tillgång till över 500 artiklar på Filters webbplats</p>
                    </div>

                    <div class="subtype-content">
                        <div class="check">
                            <img src="/images/check.svg" alt="check">
                        </div>
                        <p>Diskutera artiklar med läsare och skribenter</p>
                    </div>

                    <div class="subtype-content">
                        <div class="check">
                            <img src="/images/check.svg" alt="check">
                        </div>
                        <p>Lyssna eller läs - välj själv</p>
                    </div>

                    <div class="subtype-content">
                        <div class="check">
                            <img src="/images/check.svg" alt="check">
                        </div>
                        <p>Säg upp när du vill</p>
                    </div>

                    <div class="select">
                        <a href="/testa/steg2" class="select-button no-decor button-fx">
                            <h4>Välj</h4>
                        </a>
                        <div class="price">
                            <h3><span class="digit">39</span> kr / mån</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('Subscription component mounted.')
        }
    }
</script>
