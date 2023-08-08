<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Particular;

class ParticularSeeder extends Seeder
{
    public function run()
    {
        // Create 10 sample Particulars
        for ($i = 1; $i <= 10; $i++) {
            Particular::create([
                'name' => 'Particular ' . $i,
                'description' => 'Description of Particular ' . $i,
                'price' => rand(50, 500), // Generate a random price between 50 and 500
            ]);
        }
    }
}
