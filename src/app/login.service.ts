import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  public url = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  login(Username: string, Password: string)
  {
    const user = {
      userName: Username,
      password: Password
    };
    this.http.post(this.url, user, {}).subscribe(value => {
      return value;
    });
    return false;
  }
}
