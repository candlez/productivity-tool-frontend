import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habit } from '../data/domain/Habit';
import { map, Observable } from 'rxjs';
import { HabitResponseDto } from '../data/dto/HabitResponse.dto';
import { SingleItemDto } from '../data/dto/rest/SingleItem.dto';
import { ApiResponseDto } from '../data/dto/rest/ApiResponse.dto';
import { Mapper } from '../data/util/Mapper';
import { HabitMapper } from '../data/mapper/Habit.mapper';

@Injectable({
  providedIn: 'root',
})
export class HabitService {

  constructor(private http: HttpClient) {

  }

  public getHabits(): Observable<Habit[]> {
    return this.http.get<ApiResponseDto<SingleItemDto<HabitResponseDto>>>(
      "api/v1/habits",
      { withCredentials: true }
    ).pipe(
      map(
        (res: ApiResponseDto<SingleItemDto<HabitResponseDto>>) =>
          Mapper.mapListItem<HabitResponseDto, Habit>(res, HabitMapper.fromHabitResponseDto)
      )
    );
  }
  
}
