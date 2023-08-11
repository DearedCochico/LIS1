<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;

class PaymentController extends Controller
{
    public function index()
    {
        $payments = Payment::all();
        return response()->json($payments);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'invoice_id' => 'required', // Adjusted field name
            'amount' => 'required|numeric',
            'payment_method' => 'required', // Adjusted field name
            'date' => 'required|date', // Adjusted field name
            // Add validation rules for other fields
        ]);

        $payment = Payment::create($validatedData);
        return response()->json($payment, 201);
    }

    public function update(Request $request, $id)
    {
        $payment = Payment::findOrFail($id);

        $validatedData = $request->validate([
            'invoice_id' => 'required', // Adjusted field name
            'amount' => 'required|numeric',
            'payment_method' => 'required', // Adjusted field name
            'date' => 'required|date', // Adjusted field name
            // Add validation rules for other fields
        ]);

        $payment->update($validatedData);

        return response()->json($payment);
    }

    public function destroy($id)
    {
        $payment = Payment::findOrFail($id);
        $payment->delete();

        return response()->json(null, 204);
    }
}
