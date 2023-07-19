<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentTable extends Migration
{
    public function up()
    {
        Schema::create('paymentTbl', function (Blueprint $table) {
            $table->integer('paymentID')->unsigned()->primary();
            $table->integer('invoiceID')->unsigned();
            $table->decimal('amount', 8, 2);
            $table->string('paymentMethod', 50);
            $table->date('paymentDate');

            $table->foreign('invoiceID')->references('invoiceID')->on('invoiceTbl');

            // Add any other necessary columns or constraints here

            // Add timestamp columns if needed
            // $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('paymentTbl');
    }
}

