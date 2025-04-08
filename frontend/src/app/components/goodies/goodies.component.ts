import { Component, OnInit } from '@angular/core';
import { GoodiesService } from '../../services/goodies.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goodies',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './goodies.component.html',
  styleUrl: './goodies.component.scss'
})
export class GoodiesComponent implements OnInit {
  aGoodiesArray: any[] = [];
  aFilteredGoodiesArray: any[] = [];
  aSearchQuery: string = '';

  constructor(private goodiesService: GoodiesService) {}

  ngOnInit(): void {
    this.goodiesService.getGoodies().subscribe((data) => {
      this.aGoodiesArray = data;
      this.aFilteredGoodiesArray = data;
    });
  }

  /**
   * Filters the list of goodies based on the current search query.
   * Updates the `aFilteredGoodiesArray` property with goodies that match
   * the search query in either their name or description.
   *
   * The search is case-insensitive.
   */
  filterGoodies(): void {
    const query = this.aSearchQuery.toLowerCase();
    this.aFilteredGoodiesArray = this.aGoodiesArray.filter((goodie) =>
      goodie.goodie_name.toLowerCase().includes(query) ||
      goodie.description.toLowerCase().includes(query)
    );
  }
}
