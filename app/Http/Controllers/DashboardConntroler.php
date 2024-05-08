<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Person;

class DashboardConntroler extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard', ['peopleInBuilding' => $this->getPeopleInBuilding(), 'people' => Person::all() ?? []]);
    }

    public function getPeopleInBuilding(): int
    {
        return Person::count() ?? 0;
    }

    public function addPerson(Request $request)
    {
        $request->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'sex' => 'required|in:Male,Female,Transgender,Helihopter',
        ]);

        $Person = new Person();
        $Person->first_name = $request->input('first_name');
        $Person->last_name = $request->input('last_name');
        $Person->Arrived_at = date('Y-m-d H:i:s');
        $Person->sex = $request->input('sex');
        $Person->save();
        return redirect()->intended('/dashboard');

        return Inertia::render('Dashboard', ['peopleInBuilding' => $this->getPeopleInBuilding() , 'people' => Person::all() ?? []]);
    }

    public function leave(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:people,id',
        ]);

        $Person = Person::find($request->input('id'));
        $Person->Left_at = date('Y-m-d H:i:s');
        $Person->save();
        return redirect()->intended('/dashboard');
    }
}
