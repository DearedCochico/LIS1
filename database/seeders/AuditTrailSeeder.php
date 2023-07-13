<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AuditTrail;

class AuditTrailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Define your seeder logic here
        AuditTrail::create([
            'user' => 'John Doe',
            'department' => 'IT',
            'action' => 'Login',
            'timestamp' => now(),
        ]);

        AuditTrail::create([
            'user' => 'Jane Smith',
            'department' => 'HR',
            'action' => 'Logout',
            'timestamp' => now(),
        ]);

        AuditTrail::create([
            'user' => 'Josh Run',
            'department' => 'Planning',
            'action' => 'Login',
            'timestamp' => now(),
        ]);

        // Add more seed data as needed
    }
}
