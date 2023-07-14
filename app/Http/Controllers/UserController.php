<?php

namespace App\Http\Controllers;
use App\Models\User;

use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function index()
    {

        // Fetch the users with their associated role names
        // $users = DB::table('users')
        // ->join('roles', 'users.roleID', '=', 'roles.id')
        // ->select('users.*', 'roles.name as roleName')
        // ->get();

        // // Pass the users data to the frontend
        // return Inertia::render('UserManagement', [
        // 'users' => $users,
        // ]);


        $users = User::select('id', 'name', 'email', 'roleName', 'contactNumber', 'address', 'birthDate')->get();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'address' => 'required',
            'roleName' => 'required',
            'profilePicture' => 'required',
            'birthDate' => 'required|date',
            'contactNumber' => 'required',
        ]);

        // Create a new user
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'address' => $validatedData['address'],
            'roleName' => $validatedData['roleName'],
            'profilePicture' => $validatedData['profilePicture'],
            'birthDate' => $validatedData['birthDate'],
            'contactNumber' => $validatedData['contactNumber'],
        ]);

        // Return a response
        return response()->json($user, 201);
    }


    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            // 'password' => $request->input('password'),
            'address' => $request->input('address'),
            'roleName' => $request->input('roleName'),
            'profilePicture' => $request->input('profilePicture'),
            'birthDate' => $request->input('birthDate'),
            'contactNumber' => $request->input('contactNumber'),
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
