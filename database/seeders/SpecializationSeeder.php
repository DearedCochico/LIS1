<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Specialization;

class SpecializationSeeder extends Seeder
{
    public function run()
    {
        // Define specializations data
        $specializations = [
            ['name' => 'Cardiology'],
            ['name' => 'Dermatology'],
            ['name' => 'Neurology'],
            ['name' => 'Pediatrics'],
            ['name' => 'Orthopedics'],
            ['name' => 'Gynecology'],
            ['name' => 'Ophthalmology'],
            ['name' => 'Oncology'],
            ['name' => 'Urology'],
            ['name' => 'Nephrology'],
            ['name' => 'Psychiatry'],
            ['name' => 'Gastroenterology'],
            ['name' => 'Pulmonology'],
            ['name' => 'Endocrinology'],
            ['name' => 'Rheumatology'],
            ['name' => 'Hermatology'],
            ['name' => 'Infectious Diseases'],
            ['name' => 'Anesthesiology'],
            ['name' => 'Radiology'],
            ['name' => 'General Surgery'],
            // Add more specializations here
        ];

        // Insert specializations into the database
        Specialization::insert($specializations);
    }
}
