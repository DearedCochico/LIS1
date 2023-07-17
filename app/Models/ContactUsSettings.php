<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactUsSettings extends Model
{
    protected $table = 'contactUsTbl';

    protected $primaryKey = 'id';

    protected $fillable = [
        'Type',
        'Value',
        'lastUpdated',
    ];

    public $timestamps = false;
}
