import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public flashMessagesService: FlashMessagesService,
  ) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(auth => {
      if (auth) {
        return true;
      } else {
        this.flashMessagesService.show('You are not authenticated to view this page', {
          cssClass: 'alert alert-danger',
          timeout: 3000,
        });
        this.router.navigate(['/login']);
        return false;
      }
    }));
  }
}
