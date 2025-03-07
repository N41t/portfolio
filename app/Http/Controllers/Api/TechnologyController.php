<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TechnologyResource;
use App\Models\Technology;
use Illuminate\Http\Request;

class TechnologyController extends Controller
{

    // вывод информ. со всех полей по Project
    public function index()
    {
        return TechnologyResource::collection(Technology::all());
    }

    public function show(Technology $technology)
    {
        return new TechnologyResource($technology);
    }

}
