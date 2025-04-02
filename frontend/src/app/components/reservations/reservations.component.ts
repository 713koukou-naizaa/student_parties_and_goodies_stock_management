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

  constructor(private ReservationsService: ReservationsService) {}

  ngOnInit(): void { this.ReservationsService.getReservations().subscribe((data) => { this.aReservationsArray = data }) }
}
