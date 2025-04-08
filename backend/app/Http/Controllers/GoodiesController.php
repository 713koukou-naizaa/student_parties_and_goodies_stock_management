<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GoodiesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $goodiesPath = storage_path('json/goodies.json');
        return response()->json(json_decode(file_get_contents($goodiesPath), true));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $goodiesPath = storage_path('json/goodies.json');
        $goodies = json_decode(file_get_contents($goodiesPath), true); // get existing goodies

        // add new goodie
        $newGoodie = $request->all(); // get data from request
        $newGoodie['id'] = count($goodies) + 1; // set id
        $goodies[] = $newGoodie; // add new goodie to existing goodies

        // save to JSON file
        file_put_contents($goodiesPath, json_encode($goodies, JSON_PRETTY_PRINT));

        return response()->json(['message' => 'Goodie added successfully'], 201);
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
    public function update(Request $request, $goodieName)
    {
        $goodiesPath = storage_path('json/goodies.json');
        $goodies = json_decode(file_get_contents($goodiesPath), true);
    
        // edit goodie
        // filter out the goodie to be edited by searching for goodie name
        foreach ($goodies as &$goodie) {
            if ($goodie['goodie_name'] === $goodieName) {
                $goodie['quantity_available'] = $request->quantity_available; // update quantity
                break;
            }
        }
    
        // save to JSON file
        file_put_contents($goodiesPath, json_encode($goodies, JSON_PRETTY_PRINT));
    
        return response()->json(['message' => 'Goodie quantity updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $goodiesPath = storage_path('json/goodies.json');
        $goodies = json_decode(file_get_contents($goodiesPath), true); // get existing goodies

        // remove goodie
        // filter out the goodie to be deleted by searching for goodie name
        $goodies = array_filter($goodies, function ($goodie) use ($request) {
            return $goodie['goodie_name'] !== $request->goodie_name;
        });

        // Save to JSON file
        file_put_contents($goodiesPath, json_encode(array_values($goodies), JSON_PRETTY_PRINT));

        return response()->json(['message' => 'Goodie deleted successfully'], 200);
    }
}
