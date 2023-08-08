<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email')->unique();
        $table->string('password');
        $table->text('address');
        $table->string('profile_picture')->nullable();
        $table->date('birth_date');
        $table->string('contact_number');
        $table->unsignedBigInteger('role_id');
        $table->timestamps();

        $table->foreign('role_id')->references('id')->on('roles');
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
