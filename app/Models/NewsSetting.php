<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NewsSetting extends Model
{
    protected $table = 'news_settings_tbl';

    protected $primaryKey = 'id';

    public $timestamps = false; // Assuming there are no 'created_at' and 'updated_at' columns

    protected $fillable = ['title', 'thumbnail', 'content', 'publish_date'];

    // Other model properties, relationships, and methods can be defined here
}
