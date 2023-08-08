<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $table = 'payment_tbl';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'invoice_id', // Adjusted column name
        'amount',
        'payment_method', // Adjusted column name
        'date', // Adjusted column name
    ];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'invoice_id');
    }
}