<template>

    <div class="pitch-container">

        <div class="gradient-left"></div>

        <div class="pitch-article-container">
            
            <div class="pitch-article">
                <h2 class="pitch-title">Ditt intresse i fokus</h2>
                <p class="pitch-content">Läser du på bussen, eller lyssnar när du städar? Ta del av vårt berikade arkiv på det sätt som passar dig bäst.</p>
            </div>

            <div class="pitch-article">
                <h2 class="pitch-title">Öppnar vägar</h2>
                <p class="pitch-content">Vi är ett av de mest omtalade magasinen i Sverige som öppnar vägar för reflektion och diskussion. Lyft din åsikt!</p>
            </div>

            <div class="pitch-article">
                <h2 class="pitch-title">Trovärdig kvalitét</h2>
                <p class="pitch-content">Vi har belönats med några av Sveriges tyngsta journalistiska utmärkelser som Stora journalistpriset, Guldspaden, Årets tidskrift och Publicistklubbens stora pris.</p>
            </div>
            
        </div>

        <div class="gradient-right"></div>
        
    </div>

</template>

<script>
    export default {
        mounted() {
            console.log('Pitch component mounted.')
        }
    }
</script>
