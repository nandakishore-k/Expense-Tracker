import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { routes } from './app.routes';
//import { firebaseConfig } from './core/constants/constants';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCX3D6AfHibLKQSa-Q6QDfnaNv5xCZPxss",
  authDomain: "expense-tracker-com.firebaseapp.com",
  databaseURL: "https://expense-tracker-com-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "expense-tracker-com",
  storageBucket: "expense-tracker-com.appspot.com",
  messagingSenderId: "979907193897",
  appId: "1:979907193897:web:aced0dc411ede9fab9c038"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),provideHttpClient(),
    importProvidersFrom([
      AngularFireModule.initializeApp(firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule,
     AngularFireDatabaseModule,
     provideFirebaseApp(()=>initializeApp(firebaseConfig)),
     provideAuth(() =>getAuth())
    
    ])]
};




