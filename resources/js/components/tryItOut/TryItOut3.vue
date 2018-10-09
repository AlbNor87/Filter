<template>

    <div class="tryItOut-container">

        <div class="gradient-left tryItOut-gradient-top"></div>

        <div class="tryItOut-title-container">
            <div class="title-wrapper">
                <img class="tryItOut-title-img" src="/images/newspaper.svg" alt="paper">
                <h2>Magasin</h2>
            </div>

            <a href="/testa/steg2" class="no-decor"><h3>Tillbaka</h3></a>
        </div>
        <h3 class="tryItOut-subtitle tm-24">Registrera ditt betalningssätt. Kom ihåg att du kan säga upp din registrering när du vill – du får en påminnelse 3 dagar innan gratisperioden löpt ut.</h3>

        <form class="card-form-container position-relative" action="/registrerad">

            <input
            type="text" 
            placeholder="Kortnummer                                           MM/ÅÅ CVV"
            v-model="cardnumber"
            @blur="cardInputIsFocused = false"
            @focus="cardInputIsFocused = true"
            v-bind:class="{ active: !showCard }"
            >

            <img src="/images/card.svg" alt="card" class="card-input-img" v-if="showCard">

            <p>Vi accepterar Visa och Mastercard och samarbetar med betalväxeln Stripe. Läs mer på <a href="">Stripes hemsida.</a></p>

            <div class="card-image-container">
                <img src="/images/visa.svg" alt="Visa" class="card-img">
                <img src="/images/mastercard.svg" alt="Mastercard" class="card-img">
                <img src="/images/stripe.svg" alt="Stripe" class="card-img">
            </div>

            <h4 class="time-span">Din gratisperiod pågår mellan: 
                <br> 11/10/2018 – 11/11/2018. <br>
                 Därefter kostar prenumerationen 39kr/mån.</h4>

            <input class="submit submit-registeration" type="submit" value="Starta din gratis månad">

            <div class="no-magazine-container">

                <div class="no-magazine-content">
                    <h3>VILL DU INTE HA ETT MAGASIN?</h3>
                    <p>Byt till endast webbarkivet (19kr/mån).</p>
                </div>

                <img src="/images/tablet.svg" alt="tablet">

            </div>

        </form>

    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                cardnumber: '',
                cardInputIsFocused: false,
            }
        },
        mounted() {
            console.log('TryItOut3 component mounted.')
        },
        computed: {
            showCard: function() {
                if (this.cardnumber !== '' || this.cardInputIsFocused){
                    return false;
                }
                return true;
            }
        }
    }
</script>
