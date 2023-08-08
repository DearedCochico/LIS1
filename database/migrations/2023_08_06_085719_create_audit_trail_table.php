<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuditTrailTable extends Migration
{
    public function up()
    {
        Schema::create('audit_trail_tbl', function (Blueprint $table) {
            $table->increments('id'); // Adjusted primary key
            $table->string('user'); // Adjusted column name
            $table->string('department'); // Adjusted column name
            $table->string('action');
            $table->timestamp('timestamp');
            $table->text('details'); // Adjusted column name
            // Add other columns if needed

            // You can also add indexes, foreign keys, etc. if required
        });
    }

    public function down()
    {
        Schema::dropIfExists('audit_trail_tbl');
    }
}
