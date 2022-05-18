import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _client: HttpClient
  ) { }

  public isConnected(): boolean {
    return false;
  }
}
