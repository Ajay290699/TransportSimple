import { Component } from '@angular/core';
import { Trip } from './Model/Trip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment';

  tripList: Trip[] = [];

  onTripAdded(trip: Trip) {
    this.tripList = [...this.tripList, trip];
  }
}
