import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  branding: string;
  isLoggedIn: boolean = false;
  currentUser: string;
  allowRegisteration: boolean;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessagesService: FlashMessagesService,
    public settingsService: SettingsService,
  ) {
    this.branding = 'Blogon';
  }

  ngOnInit() {
    // Check For Registeration
    this.settingsService.getSettings().valueChanges().subscribe(res => {
      if (res.allowRegisteration) {
        this.allowRegisteration = true;
      } else {
        this.allowRegisteration = false;
      }
    });
    // Check Authentication
    this.authService.isAuthentiacted().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.currentUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  // Logout
  logout() {
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', {
      cssClass: 'alert alert-success',
      timeout: 3000,
    });
    this.router.navigate(['/login']);
  }
}
