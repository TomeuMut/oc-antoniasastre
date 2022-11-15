<?php namespace Bmut\Antsastre\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateBmutAntsastreProjects extends Migration
{
    public function up()
    {
        Schema::create('bmut_antsastre_projects', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('title')->nullable();
            $table->text('subtitle')->nullable();
            $table->text('description')->nullable();
            $table->text('description_extras')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('bmut_antsastre_projects');
    }
}
