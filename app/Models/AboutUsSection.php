<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsSection extends Model
{
    protected $table = 'about_us_tbl';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', // Adjusted column name
        'content', // Adjusted column name
    ];

    public $timestamps = true; // Assuming there are 'created_at' and 'updated_at' columns

    // Other model properties, relationships, and methods can be defined here
}
