import { Component, OnInit } from '@angular/core';
import { GoodiesService } from '../../services/goodies.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goodies',
  imports: [RouterModule, CommonModule],
  templateUrl: './goodies.component.html',
  styleUrl: './goodies.component.scss'
})
export class GoodiesComponent implements OnInit {
  aGoodiesArray: any[] = [];

  constructor(private goodiesService: GoodiesService) {}

  ngOnInit(): void { this.goodiesService.getGoodies().subscribe((data) => { this.aGoodiesArray = data }) }
}
