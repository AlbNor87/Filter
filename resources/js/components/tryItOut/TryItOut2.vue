<template>

    <div class="tryItOut-container">

        <div class="gradient-left tryItOut-gradient-top"></div>

        <div class="tryItOut-title-container">
            <div class="title-wrapper">
                <img class="tryItOut-title-img" src="/images/newspaper.svg" alt="paper">
                <h2>Magasin</h2>
            </div>

            <a href="/testa/steg1" class="no-decor button-fx"><h3>Tillbaka</h3></a>
        </div>
        <h3 class="tryItOut-subtitle tm-24">Prenumerationen inkluderar tillgång till både webbarkivet och magasinet. Registrera ditt inlogg och ange den adress som du vill ha tidningen levererad till.</h3>

        <form class="form-container" action="/testa/steg3">

            <input type="text" placeholder="Förnamn" required>
            <input type="text" placeholder="Efternamn" required>
            <input type="text" placeholder="Email" required>
            <input type="password" placeholder="Lösenord" required>
            <input type="password" placeholder="Upprepea lösenord" required>
            <input type="text" placeholder="Adress" required>
            <input type="number" placeholder="Postnummer" required>
            <input type="text" placeholder="Postort" required>
            <input type="text" placeholder="Land" required>

            <label class="checkbox-container">
                <input type="checkbox">
                    <p>Jag har läst och godkänner hanteringen av mina personuppgifter. <a href="" class="pf-din">Läs här.</a></p>
                <span class="checkmark"></span>
            </label>

            <input class="submit submit-registeration button-fx" type="submit" value="Nästa steg">

        </form>

    </div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('TryItOut2 component mounted.')
        }
    }
</script>
