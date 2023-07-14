<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('contactUsTbl', function (Blueprint $table) {
        $table->id();
        $table->string('Type', 100);
        $table->string('Value', 100);
        $table->timestamp('lastUpdated')->nullable();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contactUsTbl');
    }
};
