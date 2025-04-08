import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartiesService {
  private aAPIURL = 'http://localhost:8000/api/parties'; // Laravel API endpoint

  constructor(private http: HttpClient) {}

  getParties(): Observable<any> { return this.http.get(this.aAPIURL); }

  addParty(party: any): Observable<any> { return this.http.post<any>(this.aAPIURL, party); }
  
  updateParty(party: any): Observable<any> {
    const url = `${this.aAPIURL}/${party.id}`;
    return this.http.put<any>(url, party);
  }

  // used to delete a party by sending DELETE request with party data and party name
  deleteParty(party: any): Observable<any> { return this.http.request('delete', this.aAPIURL, { body: { party_name: party.party_name } }); }
}