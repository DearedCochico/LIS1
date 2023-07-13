<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewsSetting;
use Illuminate\Support\Facades\Log;

class NewsSettingController extends Controller
{
    public function index()
    {
        $newsSettings = NewsSetting::all();
        return response()->json($newsSettings);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required',
                'content' => 'required',
                'publish_date' => 'required|date',
                // Add validation rules for other fields if needed
            ]);

            $newsSetting = NewsSetting::create($validatedData);
            return response()->json($newsSetting, 201);
        } catch (\Exception $e) {
            Log::error('Error storing news setting: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to store news setting'], 500);
        }

    }

    public function show($id)
    {
        $newsSetting = NewsSetting::findOrFail($id);
        return response()->json($newsSetting);
    }

    public function update(Request $request, $id)
    {
        $newsSetting = NewsSetting::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'publish_date' => 'required|date',
            // Add validation rules for other fields if needed
        ]);

        $newsSetting->update($validatedData);

        return response()->json($newsSetting);
    }

    public function destroy($id)
    {
        $newsSetting = NewsSetting::findOrFail($id);
        $newsSetting->delete();
        return response()->json(null, 204);
    }
}
