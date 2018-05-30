import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {Floor} from '../../shared/floor';

const FLOORS = [
  new Floor(1, 'Mr. Nice'),
  new Floor(2, 'Narco'),
  new Floor(3, 'Bombasto'),
  new Floor(4, 'Celeritas'),
  new Floor(5, 'Magneta'),
  new Floor(6, 'RubberMan')
];

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  constructor() { }

  getFloors() { return of(FLOORS); }

  getFloor(id: number | string) {
    console.log('sddsf', id);
    return this.getFloors().pipe(
      map(floors => floors.find(floor => floor.id === +id))
    );
  }
}
