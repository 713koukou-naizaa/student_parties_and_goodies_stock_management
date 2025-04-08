<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReservationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservationsPath = storage_path('json/reservations.json');
        return response()->json(json_decode(file_get_contents($reservationsPath), true));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $reservationsPath = storage_path('json/reservations.json');
        $reservations = json_decode(file_get_contents($reservationsPath), true); // get existing reservations
    
        // add new reservation
        $newReservation = $request->all(); // get data from request
        $newReservation['id'] = count($reservations) + 1; // set id
        $reservations[] = $newReservation; // add new reservation to existing reservations
    
        // save to JSON file
        file_put_contents($reservationsPath, json_encode($reservations, JSON_PRETTY_PRINT));
    
        return response()->json(['message' => 'Reservation added successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $reservationsPath = storage_path('json/reservations.json');
        $reservations = json_decode(file_get_contents($reservationsPath), true); // get existing reservations
    
        // update reservation
        // filter out the reservation to be updated by searching for id
        foreach ($reservations as &$reservation) {
            if ($reservation['id'] == $id) {
                $reservation = array_merge($reservation, $request->all()); // update reservation data
                break;
            }
        }
    
        // Save to JSON file
        file_put_contents($reservationsPath, json_encode($reservations, JSON_PRETTY_PRINT));
    
        return response()->json(['message' => 'Reservation updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $reservationsPath = storage_path('json/reservations.json');
        $reservations = json_decode(file_get_contents($reservationsPath), true); // get existing reservations
    
        // remove reservation
        // filter out the reservation to be deleted by searching for student email and party name
        $reservations = array_filter($reservations, function ($reservation) use ($request) {
            return !(
                $reservation['student_email'] === $request->student_email &&
                $reservation['party_name'] === $request->party_name
            );
        });
    
        // save to JSON file
        file_put_contents($reservationsPath, json_encode(array_values($reservations), JSON_PRETTY_PRINT));
    
        return response()->json(['message' => 'Reservation deleted successfully'], 200);
    }
}
