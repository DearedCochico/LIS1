<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpecializationsTable extends Migration
{
    public function up()
    {
        Schema::create('specializations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // Add any additional columns here

            // If you want to add timestamps (created_at and updated_at) to the table:
            // $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('specializations');
    }
}
