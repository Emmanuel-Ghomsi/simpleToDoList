<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Generate fake data to populate database
        $this->command->info('Create admin user');
        \App\Models\User::factory(1)->create();

        $this->command->info('Create tasks data');
        \App\Models\Task::factory(10)->create();
    }
}
