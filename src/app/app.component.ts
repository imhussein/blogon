import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Blogon - Blog SAP With Angular & Bootstrap';
  isLoggedIn: boolean = false;
  isHomepage: boolean = false;
  constructor(
    public router: Router,
    public authService: AuthService,
    public settingsService: SettingsService,
  ){ }
  ngOnInit(){
    this.settingsService.addSettings();
    this.router.events.subscribe(() => {
      if(this.router.url == '/' || this.router.url.split('/')[1] === 'post'){
        this.isHomepage = false;
      } else {
        this.isHomepage = true;
      }
    })
    this.authService.isAuthentiacted().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
  }
}
