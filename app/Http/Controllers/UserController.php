<?php

namespace App\Http\Controllers;
use App\Models\User;

use Inertia\Inertia;

use Illuminate\Http\Request;

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


        $users = User::select('id', 'name', 'email', 'roleName', 'contactNumber')->get();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Create a new user
        $user = User::create($validatedData);

        // Return a response, such as JSON or a redirect
        return response()->json($user);
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            // Assign other fields as needed
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
