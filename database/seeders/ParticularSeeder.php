<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Particular;

class ParticularSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Particular::create([
            'name' => 'Particular 1',
            'description' => 'This is the first particular.',
            'price' => 10.99,
        ]);

        Particular::create([
            'name' => 'Particular 2',
            'description' => 'This is the second particular.',
            'price' => 19.99,
        ]);

        // Add more particular seeds if needed
    }
}
