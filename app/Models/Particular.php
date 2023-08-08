<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\LabRequest;
use App\Models\Invoice;

class Particular extends Model
{
    protected $table = 'particulars_tbl';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = ['name', 'description', 'price'];

    // Define the "belongs to" relationship with LabRequest
    public function labRequest()
    {
        return $this->belongsTo(LabRequest::class, 'particular_id');
    }

    // Define the "belongs to many" relationship with Invoice
    public function invoices()
    {
        return $this->belongsToMany(Invoice::class, 'invoice_particular', 'particular_id', 'invoice_id');
    }

    // Other methods or attributes can be defined here
}

