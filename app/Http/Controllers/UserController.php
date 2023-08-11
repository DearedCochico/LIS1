<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('role:id,name')->select('id', 'name', 'email', 'role_id', 'contact_number', 'address', 'birth_date')->get();
        return Inertia::render('UserManagement', [
            'users' => $users,
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'address' => 'required',
            'role_id' => 'required|exists:roles,id',
            'profile_picture' => 'required',
            'birth_date' => 'required|date',
            'contact_number' => 'required',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => $validatedData['password'],
            'address' => $validatedData['address'],
            'role_id' => $validatedData['role_id'],
            'profile_picture' => $validatedData['profile_picture'],
            'birth_date' => $validatedData['birth_date'],
            'contact_number' => $validatedData['contact_number'],
        ]);

        return response()->json($user, 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'address' => 'required',
            'role_id' => 'required|exists:roles,id',
            'profile_picture' => 'required',
            'birth_date' => 'required|date',
            'contact_number' => 'required',
        ]);

        $user->update([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'address' => $validatedData['address'],
            'role_id' => $validatedData['role_id'],
            'profile_picture' => $validatedData['profile_picture'],
            'birth_date' => $validatedData['birth_date'],
            'contact_number' => $validatedData['contact_number'],
        ]);

        return response()->json($user);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(null, 204);
    }
}
