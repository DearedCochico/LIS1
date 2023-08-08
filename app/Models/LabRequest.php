<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LabRequest extends Model
{
    protected $table = 'lab_request_tbl';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'patient_id',
        'particular_id',
        'request_date',
        'status',
        'requested_by',
        'sample_collection_date',
        'sample_type',
        'sample_details',
        'results_available',
        'result_date',
        'test_remarks',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function particular()
    {
        return $this->belongsTo(Particular::class, 'particular_id');
    }

    // Method to check if the test results are available
    public function areResultsAvailable()
    {
        return $this->results_available === true;
    }

    // Method to get the name of the person who requested the lab test
    public function getRequestorName()
    {
        return $this->requested_by;
    }

}
