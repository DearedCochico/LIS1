<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLabRequestsTable extends Migration
{
    public function up()
    {
        Schema::create('lab_request_tbl', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('particular_id');
            $table->date('request_date');
            $table->string('status');
            $table->string('requested_by');
            $table->date('sample_collection_date')->nullable();
            $table->string('sample_type')->nullable();
            $table->string('sample_details')->nullable();
            $table->boolean('results_available');
            $table->date('result_date')->nullable();
            $table->text('test_remarks')->nullable();

            // Add foreign key constraints
            $table->foreign('patient_id')->references('id')->on('patients_tbl');
            $table->foreign('particular_id')->references('id')->on('particulars_tbl');

            // If you want to add timestamps (created_at and updated_at) to the table:
            // $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('lab_request_tbl');
    }
}
