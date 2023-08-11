<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;

class InvoiceController extends Controller
{
    public function index()
    {
        $invoices = Invoice::all();
        return response()->json($invoices);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id',
            'totalAmount' => 'required',
            'date' => 'required|date',
            // Add validation rules for other fields
        ]);

        $invoice = Invoice::create($validatedData);
        return response()->json($invoice, 201);
    }

    public function update(Request $request, $id)
    {
        $invoice = Invoice::findOrFail($id);

        $validatedData = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id',
            'totalAmount' => 'required',
            'date' => 'required|date',
            // Add validation rules for other fields
        ]);

        $invoice->update($validatedData);

        return response()->json($invoice);
    }

    public function destroy($id)
    {
        $invoice = Invoice::findOrFail($id);
        $invoice->delete();

        return response()->json(null, 204);
    }
}
