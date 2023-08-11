<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LabRequest;

class LabRequestController extends Controller
{
    public function index()
    {
        $labRequests = LabRequest::all();
        return response()->json($labRequests);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'particular_id' => 'required|exists:particulars,id',
            'request_date' => 'required|date',
            'status' => 'required',
            'requested_by' => 'required',
            // Add validation rules for other fields
        ]);

        $labRequest = LabRequest::create($validatedData);
        return response()->json($labRequest, 201);
    }

    public function update(Request $request, $id)
    {
        $labRequest = LabRequest::findOrFail($id);

        $validatedData = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'particular_id' => 'required|exists:particulars,id',
            'request_date' => 'required|date',
            'status' => 'required',
            'requested_by' => 'required',
            // Add validation rules for other fields
        ]);

        $labRequest->update($validatedData);

        return response()->json($labRequest);
    }

    public function destroy($id)
    {
        $labRequest = LabRequest::findOrFail($id);
        $labRequest->delete();

        return response()->json(null, 204);
    }
}
