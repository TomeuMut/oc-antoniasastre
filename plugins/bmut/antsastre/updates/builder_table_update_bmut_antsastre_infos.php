<?php namespace Bmut\Antsastre\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBmutAntsastreInfos extends Migration
{
    public function up()
    {
        Schema::table('bmut_antsastre_infos', function($table)
        {
            $table->text('street')->nullable();
            $table->text('postal_code')->nullable();
            $table->text('city')->nullable();
            $table->text('province')->nullable();
            $table->text('country')->nullable();
            $table->text('telf')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('bmut_antsastre_infos', function($table)
        {
            $table->dropColumn('street');
            $table->dropColumn('postal_code');
            $table->dropColumn('city');
            $table->dropColumn('province');
            $table->dropColumn('country');
            $table->dropColumn('telf');
        });
    }
}
