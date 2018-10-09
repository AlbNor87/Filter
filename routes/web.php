<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'index');
Route::view('/testa/steg1', 'tryItOut');
Route::view('/testa/steg2', 'tryItOut2');
Route::view('/testa/steg3', 'tryItOut3');
Route::view('/registrerad', 'tryItOut4');

// Route::get('/testa', function () {
//     return view('tryItOut');
// });

// Route::get('/testa/steg2', function () {
//     return view('tryItOut2');
// });
