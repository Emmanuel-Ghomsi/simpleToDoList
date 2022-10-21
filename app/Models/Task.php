<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ["title", "slug", "start_date", "end_date", "user_id"];

    /**
     * Relation One to Many with User model
     * 
     * @return belongsTo User Model
     */
    public function user() {
        return $this->belongsTo(User::class);
    }
}
