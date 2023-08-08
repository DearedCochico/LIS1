<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Role;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Define the roles 'Admin', 'Cashier', and 'Lab Tech' if not already defined
        $adminRole = Role::firstOrCreate(['name' => 'Admin']);
        $cashierRole = Role::firstOrCreate(['name' => 'Cashier']);
        $labTechRole = Role::firstOrCreate(['name' => 'Lab Tech']);

        // Create 10 users with random data
        for ($i = 1; $i <= 10; $i++) {
            User::create([
                'name' => 'User ' . $i,
                'email' => 'user' . $i . '@example.com',
                'password' => 'password', // Change 'password' to your desired default password
                'address' => 'Address ' . $i,
                'birth_date' => now()->subYears(rand(20, 50)),
                'contact_number' => '123456789' . $i,
                'role_id' => $i <= 3 ? $adminRole->id : ($i <= 6 ? $cashierRole->id : $labTechRole->id),
            ]);
        }
    }

    public function down()
    {
        // Delete the users created by the seeder
        User::where('email', 'like', 'user%@example.com')->delete();
    }

}
