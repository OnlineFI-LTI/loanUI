import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppData} from '../appData';

@Injectable({
  providedIn: 'root'
})
export class LoanServiceService {

  constructor(private http: HttpClient) { }

  getloanOverdues(username): any {
    return this.http.get(`http://localhost:8011/loans-ws/loans/loanOverdues/${username}`);
  }

  getloanOutstandings(username): any {
    return this.http.get(`http://localhost:8011/loans-ws/loans/loanOutstandings/${username}`);
  }

  getlocationSummary(username): any {
    return this.http.get(`http://localhost:8011/locations-ws/locations/locationSummary/${username}`);
  }

  getApplicationSummary() {
    return this.http.get<AppData[]>('http://127.0.0.1:5000/loanApplication');
  }
}
