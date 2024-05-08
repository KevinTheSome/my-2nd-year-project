<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardConntroler;


Route::inertia('/', 'index');

Route::group(['middleware' => 'guest'], function () {
    Route::inertia('/register', 'Register');
    Route::post('/register', [AuthController::class, 'registerPost'])->name('register');
    Route::inertia('/login', 'Login');
    Route::post('/login', [AuthController::class, 'loginPost'])->name('login');
    
});
 
Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', [DashboardConntroler::class, 'dashboard'])->name('dashboard');
    Route::post('/dashboard/add', [DashboardConntroler::class, 'addPerson'])->name('addPerson');
    Route::post('/dashboard/inbuilding', [DashboardConntroler::class, 'inbuilding'])->name('inbuilding');
    Route::post('/dashboard/leave', [DashboardConntroler::class, 'leave'])->name('leave');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});


/*

    restful 7 actions
    replace "placeholder"

    Route::get('/placeholder/index', [placeholder::class, 'index']);
    Route::get('/placeholder/{id}', [placeholder::class, 'show']);
    Route::post('/placeholder/create', [placeholder::class, 'create']);
    Route::get('/placeholder/new', [placeholder::class, 'new']);
    Route::get('/placeholder/{id}/edit', [placeholder::class, 'edit']);
    Route::put('/placeholder/{id]', [placeholder::class, 'update']);
    Route::delete('/placeholder/{id}', [placeholder::class, 'destroy']);

*/

