<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Retrieve the list of users
Route::get('/users', [UserController::class, 'index']);
// Add a user
Route::post('/users', 'UserController@store');

Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);


// Route::get('/users', [UserController::class, 'index'])->name('users.index');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// admin


// Route::inertia('/user-management', 'UserManagement', [

//   ]);


Route::get('/admin-dashboard', function () {
    return Inertia::render('AdminDashboard');
})->middleware(['auth', 'verified', 'isAdmin'])->name('admin-dashboard');

Route::get('/user-management', function () {
    return Inertia::render('UserManagementPage');
})->middleware(['auth', 'verified', 'isAdmin'])->name('user-management');

Route::get('/audit-trail', function () {
    return Inertia::render('AuditTrailPage');
})->middleware(['auth', 'verified', 'isAdmin'])->name('audit-trail');

Route::get('/particular-management', function () {
    return Inertia::render('ParticularManagementPage');
})->middleware(['auth', 'verified', 'isAdmin'])->name('particular-management');

Route::get('/news-settings', function () {
    return Inertia::render('NewsSettingsPage');
})->middleware(['auth', 'verified', 'isAdmin'])->name('news-settings');

Route::get('/services-settings', function () {
    return Inertia::render('ServicesSettingsPage');
})->middleware(['auth', 'verified', 'isAdmin'])->name('services-settings');

Route::get('/contact-settings', function () {
    return Inertia::render('ContactUsSettings');
})->middleware(['auth', 'verified', 'isAdmin'])->name('contact-settings');

Route::get('/about-settings', function () {
    return Inertia::render('AboutUsSettings');
})->middleware(['auth', 'verified', 'isAdmin'])->name('about-settings');

Route::get('/cashier-user', function () {
    return Inertia::render('cashierUserManagement');
})->middleware(['auth', 'verified', 'isAdmin'])->name('cashier-user');

Route::get('/lab-technician-user', function () {
    return Inertia::render('labTechnicianUserManagement');
})->middleware(['auth', 'verified', 'isAdmin'])->name('lab-technician-user');

// cashier
Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/cashier-dashboard', function () {
    return Inertia::render('CashierDashboard');
})->middleware(['auth', 'verified', 'isCashier'])->name('cashier-dashboard');

// others
// Route::middleware(['auth'])->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


// Route::prefix('admin')->middleware(['auth', 'isAdmin'])->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });




require __DIR__.'/auth.php';
