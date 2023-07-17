<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ContactUsSettings;

class ContactUsSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ContactUsSettings::create([
            'Type' => 'Email',
            'Value' => 'example@example.com',
            'lastUpdated' => now(),
        ]);

        ContactUsSettings::create([
            'Type' => 'Phone',
            'Value' => '1234567890',
            'lastUpdated' => now(),
        ]);


        // Add more ContactUsSetting data as needed

        // You can also use the following code to generate multiple ContactUsSetting records
        /*
        ContactUsSetting::factory()
            ->count(10)
            ->create();
        */
    }
}
