<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Particular extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'price'];

    public $edit;
    public $delete;

    // Other model properties, relationships, and methods can be defined here
}
