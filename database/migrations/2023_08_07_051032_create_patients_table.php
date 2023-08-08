<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    public function up()
    {
        Schema::create('patients_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('address')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('gender')->nullable();
            $table->text('medical_history')->nullable();
            // Add other columns as needed

            // If you want to add timestamps (created_at and updated_at) to the table:
            // $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('patients_tbl');
    }
}
