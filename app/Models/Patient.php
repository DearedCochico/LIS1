<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $table = 'patientsTbl'; // Set the table name

    protected $primaryKey = 'patientID'; // Set the primary key column name

    protected $fillable = [
        'name',
        'email',
        'phoneNumber',
        'address',
        'dateOfBirth',
        'gender',
        'medicalHistory',
        // Add other fillable columns here
    ];

    // Add any relationships or additional methods relevant to the model

}
