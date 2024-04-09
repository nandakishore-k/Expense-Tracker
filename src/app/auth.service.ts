/*import { Injectable, inject } from "@angular/core";
import { Observable, first, from, map } from "rxjs";
import { Auth } from "@angular/fire/auth"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    firebaseAuth = inject(Auth)
    user$: Observable<any>;
    constructor(
      private afAuth: AngularFireAuth,
      private db: AngularFireDatabase,
      private router: Router
    ) {
      this.user$ = this.afAuth.authState;
    }

    async login(email: string, password: string) {
      try {
        const result = await this.afAuth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/dashboard']);
      } catch (error) {
        console.log('Error logging in:', error);
      }
    }

    async logout() {
      await this.afAuth.signOut();
      this.router.navigate(['/login']);
    }

    getUserRole(uid: string): Observable<string> {
      return this.db.object(`users/${uid}`).valueChanges().pipe(
        map((userData: any) => {
          if (userData && userData.role) {
            return userData.role;
          } else {
            return ''; // or handle the case when role is missing or invalid
          }
        }),
        first() // Ensure only the first emitted value is taken
      );
    }
    register(email: string,username:string,password:string,f_name:string,l_name: string):Observable<void>{
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        ).then(response => updateProfile(response.user,{displayName:username}))

        return from(promise);
    }

}
// auth.service.ts

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState;
  }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log('Error logging in:', error);
    }
  }

  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }

  async getUserRole(uid: string): Promise<string> {
    const snapshot = await this.db.object(`users/${uid}`).snapshotChanges().toPromise();
    return snapshot.payload.val().role;
  }
}
*/
import { Injectable, inject, signal } from "@angular/core";
import { Auth, user } from "@angular/fire/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { Observable, filter, from, map } from "rxjs";
import { UserInterface } from "./user.interface";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { UserData } from "./core/models/common.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";
@Injectable
({
  providedIn: 'root',
})
export class AuthService{
  /*constructor(private fireauth :AngularFireAuth, private router :Router){

  }
  login(
    email: string,
    password: string,
  ){
    this.fireauth.signInWithEmailAndPassword(email,password).then( ()=>{
        localStorage.setItem('token','true');
        this.router.navigate(['/home']);
    },err=>{
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }
  register(
    email: string,
    password: string,
  ){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=>{
       alert('Registration Successfull');
        this.router.navigate(['/login']);
    },err=>{
        alert(err.message);
        this.router.navigate(['/register']);
    })
  }
}*/
private isAuthenticated: boolean = false;
  firebaseAuth=inject(Auth);
  user$=user(this.firebaseAuth);
  currentUserSig= signal<UserData | null | undefined>(undefined);
  constructor(private db: AngularFireDatabase){}
  register(
    email: string,
    username: string,
    password: string,
    f_name:string,
    l_name:string,
  ): Observable<void>{
    const promise= createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then(response => updateProfile(response.user,{displayName: username}),
    );
    return from(promise);
  }
  login(
    email: string,
    password: string,
  ): Observable<void>{
    const promise= signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then(()=>{this.isAuthenticated = true;
      console.log("is authenticated")
    });

    return from(promise);

  }
  logout(): Observable<void>{
    const promise =signOut(this.firebaseAuth);
    this.isAuthenticated = false;
    return from(promise);

  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
  getUserRole(uid: string): Observable<string> {
    console.log({uid})
    return this.db.object<UserData>(`users/${uid}`).valueChanges()
      .pipe(
        filter(userData => !!userData), // Filter out null values
      map(userData => userData!.role)
      );
  }
}

