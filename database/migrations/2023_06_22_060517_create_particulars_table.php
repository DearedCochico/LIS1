<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParticularsTable extends Migration
{
    public function up()
    {
        Schema::create('particulars', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->decimal('price', 8, 2)->nullable();
            // Add other necessary columns for actions, such as edit/delete timestamps or foreign keys
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('particulars');
    }
}
