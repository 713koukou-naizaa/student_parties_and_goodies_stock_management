import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartiesService {
  private aAPIURL = 'http://localhost:8000/api/parties'; // Laravel API endpoint

  constructor(private http: HttpClient) {}

  getParties(): Observable<any> {
    return this.http.get(this.aAPIURL);
  }
}