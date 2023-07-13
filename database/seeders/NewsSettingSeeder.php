<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\NewsSetting;

class NewsSettingSeeder extends Seeder
{
    public function run()
    {
        // Define the seed data for news settings
        $newsSettings = [
            [
                'title' => 'Sample News 1',
                'content' => 'This is the content of Sample News 1.',
                'publish_date' => '2023-06-10',
            ],
            [
                'title' => 'Sample News 2',
                'content' => 'This is the content of Sample News 2.',
                'publish_date' => '2023-06-11',
            ],
            // Add more seed data if needed
        ];

        // Insert the seed data into the database
        foreach ($newsSettings as $newsSetting) {
            NewsSetting::create($newsSetting);
        }
    }
}
