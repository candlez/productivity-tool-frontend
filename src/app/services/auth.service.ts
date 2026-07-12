import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
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

  private user: User | undefined = undefined;

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

  public getUser(): Observable<User> {
    if (this.user !== undefined) {
      console.log("cache hit")
      return of(this.user);
    }

    return this.http.get<ApiResponseDto<SingleItemDto<UserResponseDto>>>(
      "api/v1/auth/me",
      { withCredentials: true }
    ).pipe(
      map(
        (res: ApiResponseDto<SingleItemDto<UserResponseDto>>) => 
          Mapper.mapSingleItem<UserResponseDto, User>(res, UserMapper.fromUserResponseDto)
      ),
      tap((user: User) => { this.user = user })
    );
  }
  
}
