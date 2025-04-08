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
  aNewGoodie: any = {
    goodie_name: '',
    quantity_available: 0,
    description: '',
    unit_cost: 0
  };
  aIsEditingQuantity: boolean = false;
  aEditingGoodie: any = {};

  constructor(private goodiesService: GoodiesService) {}

  ngOnInit(): void {
    this.loadGoodies();
  }

  loadGoodies(): void {
    this.goodiesService.getGoodies().subscribe((data) => {
      this.aGoodiesArray = data;
      this.aFilteredGoodiesArray = data;
    });
  }

  addGoodie(): void {
    this.goodiesService.addGoodie(this.aNewGoodie).subscribe(() => {
      this.loadGoodies();
      this.aNewGoodie = {
        goodie_name: '',
        quantity_available: 0,
        description: '',
        unit_cost: 0
      };
    });
  }

  deleteGoodie(index: number): void {
    const goodieToDelete = this.aFilteredGoodiesArray[index];
    this.goodiesService.deleteGoodie(goodieToDelete).subscribe(() => {
      this.loadGoodies();
    });
  }

  startEditQuantity(index: number): void {
    this.aIsEditingQuantity = true;
    this.aEditingGoodie = { ...this.aFilteredGoodiesArray[index] }; // clone goodie to avoid modifying original
  }

  updateGoodieQuantity(): void {
    this.goodiesService.updateGoodie(this.aEditingGoodie).subscribe(() => {
      this.loadGoodies(); // reload goodies after updating
      this.aIsEditingQuantity = false; // exit edit mode
    });
  }

  cancelEditQuantity(): void {
    this.aIsEditingQuantity = false;
    this.aEditingGoodie = {};
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
