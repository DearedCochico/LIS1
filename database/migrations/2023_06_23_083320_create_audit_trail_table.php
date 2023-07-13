<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuditTrailTable extends Migration
{
    public function up()
    {
        Schema::create('audit_trail', function (Blueprint $table) {
            $table->id();
            $table->string('user');
            $table->string('action');
            $table->timestamp('timestamp');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('audit_trail');
    }
}

