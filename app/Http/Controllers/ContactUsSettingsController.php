<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactUsSettings;

class ContactUsSettingsController extends Controller
{
    /**
     * Display a listing of the contact us settings.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contactUsSettings = ContactUsSettings::all();
        return response()->json($contactUsSettings);
    }

    /**
     * Show the form for creating a new contact us setting.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('contact-us-settings.create');
    }

    /**
     * Store a newly created contact us setting in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
        ]);

            $contactUsSettings = ContactUsSettings::create($validatedData);
            return response()->json($contactUsSettings, 201);
        } catch (\Exception $e) {
            Log::error('Error storing contact: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to store contact'], 500);
        }
        // } catch (\Exception $e) {
        //     Log::error('Error storing particular: ' . $e->getMessage());
        //     return response()->json(['error' => 'Failed to store particular'], 500);
        // }

        // ContactUsSettings::create($validatedData);

        // return redirect()->route('contact-us-settings.index')
            // ->with('success', 'Contact Us Setting created successfully.');
    }

    public function show($id)
    {
        $contactUsSettings = ContactUsSettings::findOrFail($id);
        return response()->json($contactUsSettings);
    }

    /**
     * Show the form for editing the specified contact us setting.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $contactUsSettings = ContactUsSettings::findOrFail($id);
        return view('contact-us-settings.edit', compact('contactUsSetting'));
    }

    /**
     * Update the specified contact us setting in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $contactUsSettings = ContactUsSettings::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            // Add validation rules for other fields
        ]);

        $contactUsSettings->update($validatedData);

        return response()->json($contactUsSettings);
//
        // $validatedData = $request->validate([
        //     'name' => 'required',
        //     'email' => 'required|email',
        //     'phone' => 'required',
        // ]);

        // $contactUsSetting = ContactUsSettings::findOrFail($id);
        // $contactUsSetting->update($validatedData);

        // return redirect()->route('contact-us-settings.index')
        //     ->with('success', 'Contact Us Setting updated successfully.');
    }

    /**
     * Remove the specified contact us setting from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $ontactUsSetting = ContactUsSettings::findOrFail($id);
        $ontactUsSetting->delete();
        return response()->json(null, 204);

        // $contactUsSetting = ContactUsSettings::findOrFail($id);
        // $contactUsSetting->delete();

        // return redirect()->route('contact-us-settings.index')
        //     ->with('success', 'Contact Us Setting deleted successfully.');
    }
}

