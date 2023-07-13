<?php

namespace App\Http\Controllers;

use App\Models\AuditTrail;

class AuditTrailController extends Controller
{
    public function index()
    {
        $auditTrail = AuditTrail::all();
        return response()->json($auditTrail);
    }
}
