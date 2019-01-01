import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessagesService: FlashMessagesService,
  ) { }

  ngOnInit() {
    this.authService.isAuthentiacted().subscribe(auth => {
      if(auth){
        this.router.navigate(['/admin']);
      }
    });
  }

  // Login
  login(){
    this.authService.login(<string> this.email, <string> this.password).then(() => {
      this.flashMessagesService.show('You are logged in', {
        cssClass: 'alert alert-success',
        timeout: 3000,
      });
      this.router.navigate(['/']);
    }).catch(err => {
      this.flashMessagesService.show(err.message, {
        cssClass: 'alert alert-danger',
        timeout: 3000,
      });
      this.router.navigate(['/login']);
    });
  }

}
