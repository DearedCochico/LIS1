<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('department_tbl', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key (assuming "id" column)
            $table->string('name'); // Name column
            $table->text('description')->nullable(); // Description column (nullable)
            // Add any additional columns you might need here

            // If you want to include timestamps (created_at and updated_at columns), uncomment the following line:
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('department_tbl');
    }
}

