import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public angularFire: AngularFireAuth, private router: Router) {
    angularFire.authState.subscribe(user => {
      this.user = user;
    })
  }

  login(email: string, password: string) {
    this.angularFire.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.router.navigate(['./rooms']);
      })
      .catch(err => {
        console.log(err);
      })
    }

  singup(email: string, password: string) {
    this.angularFire.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.router.navigate(['./rooms']);
      })
      .catch(err => {
        console.log(err);
      })
  }

  logout() {
    this.angularFire.auth.signOut();
  }
}
