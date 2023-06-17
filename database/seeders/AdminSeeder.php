<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'profilePicture' => '',
            'birthDate' => '2000-01-01',
            'contactNumber' => '09564545210',
            'address' => 'Dhaka',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'roleID' => '1',
            'lastUpdatedAt' => now(),
        ]);
    }
}

