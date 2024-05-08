<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Person;

class DashboardConntroler extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard', ['peopleInBuilding' => $this->getPeopleInBuilding()]);
    }

    public function getPeopleInBuilding(): int
    {
        return Person::count() ?? 0;
    }

    public function addPerson(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|min:8|confirmed',
        ]);

        $Person = new Person();
        $Person->first_name = $request->input('first_name');
        $Person->last_name = $request->input('last_name');
        $Person->Arrived_at = date('Y-m-d H:i:s');
        $Person->sex = $request->input('sex');
        $Person->save();

        return Inertia::render('Dashboard', ['peopleInBuilding' => $this->getPeopleInBuilding()]);
    }
}
