import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showSlider: boolean;
  constructor(
    public settingsService: SettingsService,
  ) { }

  ngOnInit() {
    this.settingsService.getSettings().valueChanges().subscribe(res => {
      if (res.showSlider) {
        this.showSlider = true;
      } else {
        this.showSlider = false;
      }
    });
  }

}
