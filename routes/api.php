<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuditTrailController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ParticularController;
use App\Http\Controllers\NewsSettingController;
use App\Http\Controllers\ContactUsSettingsController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\AboutUsSectionController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\LabRequestController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SpecializationController;


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

Route::apiResource('/about-us-sections', AboutUsSectionController::class);

Route::get('/about-us-sections', [AboutUsSectionController::class, 'index']);
Route::post('/about-us-sections', [AboutUsSectionController::class, 'store']);
Route::put('/about-us-sections/{id}', [AboutUsSectionController::class, 'update']);
Route::delete('/about-us-sections/{id}', [AboutUsSectionController::class, 'destroy']);

Route::get('/departments', [DepartmentController::class, 'index']);
Route::post('/departments', [DepartmentController::class, 'store']);
Route::put('/departments/{id}', [DepartmentController::class, 'update']);
Route::delete('/departments/{id}', [DepartmentController::class, 'destroy']);


Route::get('/doctors', [DoctorController::class, 'index']);
Route::post('/doctors', [DoctorController::class, 'store']);
Route::put('/doctors/{id}', [DoctorController::class, 'update']);
Route::delete('/doctors/{id}', [DoctorController::class, 'destroy']);

Route::get('/invoices', [InvoiceController::class, 'index']);
Route::post('/invoices', [InvoiceController::class, 'store']);
Route::put('/invoices/{id}', [InvoiceController::class, 'update']);
Route::delete('/invoices/{id}', [InvoiceController::class, 'destroy']);

Route::get('/lab-requests', [LabRequestController::class, 'index']);
Route::post('/lab-requests', [LabRequestController::class, 'store']);
Route::put('/lab-requests/{id}', [LabRequestController::class, 'update']);
Route::delete('/lab-requests/{id}', [LabRequestController::class, 'destroy']);

Route::get('/patients', [PatientController::class, 'index']);
Route::post('/patients', [PatientController::class, 'store']);
Route::put('/patients/{id}', [PatientController::class, 'update']);
Route::delete('/patients/{id}', [PatientController::class, 'destroy']);

Route::get('/payments', [PaymentController::class, 'index']);
Route::post('/payments', [PaymentController::class, 'store']);
Route::put('/payments/{id}', [PaymentController::class, 'update']);
Route::delete('/payments/{id}', [PaymentController::class, 'destroy']);

Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'store']);
Route::put('/roles/{id}', [RoleController::class, 'update']);
Route::delete('/roles/{id}', [RoleController::class, 'destroy']);

Route::get('/specializations', [SpecializationController::class, 'index']);
Route::post('/specializations', [SpecializationController::class, 'store']);
Route::put('/specializations/{id}', [SpecializationController::class, 'update']);
Route::delete('/specializations/{id}', [SpecializationController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
