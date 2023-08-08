<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Doctor;
use App\Models\Department;
use App\Models\Specialization;
use Faker\Factory as Faker;

class DoctorSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Create 10 doctors
        for ($i = 1; $i <= 10; $i++) {
            Doctor::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'phone_number' => $faker->phoneNumber,
                'department_id' => Department::inRandomOrder()->first()->id,
                'specialization_id' => Specialization::inRandomOrder()->first()->id,
            ]);
        }
    }
}
