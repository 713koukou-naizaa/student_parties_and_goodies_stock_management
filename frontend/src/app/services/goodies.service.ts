import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoodiesService {
  private aAPIURL = 'http://localhost:8000/api/goodies'; // Laravel API endpoint

  constructor(private http: HttpClient) {}

  getGoodies(): Observable<any> { return this.http.get(this.aAPIURL); }
}