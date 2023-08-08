<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameSpecializationsTableToSpecializationTbl extends Migration
{
    public function up()
    {
        Schema::rename('specializations', 'specialization_tbl');
    }

    public function down()
    {
        Schema::rename('specialization_tbl', 'specializations');
    }
}
