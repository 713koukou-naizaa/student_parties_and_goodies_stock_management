<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PartiesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $partiesPath = storage_path('json/parties.json');
        return response()->json(json_decode(file_get_contents($partiesPath), true));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $partiesPath = storage_path('json/parties.json');
        $parties = json_decode(file_get_contents($partiesPath), true); // get current parties
    
        // add new party
        $newParty = $request->all();
        $newParty['id'] = count($parties) + 1;
        $parties[] = $newParty; // add new party to existing parties
    
        // save to JSON file
        file_put_contents($partiesPath, json_encode($parties, JSON_PRETTY_PRINT));
    
        return response()->json(['message' => 'Party added successfully'], 201);
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
        $partiesPath = storage_path('json/parties.json');
        $parties = json_decode(file_get_contents($partiesPath), true); // get current parties
    
        // update party
        // find the party to update by searching for id
        foreach ($parties as &$party) {
            if ($party['id'] == $id) {
                $party = array_merge($party, $request->all()); // merge new data with existing data
                break;
            }
        }
    
        // save to JSON file
        file_put_contents($partiesPath, json_encode($parties, JSON_PRETTY_PRINT));
    
        return response()->json(['message' => 'Party updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $partiesPath = storage_path('json/parties.json');
        $parties = json_decode(file_get_contents($partiesPath), true); // get current parties

        $reservationsPath = storage_path('json/reservations.json');
        $reservations = json_decode(file_get_contents($reservationsPath), true); // get current reservations

        // remove reservations
        // filter out the reservations to be deleted by searching for party name
        $reservations = array_filter($reservations, function ($reservation) use ($request) {
            return $reservation['party_name'] !== $request->party_name;
        });
    
        // remove party
        // filter out the party to be deleted by searching for party name
        $parties = array_filter($parties, function ($party) use ($request) {
            return $party['party_name'] !== $request->party_name;
        });
    
        // save to JSON file
        file_put_contents($reservationsPath, json_encode($reservations, JSON_PRETTY_PRINT));
        file_put_contents($partiesPath, json_encode(array_values($parties), JSON_PRETTY_PRINT));
    
        return response()->json(['message' => 'Party and associated reservations deleted successfully'], 200);
    }
}
