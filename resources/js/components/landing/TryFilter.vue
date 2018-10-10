<template>

    <div class="tryFilter-container">
        <h2 class="tryFilter-title">Provsmaka Filter</h2>

        <div class="tryFilter-header">
          <p>Fortfarande inte helt säker på om Filter är något för dig? Här hittar du fyra stycken utvalda gratisartiklar att provsmaka.</p>
        </div>

        <div class="article-container">

        <div class="tryFilter-article">
            <img src="/images/tryFilter01.png" alt="Prova Filter bild01">
            <h2>Maffiametoden som erövrade världen</h2>
            <p>Därför stavas framtidens viktigaste konsumentmärkning Fair Tax.</p>
            <p class="author"><span class="text">TEXT:</span> JOHAN FRISK</p>
        </div>

        <div class="tryFilter-article">
            <img src="/images/tryFilter02.png" alt="Prova Filter bild02">
            <h2>Den stora oron</h2>
            <p>Allt fler svenskar odlar, går kurser i självhushållning och drömmer om att flytta ut på landet. Vad är de egentligen ute efter?</p>
            <p class="author"><span class="text">TEXT:</span> ERIK EJE ALMQVIST</p>
        </div>

        <div class="tryFilter-article">
            <img src="/images/tryFilter03.png" alt="Prova Filter bild03">
            <h2>Fett fusk</h2>
            <p>En god olivolja kan förgylla vilken sallad som helst. Men det finns knappast någon annan matvara som det fuskas så mycket med. Fyra av tio extra jungfruoljor fick underkänt när Hunger skickade dem på test.</p>
            <p class="author"><span class="text">TEXT:</span> IVAR ANDERSSON</p>
        </div>

        </div>
        
    </div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('TryFilter component mounted.')
        }
    }
</script>
