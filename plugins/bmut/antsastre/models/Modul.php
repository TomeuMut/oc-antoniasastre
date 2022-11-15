<?php namespace Bmut\Antsastre\Models;

use Model;

/**
 * Model
 */
class Modul extends Model
{
    use \October\Rain\Database\Traits\Validation;
    use \October\Rain\Database\Traits\Sortable;

    
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

    /**
     * @var string The database table used by the model.
     */
    public $table = 'bmut_antsastre_moduls';

     // public $belongsToMany = [
     //    'project' => 'bmut\antsastre\Models\Project',
     //    'table' => 'bmut_antsastre_modul_project',
     //    'key'=>'project_id'
     // ];

    public $attachOne = [
        'img_C' => 'System\Models\File',
        'img_C_med' => 'System\Models\File',
        'img_C_small' => 'System\Models\File',
        'img_E' => 'System\Models\File',
        'img_E_med' => 'System\Models\File',
        'img_E_small' => 'System\Models\File',      
    ];


    public $attachMany = [
        
        'img_slider_B' => 'System\Models\File',
        'img_slider_B_med' => 'System\Models\File',
        'img_slider_B_small' => 'System\Models\File'
    ];
}
