<?php namespace Bmut\Antsastre\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteBmutAntsastreModulProject extends Migration
{
    public function up()
    {
        Schema::dropIfExists('bmut_antsastre_modul_project');
    }
    
    public function down()
    {
        Schema::create('bmut_antsastre_modul_project', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->integer('project_id');
            $table->integer('modul_id');
        });
    }
}
