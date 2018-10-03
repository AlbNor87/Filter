<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/7.0.3/sanitize.min.css">
        <link rel="stylesheet" href="/css/swiper.min.css">
        <link rel="stylesheet" href="{{ asset('css/app.css')}}">
        
        
        <title>Magasinet Filter</title>
    </head>
    <body>

        @include('partials.nav-header')
        @yield('content')
        @include('partials.nav-footer')

        <script src="/js/swiper.min.js"></script>
        <script src="{{ asset('js/app.js')}}"></script>
        {{-- <script>
            var mySwiper = new Swiper ('.swiper-container', {
              // Optional parameters
              direction: 'horizontal',
              loop: true,
          
              // If we need pagination
              pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
              },
          
              // Navigation arrows
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
          
              // And if we need scrollbar
            //   scrollbar: {
            //     el: '.swiper-scrollbar',
            //   },
            })
            </script> --}}
    </body>
</html>
