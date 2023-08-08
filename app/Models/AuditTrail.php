<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AuditTrail extends Model
{
    protected $table = 'audit_trail_tbl';

    protected $fillable = [
        'user', // Adjusted column name
        'department', // Adjusted column name
        'action',
        'timestamp',
        'details', // Adjusted column name
    ];

    protected $primaryKey = 'id'; // Adjusted primary key

    public $timestamps = false; // Assuming there are no 'created_at' and 'updated_at' columns
}