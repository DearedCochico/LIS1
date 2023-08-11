<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Specialization;

class SpecializationController extends Controller
{
    public function index()
    {
        $specializations = Specialization::all();
        return response()->json($specializations);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
        ]);

        $specialization = Specialization::create($validatedData);
        return response()->json($specialization, 201);
    }

    public function update(Request $request, $id)
    {
        $specialization = Specialization::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required',
        ]);

        $specialization->update($validatedData);

        return response()->json($specialization);
    }

    public function destroy($id)
    {
        $specialization = Specialization::findOrFail($id);
        $specialization->delete();

        return response()->json(null, 204);
    }
}
