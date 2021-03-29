<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome')->with(["globalData" => collect(['user' => Auth::user()])]); 
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home'); 

// Route::get('/home', 'NameController@index');
// Route::get('/name/{id}', 'NameController@show');
Route::post('/name', 'NameController@store');  

Route::post('/listname', 'NameController@index');  
