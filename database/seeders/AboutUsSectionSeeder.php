<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AboutUsSection;

class AboutUsSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $aboutUsSections = [
            [
                'sectionTitle' => 'Our Mission',
                'sectionContent' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ],
            [
                'sectionTitle' => 'Our Vision',
                'sectionContent' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ],
            // Add more sections as needed
        ];

        // Loop through the sections array and create records
        foreach ($aboutUsSections as $section) {
            AboutUsSection::create($section);
        }
    }
}
