<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewsSetting;

class NewsSettingController extends Controller
{
    public function index()
    {
        $newsSettings = NewsSetting::all();
        return response()->json($newsSettings);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'thumbnail' => 'required',
            'content' => 'required',
            'publish_date' => 'required|date',
            // Add validation rules for other fields
        ]);

        $newsSetting = NewsSetting::create($validatedData);
        return response()->json($newsSetting, 201);
    }

    public function update(Request $request, $id)
    {
        $newsSetting = NewsSetting::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required',
            'thumbnail' => 'required',
            'content' => 'required',
            'publish_date' => 'required|date',
            // Add validation rules for other fields
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
