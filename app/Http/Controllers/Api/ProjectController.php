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

    public function show(Project $project)
    {
        return new ProjectResource($project);
    }

//    public function store(Request $request) {
//
//        // валидация
//        $data = $request->validate([
//            'title' => 'required|string',
//            'description' => 'required|string',
//            'link' => 'required|string',
//            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
//        ]);
//
//        // сохранение image
//        $data['image'] = $request->file('image')->store('images', 'public');
//
//        $project = Project::create($data);
//
//        return new ProjectResource($project);
//    }
}
