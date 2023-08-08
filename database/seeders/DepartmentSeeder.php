<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Department;

class DepartmentSeeder extends Seeder
{
    public function run()
    {
        // Create 10 departments
        for ($i = 1; $i <= 10; $i++) {
            Department::create([
                'name' => "Department $i",
                'description' => "Description for Department $i",
            ]);
        }
    }
}
