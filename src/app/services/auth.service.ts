import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  // Login
  login(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(<string> email, <string> password).then(userCredentials => {
        resolve(userCredentials);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // Register
  register(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(<string> email, <string> password).then(userCredentials => {
        resolve(userCredentials);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // Get Authentication
  isAuthentiacted(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  // Logout
  logout(){
    this.afAuth.auth.signOut();
  }
}
