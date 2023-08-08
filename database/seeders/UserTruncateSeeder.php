<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserTruncateSeeder extends Seeder
{
    public function run()
    {
        // Delete all records from the users table
        User::truncate();
    }
}
