<?php namespace Bmut\Antsastre\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBmutAntsastreModuls2 extends Migration
{
    public function up()
    {
        Schema::table('bmut_antsastre_moduls', function($table)
        {
            $table->string('type', 255)->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('bmut_antsastre_moduls', function($table)
        {
            $table->dropColumn('type');
        });
    }
}