<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // будет приходить весь объект с возмож. преобр. данных
        return [
          'id' => $this->id,
          'name' => $this->name,
          'surname' => $this->surname,
          'position' => $this->position,
          'description' => $this->description,
          'interests' => $this->interests,
        ];
    }
}
