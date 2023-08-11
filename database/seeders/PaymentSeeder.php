<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Invoice;

class PaymentSeeder extends Seeder
{
    public function run()
    {
        $faker = \Faker\Factory::create();

        $invoices = Invoice::all();

        foreach ($invoices as $invoice) {
            for ($i = 1; $i <= 2; $i++) { // Creating 2 payments per invoice
                DB::table('payment_tbl')->insert([
                    'invoice_id' => $invoice->id,
                    'amount' => $faker->randomFloat(2, 10, $invoice->totalAmount),
                    'payment_method' => $faker->randomElement(['Cash', 'Credit Card', 'Bank Transfer']),
                    'date' => $faker->dateTimeBetween($invoice->date, 'now'),
                ]);
            }
        }
    }
}
