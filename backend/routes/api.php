<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\GoodieController;
use Illuminate\Support\Facades\Route;

Route::apiResource('events', EventController::class);
Route::apiResource('reservations', ReservationController::class);
Route::apiResource('goodies', GoodieController::class);

Route::get('/events', function () {
    $eventsPath = storage_path('json/events.json');
    return response()->json(json_decode(file_get_contents($eventsPath), true));
});

Route::get('/reservations', function () {
    $reservationsPath = storage_path('json/reservations.json');
    return response()->json(json_decode(file_get_contents($reservationsPath), true));
});

Route::get('/goodies', function () {
    $goodiesPath = storage_path('json/goodies.json');
    return response()->json(json_decode(file_get_contents($goodiesPath), true));
});
