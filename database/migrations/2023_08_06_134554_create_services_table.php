<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    public function up()
    {
        Schema::create('services_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('thumbnail')->nullable();
            $table->text('description');
            $table->timestamps(); // Adds created_at and updated_at columns

            // If you want to add a soft delete column (deleted_at)
            // $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('services_tbl');
    }
}
