<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    public function up()
    {
        Schema::create('payment_tbl', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('invoice_id'); // Adjusted column type
            $table->decimal('amount', 10, 2);
            $table->string('payment_method'); // Adjusted column type
            $table->date('date'); // Adjusted column type

            // Add foreign key constraint
            $table->foreign('invoice_id')->references('id')->on('invoice_tbl');

            // If you want to add timestamps (created_at and updated_at) to the table:
            // $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('payment_tbl');
    }
}
