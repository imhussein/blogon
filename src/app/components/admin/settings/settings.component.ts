import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { Settings } from 'src/app/models/Settings';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  constructor(
    public settingsService: SettingsService,
    public flashMessagesService: FlashMessagesService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.settingsService.getSettings().valueChanges().subscribe(settings => {
      this.settings = settings;
    });
    this.flashMessagesService.show('Settings Updated', {
      cssClass: 'alert alert-success',
      timeout: 3000,
    });
    this.router.navigate(['/admin/settings']);
  }

  onSubmit(){
    this.settingsService.changeSettings(this.settings);
    this
  }

}
