<?php namespace Bmut\Antsastre;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return[
            'Bmut\Antsastre\Components\Form' => 'form'
        ];
    }

    public function registerSettings()
    {
    }
}
