<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    /**
     * Run the seeder.
     *
     * @return void
     */
    public function run()
    {
        // Define the services to be created
        $services = [
            [
                'title' => 'Service 1',
                'description' => 'This is service 1 description.',
            ],
            [
                'title' => 'Service 2',
                'description' => 'This is service 2 description.',
            ],
            // Add more services as needed
        ];

        // Create the services
        foreach ($services as $serviceData) {
            Service::create($serviceData);
        }
    }
}
