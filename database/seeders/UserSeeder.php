<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password',
            'profilePicture' => 'default.jpg',
            'birthDate' => '1990-01-01',
            'contactNumber' => '1234567890',
            'address' => '123 Street, City',
            'roleName' => 'Admin',
        ]);

        User::create([
            'name' => 'Johnny Weak',
            'email' => 'johnny@example.com',
            'password' => 'password',
            'profilePicture' => 'default.jpg',
            'birthDate' => '1990-01-01',
            'contactNumber' => '1234567890',
            'address' => '123 Street, City',
            'roleName' => 'Admin',
        ]);

        User::create([
            'name' => 'James Doe',
            'email' => 'james@example.com',
            'password' => 'password',
            'address' => '123 Street, City',
            'roleName' => 'Admin',
            'profilePicture' => 'sample.jpg',
            'birthDate' => '1990-01-01',
            'contactNumber' => '1234567890',
        ]);

        User::create([
            'name' => 'Jack Doe',
            'email' => 'jack@example.com',
            'password' => 'password',
            'address' => '123 Street, City',
            'roleName' => 'Admin',
            'profilePicture' => 'sample.jpg',
            'birthDate' => '1990-01-01',
            'contactNumber' => '1234567890',
        ]);


        // Add more user seeds if needed
    }
}
