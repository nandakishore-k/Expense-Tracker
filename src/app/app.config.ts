import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { routes } from './app.routes';
import { firebaseConfig } from './core/constants/constants';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';



//fireabse config imported from core


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




