import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

import { TestItem, TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  loaded: number = 2;
  message: string = "";
  items: TestItem[] = [];

  constructor(public testService: TestService) {

  }
  
  ngOnInit(): void {
    this.testService.getTest1().subscribe({
      next: (value: string) => {
        this.message = value;
        this.loaded--;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.message = error.message;
        this.loaded--;
      }
    });
    this.testService.getTest2().subscribe({
      next: (values: TestItem[]) => {
        this.items = values;
        this.loaded--;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.loaded--;
      }
    })
  }
}
