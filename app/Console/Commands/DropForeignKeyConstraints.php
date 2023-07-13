<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DropForeignKeyConstraints extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:drop-foreign-key-constraints';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
    }
}
