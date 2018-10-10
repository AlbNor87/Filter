<template>

    <div class="payWall-container">
        
        <div class="payWall-gradient"></div>

        <div class="want-more">
            <h3>Vill du läsa mer?</h3>
        </div>

        <div class="payWall-content">
            <div class="payWall-header">
                <h3>FÖR PRENUMERANTER:</h3>
                <div class="wrapper">
                    <img src="/images/facebookWhite.svg" alt="facebook">
                    <h3 >LOGGA IN MED FACEBOOK</h3>
                </div>

            </div>

            <form class="form-container payWall" action="/testa/steg3">

            <input type="text" placeholder="Email" required>
            <input type="text" placeholder="Lösenord" required>
            
            <input class="submit submit-registeration button-fx" type="submit" value="Logga in">

        </form>
        


        </div>


    </div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('PayWall component mounted.')
        }
    }
</script>
