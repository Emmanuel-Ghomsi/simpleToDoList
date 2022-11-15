<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Ce model sera le model de base des models de cette application
 */
class BaseModel extends Model
{
    use HasFactory;

    /**
     * Permet de convertir le format timestamp de Laravel par default a "Y-m-d H:i:s.u"
     * Vers le format de SQL Server "Y-d-m H:i:s"
     * 
     * @param  $value   Valeur à convertir
     * @return DateTime Date convertie au format correct à l'aide de Carbon
     */
    public function fromDateTime($value)
    {
        return Carbon::parse(parent::fromDateTime($value))->format('Y-d-m H:i:s');
    }
}
