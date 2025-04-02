<?php

use App\Http\Controllers\PartiesController;
use App\Http\Controllers\ReservationsController;
use App\Http\Controllers\GoodiesController;
use Illuminate\Support\Facades\Route;

/*
apiResource creates these routes :
// Parties routes
Route::get('parties', [PartiesController::class, 'index']);
Route::post('parties', [PartiesController::class, 'store']);
Route::get('parties/{id}', [PartiesController::class, 'show']);
Route::put('parties/{id}', [PartiesController::class, 'update']);
Route::delete('parties/{id}', [PartiesController::class, 'destroy']);

// Reservations routes
Route::get('reservations', [ReservationsController::class, 'index']);
Route::post('reservations', [ReservationsController::class, 'store']);
Route::get('reservations/{id}', [ReservationsController::class, 'show']);
Route::put('reservations/{id}', [ReservationsController::class, 'update']);
Route::delete('reservations/{id}', [ReservationsController::class, 'destroy']);

// Goodies routes
Route::get('goodies', [GoodiesController::class, 'index']);
Route::post('goodies', [GoodiesController::class, 'store']);
Route::get('goodies/{id}', [GoodiesController::class, 'show']);
Route::put('goodies/{id}', [GoodiesController::class, 'update']);
Route::delete('goodies/{id}', [GoodiesController::class, 'destroy']);
*/
Route::apiResource('parties', PartiesController::class);
Route::apiResource('reservations', ReservationsController::class);
Route::apiResource('goodies', GoodiesController::class);
