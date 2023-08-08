<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorsTable extends Migration
{
    public function up()
    {
        Schema::create('doctors_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->nullable();
            $table->string('phone_number')->nullable();
            $table->unsignedBigInteger('department_id');
            $table->unsignedBigInteger('specialization_id');
            $table->timestamps();

            $table->foreign('department_id')->references('id')->on('department_tbl');
            $table->foreign('specialization_id')->references('id')->on('specialization_tbl');
        });
    }

    public function down()
    {
        Schema::dropIfExists('doctors_tbl');
    }
}
