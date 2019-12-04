import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
SERVER_URL = 'http://localhost:4000';

  constructor(
    private http:HttpClient
  ) { }
  getAll() {
    return this.http.get(`${this.SERVER_URL}/users`);
}
register(user) {
  // debugger
  return this.http.post(`${this.SERVER_URL}/users/register`, user);
}

}
