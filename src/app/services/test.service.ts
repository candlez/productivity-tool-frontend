import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseURL: string = "http://localhost:9000";

  constructor(public http: HttpClient) {

  }

  getTest1(): Observable<string> {
    return this.http.get<string>(`${this.baseURL}/api/test1`);
  }

  getTest2(): Observable<TestItem[]> {
    return this.http.get<TestItem[]>(`${this.baseURL}/api/test2`);
  }
}

export interface TestItem {
  value1: string,
  value2: number,
  value3: string
}
