import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private aAPIURL = 'http://localhost:8000/api/reservations'; // Laravel API endpoint

  constructor(private http: HttpClient) {}

  getReservations(): Observable<any> { return this.http.get(this.aAPIURL); }

  // used to add a new reservation by sending POST request with observation data
  addReservation(reservation: any): Observable<any> { return this.http.post<any>(this.aAPIURL, reservation); }
}