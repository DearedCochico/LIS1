<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactUsTable extends Migration
{
    public function up()
    {
        Schema::create('contact_us_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('value');
            $table->timestamp('last_updated'); // Assuming you want a timestamp for last_updated

            // If you want to add a datetime for last_updated, use the following line instead
            // $table->datetime('last_updated');

            // If you want to add a soft delete column (deleted_at)
            // $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('contact_us_tbl');
    }
}
