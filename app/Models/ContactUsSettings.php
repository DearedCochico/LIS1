<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactUsSettings extends Model
{
    protected $table = 'contact_us_tbl'; // Adjusted table name

    protected $primaryKey = 'id';

    protected $fillable = [
        'type', // Adjusted column name
        'value', // Adjusted column name
        'last_updated', // Adjusted column name
    ];

    public $timestamps = false;

    // Other model properties, relationships, and methods can be defined here
}
