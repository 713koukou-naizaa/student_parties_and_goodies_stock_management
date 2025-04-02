<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Parties extends Model
{
    protected static $filePath = 'json/parties.json';

    public static function getFilePath(): string { return self::$filePath; }

    public static function all(): array { return storage_path(json_decode(file_get_contents(self::$filePath)), true); }

    public static function save(array $pData): void { file_put_contents(storage_path(self::$filePath), json_encode($pData, JSON_PRETTY_PRINT)); }
}
