<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Patient;
use App\Models\Doctor;

class Invoice extends Model
{
    protected $table = 'invoice_tbl';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'patient_id', // Adjusted column name
        'doctor_id', // Adjusted column name
        'totalAmount',
        'date', // Adjusted column name
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class, 'doctor_id');
    }
}
