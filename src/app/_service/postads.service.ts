import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostadsService {
  SERVER_URL = 'http://localhost:4000';

  constructor(
    private http:HttpClient
  ) { }
  getAll(){
    return this.http.get(`${this.SERVER_URL}/postads`);
  }
  postadsf(ads){
    return this.http.post(`${this.SERVER_URL}/postads/newads`, ads);
  }
}
