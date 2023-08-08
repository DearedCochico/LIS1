<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $table = 'services_tbl';

    protected $primaryKey = 'id';

    public $timestamps = true; // Assuming there are 'created_at' and 'updated_at' columns

    protected $fillable = ['title', 'thumbnail', 'description'];

    // Other model properties, relationships, and methods can be defined here
}
