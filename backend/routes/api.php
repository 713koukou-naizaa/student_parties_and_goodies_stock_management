<?php

use App\Http\Controllers\PartiesController;
use App\Http\Controllers\ReservationsController;
use App\Http\Controllers\GoodiesController;
use Illuminate\Support\Facades\Route;

Route::apiResource('events', PartiesController::class);
Route::apiResource('reservations', ReservationsController::class);
Route::apiResource('goodies', GoodiesController::class);

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
