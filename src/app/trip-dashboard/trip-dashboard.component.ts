import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Trip } from '../Model/Trip';

@Component({
  selector: 'app-trip-dashboard',
  templateUrl: './trip-dashboard.component.html',
  styleUrls: ['./trip-dashboard.component.scss']
})
export class TripDashboardComponent implements OnInit, OnChanges {

  @Input() trips: Trip[] = [];
  level1Trips: any[] = [];
  level2Trips: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.setLevels();
  }


  setLevels() {
    this.level1Trips = [];
    this.level2Trips = [];

    this.trips.forEach((trip, i, arr) => {
      if (i === 0) {
        this.level1Trips.push(trip);
        return;
      }

      const prev = arr[i - 1];

      if (trip.start === prev.end) {
        this.level1Trips.push(trip);
      } else if (trip.start === prev.start && trip.end === prev.end) {
        this.level2Trips.push(trip);
      } else {
        this.level1Trips.push(trip);
      }
    });
  }

  isArrow(curr: any, prev: any): boolean {
    return prev && prev.end !== curr.start;
  }

  getShort(code: string): string {
    return code?.substring(0, 3).toUpperCase();
  }

}
