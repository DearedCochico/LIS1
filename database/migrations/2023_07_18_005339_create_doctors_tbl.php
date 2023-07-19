<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorsTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctorsTbl', function (Blueprint $table) {
            $table->id('doctorID');
            $table->string('name');
            $table->string('email');
            $table->string('phoneNumber');
            $table->integer('departmentName');
            $table->integer('specializationName');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctorsTbl');
    }
}
