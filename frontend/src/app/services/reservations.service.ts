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

  // used to add a new reservation by sending POST request with reservation data
  addReservation(reservation: any): Observable<any> { return this.http.post<any>(this.aAPIURL, reservation); }

  // used to delete a reservation by sending DELETE request with reservation data
  deleteReservation(reservation: any): Observable<any> { return this.http.request('delete', `${this.aAPIURL}`, { body: reservation }); }

  // used to edit a reversation by sending a PUT request with reservation data
  updateReservation(reservation: any): Observable<any>
  {
    const URL = `${this.aAPIURL}/${reservation.id}`; // include reservation ID in URL
    return this.http.put<any>(URL, reservation);
  }
}