import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthData } from './auth-data.module';
import { StringifyOptions } from 'querystring';

@Injectable({ providedIn: 'root'})
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) {}

  getToken() {
    return this.token;
  }


  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post<{token: string}>('http://localhost:3000/api/user/signup', authData)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post<{token: string}>('http://localhost:3000/api/user/login', authData)
      .subscribe(response => {
        this.token = response.token;
      });
  }
}