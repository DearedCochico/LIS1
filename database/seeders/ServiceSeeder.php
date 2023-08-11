<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($i = 1; $i <= 20; $i++) {
            DB::table('services_tbl')->insert([
                'title' => $faker->sentence(3),
                'thumbnail' => 'service_thumbnail_'.$i.'.jpg', // Assuming you have thumbnail images
                'description' => $faker->paragraph(3),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
