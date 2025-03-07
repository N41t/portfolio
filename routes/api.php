<?php

use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ExperienceController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/projects', ProjectController::class)
    ->only(['index', 'show'])
    ->parameter('projects', 'project');

Route::apiResource('/experiences', ExperienceController::class)
    ->only(['index', 'show'])
    ->parameter('experiences', 'experience');

