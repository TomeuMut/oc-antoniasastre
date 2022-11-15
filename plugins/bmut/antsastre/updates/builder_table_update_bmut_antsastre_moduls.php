<?php namespace Bmut\Antsastre\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBmutAntsastreModuls extends Migration
{
    public function up()
    {
        Schema::table('bmut_antsastre_moduls', function($table)
        {
            $table->string('descripcion_a', 255)->nullable();
            $table->string('descripcion_a2', 255)->nullable();
            $table->string('descripcion_c', 255)->nullable();
            $table->string('descripcion_d', 255)->nullable();
            $table->integer('project_id');
            $table->dropColumn('tipo');
        });
    }
    
    public function down()
    {
        Schema::table('bmut_antsastre_moduls', function($table)
        {
            $table->dropColumn('descripcion_a');
            $table->dropColumn('descripcion_a2');
            $table->dropColumn('descripcion_c');
            $table->dropColumn('descripcion_d');
            $table->dropColumn('project_id');
            $table->string('tipo', 191);
        });
    }
}