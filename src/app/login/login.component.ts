import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService ) { }

  public userName: string;
  public password: string;
  ngOnInit(): void {
  }
  login() {
    let login = this.service.login(this.userName, this.password);
  }
}
