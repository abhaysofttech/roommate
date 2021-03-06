import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class LoginServiceService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    // SERVER_URL = 'http://localhost:4000';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('roommate')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('roommate')));
        return this.currentUserSubject.value;
    }

    login(phonenumber, password) {
        return this.http.post<any>(`${SERVER_URL}/users/authenticate`, { phonenumber, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('roommate', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('roommate');
        this.currentUserSubject.next(null);
    }
}