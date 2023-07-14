<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuditTrailController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ParticularController;
use App\Http\Controllers\NewsSettingController;
use App\Http\Controllers\ContactUsSettingsController;
use App\Http\Controllers\ServiceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/audit-trail-logs', [AuditTrailController::class, 'index']);

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}/update', [UserController::class, 'update']); // Updated route URI
Route::delete('/users/{id}', [UserController::class, 'destroy']);

Route::get('/particulars', [ParticularController::class, 'index']);
Route::post('/particulars', [ParticularController::class, 'store']);
Route::get('/particulars/{id}', [ParticularController::class, 'show']);
Route::put('/particulars/{id}', [ParticularController::class, 'update']);
Route::delete('/particulars/{id}', [ParticularController::class, 'destroy']);

Route::get('/news-settings', [NewsSettingController::class, 'index']); // Fetch all news settings
Route::post('/news-settings', [NewsSettingController::class, 'store']); // Create a news setting
Route::get('/news-settings/{id}', [NewsSettingController::class, 'show']); // Fetch a specific news setting
Route::put('/news-settings/{id}', [NewsSettingController::class, 'update']); // Update a news setting
Route::delete('/news-settings/{id}', [NewsSettingController::class, 'destroy']); // Delete a news setting

Route::apiResource('contact-us-settings', ContactUsSettingsController::class);

Route::get('/services', [ServiceController::class, 'index']); // Fetch all services
Route::post('/services', [ServiceController::class, 'store']); // Create a service
Route::get('/services/{id}', [ServiceController::class, 'show']); // Fetch a specific service
Route::put('/services/{id}', [ServiceController::class, 'update']); // Update a service
Route::delete('/services/{id}', [ServiceController::class, 'destroy']); // Delete a service

Route::get('/contacts', [ContactUsSettingsController::class, 'index']);
Route::post('/contacts', [ContactUsSettingsController::class, 'store']);
Route::put('/contacts/{id}', [ContactUsSettingsController::class, 'update']);
Route::delete('/contacts/{id}', [ContactUsSettingsController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
