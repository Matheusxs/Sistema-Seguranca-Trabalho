import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;// Save logged in user data
  userReady = false;

  status = new Observable<any>();

  constructor(public afs: AngularFirestore,
              public afAuth: AngularFireAuth,
              private router: Router,  
              private ngZone: NgZone) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.userData.admin = false;
        if(this.userData.uid == "LeUa9ybfQugsWBvitnKAg4Wau0X2"){
          this.userData.admin = true;
        }
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', '{}');
        JSON.parse(localStorage.getItem('user')!);
      }
      this.status = new Observable(observer => {
        observer.next(this.userReady);
      });
    });
  }

  isReady(){
    return this.status;
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        this.userData = result.user;

        let user_cache = JSON.parse(localStorage.getItem('user')!);
        user_cache.emailVerified = result.user?.emailVerified;
        localStorage.setItem('user', JSON.stringify(user_cache));
        this.userReady = true;

       
        this.userData.admin = false;
        if(this.userData.uid == "LeUa9ybfQugsWBvitnKAg4Wau0X2"){
          this.userData.admin = true;
        }

      }).catch((error) => {
        window.alert(error.message)
      })
  }
  // Sign up with email/password
  SignUp(email: string, password: string, nome: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.userReady = true;
        this.SendVerificationMail();
        this.SetUserData(result.user, nome);
      }).catch((error) => {
        window.alert(error.message);
      })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u =>{if(u != undefined)u.sendEmailVerification()})
    .then(() => {
      this.router.navigate(['validar-email']);
    });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Enviamos um email para a troca da senha para o endereço solicitado');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    //console.log(1, user !== null);
    //console.log(2, user.emailVerified !== false);
    //console.log(3, user.emailVerified !== undefined);
    //console.log(4, user !== undefined);
    return (user !== null && user.emailVerified !== false && user.emailVerified !== undefined && user !== undefined) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
          this.router.navigate(['']);
      })
      this.userReady = true;
      this.SetUserData(result.user, '');
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any, nome: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Users/${user.uid}`);

    const userData = {
      id: user.uid,
      email: user.email,
      nome: user.displayName,
      email_verificado: user.emailVerified,
    }

    if(nome != ''){
      userData.nome = nome;
    }
    userRef.set(userData, {
      merge: true
    }).then(() =>{
      
    }).catch((e)=>{
      console.error("Falha ao Criar Aluno, Favor Contatar Suporte",e);
    })

  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userData = null;
      localStorage.clear();
      this.userReady = false;
      this.router.navigate(['login']);
    })
  }

}
