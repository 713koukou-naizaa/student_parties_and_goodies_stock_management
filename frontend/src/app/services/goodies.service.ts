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

  addGoodie(goodie: any): Observable<any> { return this.http.post<any>(this.aAPIURL, goodie); }

  deleteGoodie(goodie: any): Observable<any> { return this.http.request('delete', this.aAPIURL, { body: goodie }); }

  updateGoodie(goodie: any): Observable<any> {
    const url = `${this.aAPIURL}/${goodie.goodie_name}`; // use goodie name as identifier
    return this.http.put<any>(url, goodie);
  }
}