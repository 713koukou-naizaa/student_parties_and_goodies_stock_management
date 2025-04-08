import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent implements OnInit {
  aReservationsArray: any[] = [];
  aFilteredReservationsArray: any[] = [];
  aSortColumn: string = ''; // column to sort by
  aIsAscending: boolean = true; // sort direction
  aSearchQuery: string = '';
  aNewReservation: any = {
    student_name: '',
    student_email: '',
    student_phone: '',
    party_name: '',
    reservation_date: '',
    reservation_status: 'Confirmée',
    goodies: []
  };
  aIsEditing: boolean = false;
  aEditingReservation: any = {};

  constructor(private ReservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.ReservationsService.getReservations().subscribe((data) => {
      this.aReservationsArray = data;
      this.aFilteredReservationsArray = data;
    });
  }

  addReservation(): void {
    // convert goodies string to array
    this.aNewReservation.goodies = this.aNewReservation.goodies.split(',').map((g: string) => g.trim());

    this.ReservationsService.addReservation(this.aNewReservation).subscribe(() => {
      this.loadReservations(); // reload reservations after adding
      this.resetForm(); // reset form
    });
  }

  deleteReservation(index: number): void {
    const reservationToDelete = this.aFilteredReservationsArray[index];
  
    this.ReservationsService.deleteReservation(reservationToDelete).subscribe(() => {
      this.loadReservations(); // reload reservations after deleting
    });
  }

  editReservation(index: number): void {
    this.aIsEditing = true;
    this.aEditingReservation = { ...this.aFilteredReservationsArray[index] }; // clone reservation to avoid modifying original
  }

  updateReservation(): void {
    // convert goodies string to array
    if (typeof this.aEditingReservation.goodies === 'string') {
      this.aEditingReservation.goodies = this.aEditingReservation.goodies.split(',').map((g: string) => g.trim());
    }

    this.ReservationsService.updateReservation(this.aEditingReservation).subscribe(() => {
      this.loadReservations(); // reload reservations after updating
      this.aIsEditing = false; // leave exit mode
    });
  }

  cancelEdit(): void {
    this.aIsEditing = false;
    this.aEditingReservation = {};
  }

  resetForm(): void {
    this.aNewReservation = {
      student_name: '',
      student_email: '',
      student_phone: '',
      party_name: '',
      reservation_date: '',
      reservation_status: 'Confirmée',
      goodies: []
    };
  }

    /**
   * Sorts the reservations array by the specified column.
   * @param pColumn - The column to sort by.
   */
    sortReservations(pColumn: string): void {
      if (this.aSortColumn === pColumn) { this.aIsAscending = !this.aIsAscending; }
      else {
        this.aSortColumn = pColumn;
        this.aIsAscending = true; // sets ascending by default
      }
  
      /**
       * Sorts the reservations array by the specified column.
       * @param pColumn - The column to sort by.
       */
      this.aReservationsArray.sort((a: any, b: any) => {
        const valueA = a[pColumn];
        const valueB = b[pColumn];
  
        // if values are strings, use localeCompare to compare
        if (typeof valueA === 'string' && typeof valueB === 'string')
          {
            return this.aIsAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
          }
        // if values are dates, compare using getTime method
        // ternary operator : it verifies if aIsAscending is true,
        // if so it returns new Date(valueA).getTime() - new Date(valueB).getTime() which is the difference between the two dates,
        // if not it returns new Date(valueB).getTime() - new Date(valueA).getTime()
        // therefore in the end we get the difference between the two dates which is used to sort the array
        else if (valueA instanceof Date || valueB instanceof Date)
          {
          return this.aIsAscending ? new Date(valueA).getTime() - new Date(valueB).getTime() : new Date(valueB).getTime() - new Date(valueA).getTime();
        }
        // otherwise, compare the values using the minus operator
        else {
          return this.aIsAscending ? valueA - valueB : valueB - valueA;
        }
      });
    }

  /**
   * Filters the reservations array based on the search query.
   * The search query is searched in student name, email, phone, party name, and reservation status.
   * The results are stored in the aFilteredReservationsArray.
   */
  filterReservations(): void {
    const query = this.aSearchQuery.toLowerCase();
    this.aFilteredReservationsArray = this.aReservationsArray.filter((reservation) =>
      reservation.student_name.toLowerCase().includes(query) ||
      reservation.student_email.toLowerCase().includes(query) ||
      reservation.student_phone.toLowerCase().includes(query) ||
      reservation.party_name.toLowerCase().includes(query) ||
      reservation.reservation_status.toLowerCase().includes(query)
    );
  }
}
