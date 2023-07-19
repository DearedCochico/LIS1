<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $table = 'doctorsTbl';
    protected $primaryKey = 'doctorID';
    public $timestamps = true;

    protected $fillable = [
        'name',
        'email',
        'phoneNumber',
        'departmentName',
        'specializationName',
    ];

    // Define any additional attributes or relationships here
}
