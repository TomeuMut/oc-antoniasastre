<?php namespace Bmut\Antsastre\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBmutAntsastreProjects2 extends Migration
{
    public function up()
    {
        Schema::table('bmut_antsastre_projects', function($table)
        {
            $table->renameColumn('description_extras', 'module');
        });
    }
    
    public function down()
    {
        Schema::table('bmut_antsastre_projects', function($table)
        {
            $table->renameColumn('module', 'description_extras');
        });
    }
}