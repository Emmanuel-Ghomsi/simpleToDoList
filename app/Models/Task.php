<?php

namespace App\Models;

use App\Models\BaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends BaseModel
{
    use HasFactory;

    protected $fillable = ["title", "slug", "start_date", "end_date", "is-finish", "user_id"];

    /**
     * Relation One to Many with User model
     * 
     * @return belongsTo User Model
     */
    public function user() {
        return $this->belongsTo(User::class);
    }
}
