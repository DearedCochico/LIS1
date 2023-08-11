<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctor;

class DoctorController extends Controller
{
    public function index()
    {
        $doctors = Doctor::all();
        return response()->json($doctors);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone_number' => 'required',
            'department_id' => 'required|exists:departments,id',
            'specialization_id' => 'required|exists:specializations,id',
            // Add validation rules for other fields
        ]);

        $doctor = Doctor::create($validatedData);
        return response()->json($doctor, 201);
    }

    public function update(Request $request, $id)
    {
        $doctor = Doctor::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone_number' => 'required',
            'department_id' => 'required|exists:departments,id',
            'specialization_id' => 'required|exists:specializations,id',
            // Add validation rules for other fields
        ]);

        $doctor->update($validatedData);

        return response()->json($doctor);
    }

    public function destroy($id)
    {
        $doctor = Doctor::findOrFail($id);
        $doctor->delete();

        return response()->json(null, 204);
    }
}
