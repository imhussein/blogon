import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class SettingsGuard implements CanActivate {
  constructor (
    public router: Router,
    public flashMessagesService: FlashMessagesService,
    public settingsService: SettingsService,
  ) {

  }

  canActivate(): Observable<boolean> {
    return this.settingsService.getSettings().valueChanges().pipe(map(res => {
      if (res.allowRegisteration) {
        return true;
      } else {
        this.flashMessagesService.show('Regiseration Is Disabled', {
          cssClass: 'alert alert-danger',
          timeout: 3000,
        });
        this.router.navigate(['/login']);
        return false;
      }
    }));
  }
}
