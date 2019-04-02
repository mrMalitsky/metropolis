import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {FloorModel} from '../../shared/floor.model';

const FLOORS = [
  new FloorModel(1, 'Mr. Nice'),
  new FloorModel(2, 'Narco'),
  new FloorModel(3, 'Bombasto'),
  new FloorModel(4, 'Celeritas'),
  new FloorModel(5, 'Magneta'),
  new FloorModel(6, 'RubberMan')
];

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  constructor() { }

  getFloors() { return of(FLOORS); }

  getFloor(id: number|string) {
    console.log('sddsf', id);
    return this.getFloors().pipe(
      map(floors => floors.find(floor => floor.id === +id))
    );
  }
}
