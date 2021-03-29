<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Name as NameResource;
use Illuminate\Support\Facades\DB;
use App\Name;

class NameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $last_date = date('Y') . '-12-31 00:00:00'; 

        $result = DB::table('names')
                    ->selectRaw('current_name')
                    ->whereRaw('DATE_PART("day", "'.$last_date.'"::timestamp - created_at::timestamp)<=28')
                    ->get()
                    ->toArray();

        return response()->json($result);  

        //return Name::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'current_name' => 'required|max:255',
        ]); 

        $name = Name::create($request->all());

        return response()->json($name, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         $result = DB::table('names')
                    ->selectRaw('past_name')
                    ->where('id', '=', $id)
                    ->get()
                    ->toArray();

        return response()->json($result);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
