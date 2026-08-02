import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {

  private static readonly GENERIC_ERROR_MSG: string = "Something went wrong unexpectedly."

  constructor(private snackBar: MatSnackBar) {

  }

  public success(msg: string) {
    this.snackBar.open(msg, "dismiss",  { duration: 1500, horizontalPosition: "end" });
  }

  public defaultError(): void {
    this.snackBar.open(SnackBarService.GENERIC_ERROR_MSG, "dismiss",  { horizontalPosition: "end", panelClass: ['error-snackbar'] });
  }
}
