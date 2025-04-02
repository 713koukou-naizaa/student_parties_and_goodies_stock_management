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

  constructor(private PartiesService: PartiesService) {}

  ngOnInit(): void { this.PartiesService.getParties().subscribe((data) => { this.aPartiesArray = data }) }
}
