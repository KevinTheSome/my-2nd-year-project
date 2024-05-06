<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardConntroler extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard', ['peopleInBuilding' => $this->getPeopleInBuilding()]);
    }

    public function getPeopleInBuilding(): int
    {
        return 0;
    }
}
