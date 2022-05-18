import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { catchError, map, Observable, takeLast, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private connected: boolean = false;

  constructor(
    private _httpClient: HttpClient,
    private router: Router
  ) { }

  public isConnected(): boolean {
    return this.connected;
  }
  //: Observable<any>
  public authenticate(login: string, password: string) {
    this._httpClient.get(`api/users?login=${login}&password=${password}`).pipe(
      takeLast(10),
      map(
        (value) => {
          if(value) {
            this.router.navigate(['home']),
            this.connected = true;
          }
        }
      ),
      catchError(
        (err, caught) => {
          console.log(err);
          this.router.navigate(['404'])
          return caught;
        }
      )
    )
  }
}
