<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $table = 'patients_tbl'; // Set the table name

    protected $primaryKey = 'id'; // Set the primary key column name

    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'address',
        'date_of_birth', // Adjusted column name
        'gender',
        'medical_history',
        // Add other fillable columns here
    ];

        // Define the "has many" relationship with LabRequest
        public function labRequests()
        {
            return $this->hasMany(LabRequest::class, 'patient_id');
        }

        // Define the "has many" relationship with Invoice
        public function invoices()
        {
            return $this->hasMany(Invoice::class, 'patient_id');
        }

        // Define the "has many" relationship with Payment
        public function payments()
        {
            return $this->hasMany(Payment::class, 'patient_id');
        }
    
        // Other methods or attributes can be defined here

}
