<?php

namespace App\Http\Controllers;

use App\Models\AuditTrail;

class AuditTrailController extends Controller
{
    public function index()
    {
        $auditTrails = AuditTrail::all(); // Renamed to $auditTrails for consistency
        return response()->json($auditTrails);
    }
}
