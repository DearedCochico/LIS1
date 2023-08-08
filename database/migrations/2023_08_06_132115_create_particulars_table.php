<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParticularsTable extends Migration
{
    public function up()
    {
        Schema::create('particulars_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2);
            // Add any other columns you need

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('particulars_tbl');
    }
}
