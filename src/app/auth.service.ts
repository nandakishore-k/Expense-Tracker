import { Injectable, inject } from "@angular/core";
import { Observable, from } from "rxjs";
import { Auth } from "@angular/fire/auth"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    firebaseAuth = inject(Auth)

    register(email: string,username:string,password:string):Observable<void>{
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        ).then(response => updateProfile(response.user,{displayName:username}))

        return from(promise);
    }
}

