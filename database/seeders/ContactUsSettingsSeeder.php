<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ContactUsSettings;

class ContactUsSettingsSeeder extends Seeder
{
    public function run()
    {
        // Create sample Contact Us settings
        ContactUsSettings::create([
            'type' => 'Email',
            'value' => 'contact@example.com',
            'last_updated' => now(),
        ]);

        ContactUsSettings::create([
            'type' => 'Phone',
            'value' => '123-456-7890',
            'last_updated' => now(),
        ]);

        // Add more sample settings here if needed
    }
}
