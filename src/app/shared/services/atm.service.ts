import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AtmDto} from '../../model/atm-dto';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  headers = new HttpHeaders();
  URL = 'http://localhost:8080/atm';

  constructor(private http: HttpClient) {
    // this.headers.append('Access-Control-Allow-Headers',  'Content-Type');
    // this.headers.append('Access-Control-Allow-Methods',  'GET');
    // this.headers.append('Access-Control-Allow-Origin',  '*');
    // this.headers.append('Authorization',  'Basic YWRtaW46YWRtaW4=');
  }

  getAllAtm() {
    console.log('All');
    return this.http.get(this.URL);
  }

  getFilteredAtm(atmDto: AtmDto) {
      console.log('Filtered');
      return this.http.post(this.URL + '/filtered', atmDto);
  }


}
