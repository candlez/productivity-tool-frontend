import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseURL: string = environment.apiURL;

  constructor(public http: HttpClient) {

  }

  getTest1(): Observable<string> {
    return this.http.get(`${this.baseURL}/test1`,  { responseType: 'text' });
  }

  getTest2(): Observable<TestItem[]> {
    return this.http.get<TestItem[]>(`${this.baseURL}/test2`);
  }
}

export interface TestItem {
  value1: string,
  value2: number,
  value3: string
}
