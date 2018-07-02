import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Tower} from '../tower.model';

@Injectable({
  providedIn: 'root'
})
export class TowersService {

  public towersList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getTowersList() {
    this.towersList = this.firebase.list('towers');
    return this.towersList;
  }

  insertTower(tower: Tower) {
    this.towersList.push({
      ...tower,
    });
  }

  updateTower(tower: Tower) {
    this.towersList.update(tower.$key, {
      ...tower,
    });
  }

  deleteTower({$key}: Partial<Tower>) {
    this.towersList.remove($key);
  }
}
