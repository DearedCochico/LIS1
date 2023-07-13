<?php

namespace App\Http\Controllers;

use App\Models\Particular;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ParticularController extends Controller
{
    public function index()
    {
        $particulars = Particular::all();
        return response()->json($particulars);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required',
                'description' => 'required',
                'price' => 'required|numeric',
                // Add validation rules for other fields
            ]);

            $particular = Particular::create($validatedData);
            return response()->json($particular, 201);
        } catch (\Exception $e) {
            Log::error('Error storing particular: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to store particular'], 500);
        }
    }

    public function show($id)
    {
        $particular = Particular::findOrFail($id);
        return response()->json($particular);
    }

    public function update(Request $request, $id)
    {
        $particular = Particular::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            // Add validation rules for other fields
        ]);

        $particular->update($validatedData);

        return response()->json($particular);
    }

    public function destroy($id)
    {
        $particular = Particular::findOrFail($id);
        $particular->delete();
        return response()->json(null, 204);
    }
}
