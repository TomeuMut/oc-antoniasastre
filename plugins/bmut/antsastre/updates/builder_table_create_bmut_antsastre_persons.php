<?php namespace Bmut\Antsastre\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateBmutAntsastrePersons extends Migration
{
    public function up()
    {
        Schema::create('bmut_antsastre_persons', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('name')->nullable();
            $table->text('description')->nullable();
            $table->text('linkedin')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('bmut_antsastre_persons');
    }
}