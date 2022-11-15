<?php namespace Bmut\Antsastre\Models;

use Model;

/**
 * Model
 */
class Project extends Model
{
    use \October\Rain\Database\Traits\Validation;

    public $implement = ['RainLab.Translate.Behaviors.TranslatableModel'];

    public $translatable = ['title','description','descripcion_A','descripcion_A_2','desc_C','desc_D'];

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
    public $table = 'bmut_antsastre_projects';    

    public $hasMany =[        
        'modules' => ['bmut\antsastre\Models\Modul'],        
    ];

    public $attachOne = [
        'principal_image' => 'System\Models\File',
        'principal_image_medium' => 'System\Models\File',
        'principal_image_small' => 'System\Models\File',
        'img_C' => 'System\Models\File',
        'img_C_med' => 'System\Models\File',
        'img_C_small' => 'System\Models\File',
        'img_E' => 'System\Models\File',
        'img_E_med' => 'System\Models\File',
        'img_E_small' => 'System\Models\File',
        'gallery' => 'System\Models\File',
    ];


    public $attachMany = [
        
        'img_slider_B' => 'System\Models\File',
        'img_slider_B_med' => 'System\Models\File',
        'img_slider_B_small' => 'System\Models\File'
    ];
}
