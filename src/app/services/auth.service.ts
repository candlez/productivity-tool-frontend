import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponseDto } from '../data/dto/rest/ApiResponse.dto';
import { SingleItemDto } from '../data/dto/rest/SingleItem.dto';
import { UserResponseDto } from '../data/dto/UserResponse.dto';
import { User } from '../data/domain/User';
import { Mapper } from '../data/util/Mapper';
import { UserMapper } from '../data/mapper/User.mapper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  public login(email: string, password: string): Observable<User> {
    return this.http.post<ApiResponseDto<SingleItemDto<UserResponseDto>>>(
      "api/v1/auth/login",
      { email, password }
    ).pipe(map(
      (res: ApiResponseDto<SingleItemDto<UserResponseDto>>) => 
        Mapper.mapSingleItem<UserResponseDto, User>(res, UserMapper.fromUserResponseDto)
    ));
  }
  
}
