<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\Patient;
use App\Models\Doctor;


class Invoice extends Model
{
    protected $table = 'invoiceTbl';
    protected $primaryKey = 'invoiceID';
    public $timestamps = false;

    protected $fillable = [
        'patientID',
        'doctorID',
        'totalAmount',
        'invoiceDate',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patientID');
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class, 'doctorID');
    }
}
