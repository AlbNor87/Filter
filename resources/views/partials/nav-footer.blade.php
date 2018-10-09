<nav class="footer">
    
        {{-- @include('view.name', ['some' => 'data']) --}}
    
    <?php
    $name = Route::currentRouteName();
    $current = Request::path();
    $test = 'test';
    ?>

    

    <div class="footer-wrapper">

        @if(Request::path() === '/')
            <div class="sign-up-container">
                <div class="sign-up-text-wrapper">
                    <h1>Nyfiken?</h1>
                    <h3>Anmäl dig till Filters nyhetsbrev</h3>
                </div>
                <form class="sign-up" action="">
                        <input class="sign-up-input" type="text" placeholder="exempel@email.com" required>
                        <input class="submit" type="submit" value="Skicka">
                </form>
            </div>
        @endif        
        
        <div class="logo-container">
            <img src="/images/logo.svg" alt="Filter logga">
            <p>© Copyright Offside Press 2018</p>
        </div>
    
    </div>
    
</nav>