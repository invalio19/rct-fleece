import { Injectable } from '@angular/core';
import { Ride } from '../models/ride.model';

@Injectable({
  providedIn: 'root'
})
export class RideDuplicateFlaggerService {
  flag(rides: Ride[]) { // todo: make more efficient
    const dupes: string[] = [];
    const checked: string[] = [];
    for (const ride of rides) {
      if (ride.type === undefined) {
        continue;
      }

      const id = ride.type.id;
      if (!checked.includes(id)) {
        checked.push(id);
      }
      else {
        dupes.push(id);
      }
    }

    for (const ride of rides) {
      if (ride.type !== undefined) {
        ride.isDuplicate = dupes.includes(ride.type.id);
      }
    }
  }
}
