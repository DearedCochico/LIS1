<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsSettingsTable extends Migration
{
    public function up()
    {
        Schema::create('news_settings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->date('publish_date');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('news_settings');
    }
}
