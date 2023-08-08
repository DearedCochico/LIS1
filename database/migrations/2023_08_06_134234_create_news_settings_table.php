<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsSettingsTable extends Migration
{
    public function up()
    {
        Schema::create('news_settings_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('thumbnail')->nullable();
            $table->text('content');
            $table->date('publish_date');
            // Add any other columns you need

            // If you want to add created_at and updated_at columns
            // $table->timestamps();

            // If you want to add a soft delete column (deleted_at)
            // $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('news_settings_tbl');
    }
}
