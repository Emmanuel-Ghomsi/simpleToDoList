<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->sentence(); // the task title

        return [
            "title" => $title,
            "slug" => Str::str_slug($title),
            "description" => $this->faker->text(),
            "start_date" => $this->faker->date(),
            "end_date" => null,
            "is_finish" => $this->faker->boolean(),
            "user_id" => User::all()->random()->id // select ramdom user_id from User model
        ];
    }
}
