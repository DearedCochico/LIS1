<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function showSidebar()
    {
        $user = Auth::user();
        return Inertia::render('AdminSidebar', ['user' => $user]);
    }
}


