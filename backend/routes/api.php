<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\GoodieController;

Route::apiResource('events', EventController::class);
Route::apiResource('reservations', ReservationController::class);
Route::apiResource('goodies', GoodieController::class);
