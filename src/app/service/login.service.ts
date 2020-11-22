import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  public url = 'https://localhost:44359/api/login';
  constructor(private http: HttpClient) { }

  login(Username: string, Password: string)
  {
    const user = {
      userName: Username,
      password: Password
    };
    return this.http.post(this.url, user, {});
  }

  mockLoginService(username: string, password: string) {
    if (username === 'sooraj' && password === 'Password') {
      return of(true);
    }
    else {
      return of(false);
    }
  }
}
