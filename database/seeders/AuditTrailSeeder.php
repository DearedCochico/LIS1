<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AuditTrail;
use Illuminate\Support\Facades\DB;

class AuditTrailSeeder extends Seeder
{
    public function run()
    {
        // Use DB::table for manual insertion and timestamps handling
        foreach (range(1, 10) as $i) {
            DB::table('audit_trail_tbl')->insert([
                'user' => 'User ' . $i,
                'department' => 'Department ' . $i,
                'action' => 'Action ' . $i,
                'timestamp' => now(),
                'details' => 'Details ' . $i,
            ]);
        }

        // Use Eloquent for manual insertion and timestamps handling
        foreach (range(11, 20) as $i) {
            AuditTrail::create([
                'user' => 'User ' . $i,
                'department' => 'Department ' . $i,
                'action' => 'Action ' . $i,
                'timestamp' => now(),
                'details' => 'Details ' . $i,
            ]);
        }
    }
}
