<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactUsSetting extends Model
{
    protected $table = 'contactUsTbl';

    protected $primaryKey = 'contactID';

    protected $fillable = [
        'contacType',
        'contactValue',
        'lastUpdated',
    ];

    public $timestamps = false;
}
