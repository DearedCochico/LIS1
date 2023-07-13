<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddActionToParticularsTable extends Migration
{
    public function up()
    {
        Schema::table('particulars', function (Blueprint $table) {
            $table->string('action')->nullable();
        });
    }

    public function down()
    {
        Schema::table('particulars', function (Blueprint $table) {
            $table->dropColumn('action');
        });
    }
}
