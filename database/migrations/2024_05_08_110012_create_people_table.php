<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->dateTime('Arrived_at');
            $table->dateTime('Left_at')->default(date('Y-m-d H:i:s', 0));
            $table->string('first_name');
            $table->string('last_name');
            $table->enum('sex', ['Male','Femail','Transgender','Helihopter']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('people');
    }
};
