import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
// SERVER_URL = 'http://localhost:4000';

  constructor(
    private http:HttpClient
  ) { }
  getAll() {
    return this.http.get(`${SERVER_URL}/users`);
}
register(user) {
  // debugger
  return this.http.post(`${SERVER_URL}/users/register`, user);
}

}
