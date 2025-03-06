<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    // вывод информ. со всех полей по Project
    public function index()
    {
        return ProjectResource::collection(Project::all());
    }
}
