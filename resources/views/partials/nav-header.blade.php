<nav class="navbar">
    <div class="navbar-container">
        <a href="/"><img class="logo" src="/images/logo.svg" alt="logo"></a>

        @if(Request::path() === '/')
            <a id="tryItOutNowNavbar" href="/testa/steg1" class="testa-desktop no-decor button-fx top-button ghost">
                <h3>Testa en månad gratis</h3>
            </a>

            <a href="https://magasinetfilter.se/" class="log-in no-decor desktop button-fx">
                <p>Logga in</p>
                <img src="/images/sign-in.svg" alt="sign-in">
            </a>

            <div id="hamburger">
                <hamburger></hamburger>
            </div>
        @endif

        @if(Request::path() === 'artikel')
            <div class="listen">
                <img src="/images/speaker.svg" alt="lyssna">
                <p>Lyssna</p>
            </div>
            <a href="https://magasinetfilter.se/" class="log-in no-decor">
                <p>Logga in</p>
                <img src="/images/sign-in.svg" alt="sign-in">
            </a> 
        @endif

        @if(Request::path() === 'artikel/delad')
            <div class="listen">
                <img src="/images/speaker.svg" alt="lyssna">
                <p>Lyssna</p>
            </div>
            <a href="https://magasinetfilter.se/" class="log-in no-decor">
                <p>Logga in</p>
                <img src="/images/sign-in.svg" alt="sign-in">
            </a> 
        @endif

        @if(Request::path() === 'testa/steg1')
            <div class="log-in">
                <p class="color-white">Steg 1 av 3</p>
            </div>
        @endif

        @if(Request::path() === 'testa/steg2')
            <div class="log-in">
                <p class="color-white">Steg 2 av 3</p>
            </div> 
        @endif

        @if(Request::path() === 'testa/steg3')
            <div class="log-in">
                <p class="color-white">Steg 3 av 3</p>
            </div> 
        @endif

        
    </div>

</nav>