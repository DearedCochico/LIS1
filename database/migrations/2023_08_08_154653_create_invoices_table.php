<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    public function up()
    {
        Schema::create('invoice_tbl', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('patient_id'); // Adjusted column type
            $table->unsignedBigInteger('doctor_id'); // Adjusted column type
            $table->decimal('totalAmount', 10, 2);
            $table->date('date'); // Adjusted column type

            // Add foreign key constraints
            $table->foreign('patient_id')->references('id')->on('patients_tbl');
            $table->foreign('doctor_id')->references('id')->on('doctors_tbl');

            // If you want to add timestamps (created_at and updated_at) to the table:
            // $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('invoice_tbl');
    }
}
