import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
