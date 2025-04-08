import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservations',
  imports: [RouterModule, CommonModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent implements OnInit {
  aReservationsArray: any[] = [];
  aSortColumn: string = ''; // column to sort by
  aIsAscending: boolean = true; // sort direction

  constructor(private ReservationsService: ReservationsService) {}

  ngOnInit(): void { this.ReservationsService.getReservations().subscribe((data) => { this.aReservationsArray = data }) }

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
}
