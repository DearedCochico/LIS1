<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AboutUsSection;

class AboutUsSectionController extends Controller
{
    /**
     * Display a listing of the about us sections.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $aboutUsSections = AboutUsSection::all();
        return response()->json($aboutUsSections);
    }

    /**
     * Store a newly created about us section in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $aboutUsSection = AboutUsSection::create($validatedData);
        return response()->json($aboutUsSection, 201);
    }

    /**
     * Display the specified about us section.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $aboutUsSection = AboutUsSection::findOrFail($id);
        return response()->json($aboutUsSection);
    }

    /**
     * Update the specified about us section in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $aboutUsSection = AboutUsSection::findOrFail($id);
        $aboutUsSection->update($validatedData);

        return response()->json($aboutUsSection);
    }

    /**
     * Remove the specified about us section from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $aboutUsSection = AboutUsSection::findOrFail($id);
        $aboutUsSection->delete();

        return response()->json(null, 204);
    }
}
