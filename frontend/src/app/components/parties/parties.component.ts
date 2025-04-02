import { Component, OnInit } from '@angular/core';
import { PartiesService } from '../../services/parties.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parties',
  imports: [RouterModule, CommonModule],
  templateUrl: './parties.component.html',
  styleUrl: './parties.component.scss'
})
export class PartiesComponent implements OnInit {
  aPartiesArray: any[] = [];
  aIsAscending: boolean = true; // sort state toggle

  constructor(private PartiesService: PartiesService) {}

  ngOnInit(): void {
    this.PartiesService.getParties().subscribe((data) => {
      this.sortParties(data);
    });
  }

  /**
   * Toggles the sort state of the parties array between ascending and descending order.
   * 
   * This method reverses the value of the aIsAscending property and then calls
   * the private sortParties method to re-sort the array of parties. The
   * parties are sorted in ascending order when aIsAscending is true, and in
   * descending order when aIsAscending is false.
   */
  toggleSortOrder(): void {
    this.aIsAscending = !this.aIsAscending; // toggle sort state
    this.sortParties(this.aPartiesArray);
  }

/**
 * Sorts the array of parties based on their date_time property.
 * 
 * @param pPartiesArray - An array of party objects to be sorted.
 * 
 * The sorting is done in ascending or descending order depending 
 * on the value of aIsAscending. If aIsAscending is true, the 
 * parties are sorted in ascending order; otherwise, in descending order.
 */

  private sortParties(pPartiesArray: any[]): void {
    this.aPartiesArray = pPartiesArray.sort((a: any, b: any) => {
      const comparison = new Date(a.date_time).getTime() - new Date(b.date_time).getTime();
      return this.aIsAscending ? comparison : -comparison;
    });
  }
}
