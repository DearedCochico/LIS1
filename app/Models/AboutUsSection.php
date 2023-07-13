<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsSection extends Model
{
    protected $table = 'about_us_sections';

    protected $fillable = [
        'sectionTitle',
        'sectionContent',
    ];
}
