<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    public function up()
    {
        Schema::create('patientsTbl', function (Blueprint $table) {
            $table->increments('patientID');
            $table->string('name');
            $table->string('email');
            $table->string('phoneNumber');
            $table->text('address');
            $table->date('dateOfBirth');
            $table->enum('gender', ['Male', 'Female', 'Other']);
            $table->text('medicalHistory');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('patientsTbl');
    }
}
