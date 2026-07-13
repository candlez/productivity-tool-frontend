import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Habit } from '../../data/domain/Habit';
import { HabitService } from '../../services/habit.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-habits-page',
  imports: [],
  templateUrl: './habits-page.component.html',
  styleUrl: './habits-page.component.scss',
})
export class HabitsPageComponent implements OnInit {

  readonly habits: WritableSignal<Habit[]> = signal<Habit[]>([]);

  constructor(private habitService: HabitService) {

  }

  ngOnInit(): void {
    this.habitService.getHabits().subscribe({
      next: (data: Habit[]) => this.habits.set(data),
      error: (err: HttpErrorResponse) => console.error(err)
    })
  }
}
