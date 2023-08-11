<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;

class PatientController extends Controller
{
    public function index()
    {
        $patients = Patient::all();
        return response()->json($patients);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone_number' => 'required',
            'address' => 'required',
            'date_of_birth' => 'required|date',
            'gender' => 'required',
            'medical_history' => 'nullable',
            // Add validation rules for other fields
        ]);

        $patient = Patient::create($validatedData);
        return response()->json($patient, 201);
    }

    public function update(Request $request, $id)
    {
        $patient = Patient::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone_number' => 'required',
            'address' => 'required',
            'date_of_birth' => 'required|date',
            'gender' => 'required',
            'medical_history' => 'nullable',
            // Add validation rules for other fields
        ]);

        $patient->update($validatedData);

        return response()->json($patient);
    }

    public function destroy($id)
    {
        $patient = Patient::findOrFail($id);
        $patient->delete();

        return response()->json(null, 204);
    }
}
