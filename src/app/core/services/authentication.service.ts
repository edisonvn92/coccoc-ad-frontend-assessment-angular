import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, interval, Observable, of, take } from 'rxjs';
import mockUserList from './users.json';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUser: any = {};
  apiBaseUrl = 'http://localhost:3000/api'

  constructor(private httpClient: HttpClient) { }

  login(input: {email: string; password: string}): Observable<any> {
    // return forkJoin(of(mockUserList[0]), interval(500).pipe(take(1)));
    return this.httpClient.post(this.apiBaseUrl + '/login', input)
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') as string);
  }

  saveCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  saveToken(token: string) {
    sessionStorage.setItem('token', token)
  }

  getToken() {
    return sessionStorage.getItem('token')
  }
}
