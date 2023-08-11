<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return response()->json($services);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'thumbnail' => 'required',
            'description' => 'required',
        ]);

        $service = Service::create($validatedData);
        return response()->json($service, 201);
    }

    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required',
            'thumbnail' => 'required',
            'description' => 'required',
        ]);

        $service->update($validatedData);

        return response()->json($service);
    }

    public function destroy($id)
    {
        $service = Service::findOrFail($id);
        $service->delete();

        return response()->json(null, 204);
    }
}
