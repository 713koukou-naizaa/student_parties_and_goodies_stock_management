import { Component, OnInit } from '@angular/core';
import { PartiesService } from '../../services/parties.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-parties',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './parties.component.html',
  styleUrl: './parties.component.scss'
})
export class PartiesComponent implements OnInit {
  aPartiesArray: any[] = [];
  aFilteredPartiesArray: any[] = []; // filtered array after search
  aSearchQuery: string = ''; // search query when searching for parties
  aIsAscending: boolean = true; // sort state toggle

  constructor(private PartiesService: PartiesService) {}

  ngOnInit(): void {
    this.PartiesService.getParties().subscribe((data) => {
      this.aPartiesArray = data;
      this.aFilteredPartiesArray = data;
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
      return this.aIsAscending ? comparison : -comparison; // ternary operator : it verifies if aIsAscending is true, if so it returns comparison, if not it returns -comparison
    });
  }

  /**
   * Filters the array of parties based on the search query.
   *
   * This method updates the aFilteredPartiesArray with parties whose
   * name, location, or theme includes the current aSearchQuery,
   * ignoring case. The search query is converted to lowercase to ensure
   * a case-insensitive search.
   */

  filterParties(): void {
    const searchQuery = this.aSearchQuery.toLowerCase(); // standardize search query
    // filter the array of parties by verifying if the search query is included in the party name, location, or theme of the party
    this.aFilteredPartiesArray = this.aPartiesArray.filter((party) =>
      party.party_name.toLowerCase().includes(searchQuery) ||
      party.location.toLowerCase().includes(searchQuery) ||
      party.theme.toLowerCase().includes(searchQuery)
    );
  }
}
