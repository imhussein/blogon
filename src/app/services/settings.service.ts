import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: AngularFireObject<Settings>;
  constructor(
    public afDB: AngularFireDatabase,
  ) {
    this.settings = this.afDB.object('/settings') as AngularFireObject<Settings>;
  }

  getSettings() {
    return this.settings;
  }

  addSettings() {
    this.afDB.object('/settings').valueChanges().subscribe(res => {
      if (res == null) {
        this.settings.set({
          allowRegisteration: true,
          showSlider: true,
        });
      }
    });
  }

  changeSettings(settings){
    this.settings.update(settings);
  }
}
