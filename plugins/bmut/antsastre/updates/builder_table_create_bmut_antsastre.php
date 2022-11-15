<?php namespace Bmut\Antsastre\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateBmutAntsastre extends Migration
{
    public function up()
    {
        Schema::create('bmut_antsastre_servicios', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('title')->nullable();            
            $table->text('description')->nullable();            
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('bmut_antsastre_');
    }
}