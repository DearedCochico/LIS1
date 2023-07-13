<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsSetting extends Model
{
    use HasFactory;

    protected $table = 'news_settings';

    protected $fillable = ['title', 'content', 'publish_date'];
}
