<?php namespace Bmut\Antsastre\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBmutAntsastreProjects extends Migration
{
    public function up()
    {
        Schema::table('bmut_antsastre_projects', function($table)
        {
            $table->renameColumn('subtitle', 'slug');
        });
    }
    
    public function down()
    {
        Schema::table('bmut_antsastre_projects', function($table)
        {
            $table->renameColumn('slug', 'subtitle');
        });
    }
}