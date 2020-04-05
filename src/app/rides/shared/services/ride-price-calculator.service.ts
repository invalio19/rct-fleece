import { Injectable } from '@angular/core';

import { GameVersion } from './../game-version';
import { Ride } from '../models/ride.model';
import { RideAgeRepositoryService } from './ride-age-repository.service';

@Injectable({
  providedIn: 'root'
})
export class RidePriceCalculatorService {
  constructor (private rideAgeRepositoryService: RideAgeRepositoryService) {}

  calculateMax(ride: Ride, gameVersion: GameVersion): number {
    let ridePrice = this.calculate(ride, gameVersion);
    if (ridePrice === undefined) {
      return undefined;
    }

    ridePrice *= 2;
    ridePrice -= 1; // Minus 10p to get maximum price guests will pay
    ridePrice = Math.max(0, ridePrice); // Above step could bring this to -10p
    ridePrice = Math.min(200, ridePrice); // Cap at £20
    ridePrice /= 10;

    return ridePrice;
  };

  calculateMin(ride: Ride, gameVersion: GameVersion): number {
    let ridePrice = this.calculate(ride, gameVersion);
    if (ridePrice === undefined) {
      return undefined;
    }

    ridePrice = Math.floor(ridePrice / 2);
    ridePrice = Math.min(200, ridePrice); // Cap at £20
    ridePrice /= 10;

    return ridePrice;
  }

  private calculate(ride: Ride, gameVersion: GameVersion): number {
    if (ride.type === undefined) {
      return undefined;
    }

    // tslint:disable:no-bitwise
    let ridePrice =
      ((ride.excitement * 100 * ride.type.excitement * 32) >> 15) +
      ((ride.intensity * 100 * ride.type.intensity * 32) >> 15) +
      ((ride.nausea * 100 * ride.type.nausea * 32) >> 15);
    // tslint:enable:no-bitwise

    const rideAgeData = this.rideAgeRepositoryService.get(ride.age, gameVersion);

    ridePrice *= rideAgeData[1];
    ridePrice = Math.floor(ridePrice / rideAgeData[2]);
    ridePrice += rideAgeData[3];

    if (ride.isDuplicate) {
      ridePrice -= Math.floor(ridePrice / 4);
    }

    return ridePrice;
  }
}