<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Particular;

class ParticularController extends Controller
{
    public function index()
    {
        $particulars = Particular::all();
        return response()->json($particulars);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            // Add validation rules for other fields
        ]);

        $particular = Particular::create($validatedData);
        return response()->json($particular, 201);
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
