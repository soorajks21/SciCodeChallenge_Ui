import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService, private router: Router ) { }

  public userName: string;
  public password: string;
  public isLoggedIn;
  errorMessage: string;
  ngOnInit(): void {
  }
  login() {
    this.service.mockLoginService(this.userName, this.password).subscribe(value => {
      this.isLoggedIn = value;
      if (this.isLoggedIn) {
        this.router.navigate(['/welcome/' + this.userName]);
      }
      else {
        this.ErrorMessageMethod();
      }
    }
    );
  }

  ErrorMessageMethod() { 
    this.errorMessage = "Invalid Username or password";
  }

}
