<?php

use App\Http\Controllers\PartiesController;
use App\Http\Controllers\ReservationsController;
use App\Http\Controllers\GoodiesController;
use Illuminate\Support\Facades\Route;

/*
apiResource creates these routes :
GET /parties (index)
POST /parties (store)
GET /parties/{id} (show)
PUT/PATCH /parties/{id} (update)
DELETE /parties/{id} (destroy)
*/
Route::apiResource('parties', PartiesController::class);
Route::apiResource('reservations', ReservationsController::class);
Route::apiResource('goodies', GoodiesController::class);
