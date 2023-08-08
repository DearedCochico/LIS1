<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $table = 'doctors_tbl';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'name',
        'email',
        'phone_number', // Adjusted column name
        'department_id', // Adjusted column name
        'specialization_id', // Adjusted column name
    ];

    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function specialization()
    {
        return $this->belongsTo(Specialization::class, 'specialization_id');
    }
}
