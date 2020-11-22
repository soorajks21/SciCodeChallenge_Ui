import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public user: string;
  message: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.params.id;
  }

  welcomeMessage() {
    this.message = 'Welcome ' + this.user;
  }
}
