<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $table = 'paymentTbl';
    protected $primaryKey = 'paymentID';
    public $timestamps = false;

    protected $fillable = [
        'invoiceID',
        'amount',
        'paymentMethod',
        'paymentDate',
    ];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'invoiceID');
    }
}
