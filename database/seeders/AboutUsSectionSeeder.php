<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AboutUsSection;

class AboutUsSectionSeeder extends Seeder
{
    public function run()
    {
        // Create a sample About Us section
        AboutUsSection::create([
            'title' => 'Our Story',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo ut tellus rhoncus varius. Vestibulum nec diam sit amet nisl laoreet volutpat.',
        ]);
    }
}
