<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration
{
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->timestamps();
        });

        // Insert initial role data
        DB::table('roles')->insert([
            ['name' => 'admin'],
            ['name' => 'cashier'],
            ['name' => 'lab tech'],
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
