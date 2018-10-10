<template>

    <div class="tryItOut-container">

        <div class="gradient-left tryItOut-gradient-top"></div>

        <div class="tryItOut-title-container">
            <div class="title-wrapper">
                <img class="tryItOut-title-img" src="/images/newspaper.svg" alt="paper">
                <h2>Magasin</h2>
            </div>

            <a href="/testa/steg2" class="no-decor button-fx"><h3>Tillbaka</h3></a>
        </div>
        <h3 class="tryItOut-subtitle tm-24">Registrera ditt betalningssätt. Kom ihåg att du kan säga upp din registrering när du vill – du får en påminnelse 3 dagar innan gratisperioden löpt ut.</h3>

        <form class="card-form-container position-relative" action="/registrerad">

            <input
            class="card-number"
            type="number" 
            placeholder="Kortnummer"
            v-model="cardnumber"
            @blur="cardInputIsFocused = false"
            @focus="cardInputIsFocused = true"
            maxlength="16"
            v-bind:class="{ active: !showCard }"
            required
            >

            <input
            class="month"
            type="text" 
            placeholder="MM/ÅÅ"
            maxlength="5"
            required
            >

            <input
            class="cvv"
            type="text" 
            placeholder="CVV"
            maxlength="3"
            required
            >

            <img src="/images/card.svg" alt="card" class="card-input-img" v-if="showCard">

            <p>Vi accepterar Visa och Mastercard och samarbetar med betalväxeln Stripe. Läs mer på <a href="https://stripe.com/se">Stripes hemsida.</a></p>

            <div class="card-image-container">
                <img src="/images/visa.svg" alt="Visa" class="card-img">
                <img src="/images/mastercard.svg" alt="Mastercard" class="card-img">
                <img src="/images/stripe.svg" alt="Stripe" class="card-img">
            </div>

            <h4 class="time-span">Din gratisperiod pågår mellan: 
                <br> {{this.startDate}} – {{this.endDate}}. <br>
                 Därefter kostar prenumerationen 39kr/mån.</h4>

            <input class="submit submit-registeration button-fx" type="submit" value="Starta din gratis månad">

            <div class="no-magazine-container">

                <div class="no-magazine-content button-fx" @click="log()">
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
        methods: {
            log() {
                console.log('startDate: ', this.startDate)
                console.log('endDate: ', this.endDate)
            }
        },
        computed: {
            showCard: function() {
                if (this.cardnumber !== '' || this.cardInputIsFocused){
                    return false;
                }
                return true;
            },
            startDate: function() {
                let today = new Date();
                let dd = today.getDate();
                let mm = today.getMonth()+1;
                let yyyy = today.getFullYear();
                if(dd<10){
                    dd='0'+dd;
                } 
                if(mm<10){
                    mm='0'+mm;
                } 
                today = dd+'/'+mm+'/'+yyyy;
                return today;
            },
            endDate: function() {
                let today = new Date();
                let newDate = new Date();
                newDate.setDate(today.getDate()+30);
                let dd = newDate.getDate();
                let mm = newDate.getMonth()+1;
                let yyyy = newDate.getFullYear();
                if(dd<10){
                    dd='0'+dd;
                } 
                if(mm<10){
                    mm='0'+mm;
                } 
                newDate = dd+'/'+mm+'/'+yyyy;
                return newDate;
            }
        }
    }
</script>
