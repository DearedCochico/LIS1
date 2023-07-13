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
        $contacts = [
            [
                'name' => 'John Wick',
                'email' => 'john@example.com',
                'phone' => '09934421452',
            ],
            [
                'name' => 'Jane Mary',
                'email' => 'jane@example.com',
                'phone' => '099424432113',
            ],
            // Add more contacts as needed
        ];

        foreach ($contacts as $contact) {
            ContactUsSettings::create($contact);
        }
    }
}
