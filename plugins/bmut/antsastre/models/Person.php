<?php namespace Bmut\Antsastre\Models;

use Model;

/**
 * Model
 */
class Person extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $attachOne = [
        'employe_photo' => 'System\Models\File',
        'employe_photo_med' => 'System\Models\File',
        'employe_photo_small' => 'System\Models\File'
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'bmut_antsastre_persons';
}
