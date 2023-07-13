<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DropForeignKeysCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:drop-foreign-keys-command';

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
        DB::statement('ALTER TABLE users_table DROP FOREIGN KEY roleID');
    }
}
