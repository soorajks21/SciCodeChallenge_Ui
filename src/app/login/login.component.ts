import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
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
  ngOnInit(): void {
  }
  login() {
    this.service.login(this.userName, this.password).subscribe(value => {
      this.isLoggedIn = value;
      if (this.isLoggedIn) {
        this.router.navigate(['/welcome/'+this.userName]);
      }
      else {
        alert('Wrong username or password');
      }
    }, error => {
      this.isLoggedIn = false;
      alert('Wrong username or password');
    }
    );
  }
}
