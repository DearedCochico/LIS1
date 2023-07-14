<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ContactUsSetting;

class ContactUsSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ContactUsSetting::create([
            'contacType' => 'Email',
            'contactValue' => 'example@example.com',
            'lastUpdated' => now(),
        ]);

        ContactUsSetting::create([
            'contacType' => 'Phone',
            'contactValue' => '1234567890',
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
