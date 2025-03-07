<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;


class UserController extends Controller
{

    // вывод информ. со всех полей по Project
    public function index()
    {
        $users = User::with('users')->get();
        return UserResource::collection($users);
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

}
