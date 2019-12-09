import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostadsService {
  SERVER_URL = 'http://localhost:4000';

  constructor(
    private http: HttpClient
  ) { }
  getAll() {
    return this.http.get(`${this.SERVER_URL}/postads`);
  }
  getMyAds() {
    return this.http.get(`${this.SERVER_URL}/postads`);
  }
  postAds(ads) {
    return this.http.post(`${this.SERVER_URL}/postads/newads`, ads);
  }
  
  updateRent(id: string, rents: any) {
    debugger
    return this.http.put(`${this.SERVER_URL}/postads/updaterents/${id}`, rents);

  }
  updateAmenities(id: string, amenities: any) {
    debugger
    return this.http.put(`${this.SERVER_URL}/postads/updateamenities/${id}`, amenities);

  }
}
