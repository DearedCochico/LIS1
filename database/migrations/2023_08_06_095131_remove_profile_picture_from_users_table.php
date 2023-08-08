<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveProfilePictureFromUsersTable extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('profilePicture');
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('profilePicture')->nullable();
        });
    }
}
