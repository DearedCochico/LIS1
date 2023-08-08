<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\NewsSetting;
use Faker\Factory as Faker;

class NewsSettingSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Create 20 sample News Settings
        for ($i = 0; $i < 20; $i++) {
            NewsSetting::create([
                'title' => $faker->sentence,
                'thumbnail' => 'thumbnail-' . ($i + 1) . '.jpg',
                'content' => $faker->paragraphs(3, true),
                'publish_date' => $faker->dateTimeBetween('-1 year', 'now'),
            ]);
        }
    }
}
