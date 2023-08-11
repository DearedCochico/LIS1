<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::all();
        return response()->json($departments);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $department = Department::create($validatedData);
        return response()->json($department, 201);
    }

    public function update(Request $request, $id)
    {
        $department = Department::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            // Add validation rules for other fields
        ]);

        $department->update($validatedData);

        return response()->json($department);
    }

    public function destroy($id)
    {
        $department = Department::findOrFail($id);
        $department->delete();

        return response()->json(null, 204);
    }
}
