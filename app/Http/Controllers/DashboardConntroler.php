<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Person;

class DashboardConntroler extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard', ['peopleCount' => $this->getPeopleAmount(), 'people' => Person::all() ?? [] , 'peopleCountInBuilding' => $this->getPeopleInBuilding()]);
    }

    public function inbuilding()
    {
        return Inertia::render('Inbuilding', ['peopleCount' => $this->getPeopleAmount(), 'people' => Person::all() ?? [], 'peopleCountInBuilding' => $this->getPeopleInBuilding()]);
    }

    public function inbuildingsearch(Request $request)
    {
        $request->validate([
            'search' => 'required|max:255',
        ]);

        $people = Person::where('first_name', 'like', "%{$request->input('search')}%")->orWhere('last_name', 'LIKE', "%{$request->input('search')}%")->get();
        return Inertia::render('Inbuilding', ['peopleCount' => $this->getPeopleAmount(), 'people' => $people ?? Person::all(), 'peopleCountInBuilding' => $this->getPeopleInBuilding()]);
    }

    public function historysearch(Request $request)
    {
        $request->validate([
            'search' => 'required|max:255',
        ]);
        
        $people = Person::where('first_name', 'like', "%{$request->input('search')}%")->orWhere('last_name', 'LIKE', "%{$request->input('search')}%")->get();
        return Inertia::render('History', ['peopleCount' => $this->getPeopleAmount(), 'people' => $people ?? Person::all(), 'peopleCountInBuilding' => $this->getPeopleInBuilding()]);
    }

    public function history()
    {
        return Inertia::render('History', ['peopleCount' => $this->getPeopleAmount(), 'people' => Person::all() ?? [], 'peopleCountInBuilding' => $this->getPeopleInBuilding()]);
    }

    public function getPeopleAmount(): int
    {
        return Person::count() ?? 0;
    }

    public function getPeopleInBuilding(): int
    {
        $count = 0;
        foreach(Person::all() as $person){
            if($person->Left_at == '1970-01-01 00:00:00'){
                $count++;
            }
        }
        return $count;
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

        return Inertia::render('Dashboard', ['peopleCount' => $this->getPeopleAmount() , 'people' => Person::all() ?? [], 'peopleCountInBuilding' => $this->getPeopleInBuilding()]);
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
