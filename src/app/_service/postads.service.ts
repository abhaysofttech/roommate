import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostadsService {
  // SERVER_URL = 'http://localhost:4000';

  constructor(
    private http: HttpClient
  ) { }
  // getAllAds(reqGender) {
  //   return this.http.get(`${SERVER_URL}/postads`);
  // }
  getAllAds(reqGender) {
    return this.http.get(`${SERVER_URL}/postads/reqGender/${reqGender}`);
  }
  getCities(){
    return this.http.get(`${SERVER_URL}/postads/cities`);

  }
  getAreas(param){
    return this.http.get(`${SERVER_URL}/postads/areas/${param}`);

  }
  searchAds(options){
    return this.http.post(`${SERVER_URL}/postads`, options);

  }
  getMyAds(adId) {
        return this.http.get(`${SERVER_URL}/postads/myads/${adId}`);
  }
  getAdsDetails(adId) {
    return this.http.get(`${SERVER_URL}/postads/${adId}`);
}
  postAds(ads:string) {
    return this.http.post(`${SERVER_URL}/postads/newads`, ads);
  }
  
  updateRent(id: string, rents: any) {
        return this.http.put(`${SERVER_URL}/postads/updaterents/${id}`, rents);

  }
  updateAmenities(id: string, amenities: any) {
        return this.http.put(`${SERVER_URL}/postads/updateamenities/${id}`, amenities);

  }
}
