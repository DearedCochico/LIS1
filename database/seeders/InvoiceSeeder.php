<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Patient;
use App\Models\Doctor;

class InvoiceSeeder extends Seeder
{
    public function run()
    {
        $faker = \Faker\Factory::create();

        $patients = Patient::pluck('id')->toArray();
        $doctors = Doctor::pluck('id')->toArray();

        for ($i = 1; $i <= 20; $i++) {
            DB::table('invoice_tbl')->insert([
                'patient_id' => $faker->randomElement($patients),
                'doctor_id' => $faker->randomElement($doctors),
                'totalAmount' => $faker->randomFloat(2, 50, 500),
                'date' => $faker->dateTimeBetween('-1 year', 'now'),
            ]);
        }
    }
}
