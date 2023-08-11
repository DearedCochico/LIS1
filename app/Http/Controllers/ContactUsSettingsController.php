<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactUsSettings;
use Illuminate\Support\Facades\Log;

class ContactUsSettingsController extends Controller
{
    public function index()
    {
        $contactUsSettings = ContactUsSettings::all();
        return response()->json($contactUsSettings);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'type' => 'required', // Adjusted column name to lowercase
                'value' => 'required', // Adjusted column name to lowercase
            ]);

            $validatedData['last_updated'] = now(); // Use Laravel's now() function

            $contactUsSettings = ContactUsSettings::create($validatedData);
            return response()->json($contactUsSettings, 201);
        } catch (\Exception $e) {
            Log::error('Error storing contact: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to store contact'], 500);
        }
    }

    public function show($id)
    {
        $contactUsSetting = ContactUsSettings::findOrFail($id);
        return response()->json($contactUsSetting);
    }

    public function update(Request $request, $id)
    {
        $contactUsSetting = ContactUsSettings::findOrFail($id);

        $validatedData = $request->validate([
            'type' => 'required', // Adjusted column name to lowercase
            'value' => 'required', // Adjusted column name to lowercase
            // Add validation rules for other fields
        ]);

        $validatedData['last_updated'] = now(); // Use Laravel's now() function

        $contactUsSetting->update($validatedData);

        return response()->json($contactUsSetting);
    }

    public function destroy($id)
    {
        $contactUsSetting = ContactUsSettings::findOrFail($id);
        $contactUsSetting->delete();

        return response()->json(null, 204);
    }
}
