import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
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

  private readonly user: WritableSignal<User | undefined> = signal<User | undefined>(undefined);

  // this signal is exposed to let components know whether the user is logged in
  readonly isLoggedIn = computed(() => this.user() !== undefined);

  constructor(private http: HttpClient) {

  }

  public login(email: string, password: string): Observable<User> {
    return this.http.post<ApiResponseDto<SingleItemDto<UserResponseDto>>>(
      "api/v1/auth/login",
      { email, password }
    ).pipe(
      map(
        (res: ApiResponseDto<SingleItemDto<UserResponseDto>>) => 
          Mapper.mapSingleItem<UserResponseDto, User>(res, UserMapper.fromUserResponseDto)
      ),
      tap((res: User) => this.user.set(res)),
      catchError((err: any) => {
        this.user.set(undefined);
        return throwError(() => err);
      })
    );
  }

  public getUser(): Observable<User> {
    return this.http.get<ApiResponseDto<SingleItemDto<UserResponseDto>>>(
      "api/v1/auth/me",
      { withCredentials: true }
    ).pipe(
      map(
        (res: ApiResponseDto<SingleItemDto<UserResponseDto>>) => 
          Mapper.mapSingleItem<UserResponseDto, User>(res, UserMapper.fromUserResponseDto)
      ),
      tap((res: User) => this.user.set(res)),
      catchError((err: any) => {
        this.user.set(undefined);
        return throwError(() => err);
      })
    );
  }

  public initializeUser(): Observable<void> {
    return this.http.get<ApiResponseDto<SingleItemDto<UserResponseDto>>>(
      "api/v1/auth/me",
      { withCredentials: true }
    ).pipe(
      map(
        (res: ApiResponseDto<SingleItemDto<UserResponseDto>>) => 
          Mapper.mapSingleItem<UserResponseDto, User>(res, UserMapper.fromUserResponseDto)
      ),
      tap((res: User) => this.user.set(res)),
      map(() => undefined),
      catchError(() => {
        this.user.set(undefined);
        return of(undefined);
      })
    );
  }
}
