import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Trip } from '../Model/Trip';

@Component({
  selector: 'app-trip-input',
  templateUrl: './trip-input.component.html',
  styleUrls: ['./trip-input.component.scss']
})
export class TripInputComponent implements OnInit {

  start: string = '';
  end: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  @Output() tripAdded = new EventEmitter<Trip>();

  addTrip() {
    if (this.start && this.end) {
      this.tripAdded.emit({ start: this.start, end: this.end });
      this.start = '';
      this.end = '';
    }
  }

}