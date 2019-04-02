import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Tower} from '../../tower.model';
import {CITY_CONFIG} from '../../configurations/city';
import {Observable} from 'rxjs';
import {DataService} from '../../data/data.service';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TowersService {

  public towersList$: Observable<Tower[]>;

  constructor(private firebase: AngularFireDatabase,
              private _dataService: DataService) { }

  /**
   * Get tower models form DB
   */
  getTowersList(): Observable<Tower[]> {
    this.towersList$ = this._dataService.getData()
      .snapshotChanges()
      .pipe(
        map(
          // Add id property tio Tower model for changing manipulations
          actions =>
            actions.map(a => ({ id: a.payload.doc.id, ...a.payload.doc.data() }))
        ),
      );

    return this.towersList$;
  }

  /**
   * Add new tower to DB collection
   */
  public insertTower(tower: Tower): void {
    this._dataService.addData(tower);
  }

  /**
   * Update tower
   * @param {string} key
   * @param {Tower} tower
   */
  public updateTower(key: string, tower: Tower) {
    this._dataService.updateData(key, tower);
  }

  /**
   * Delete tower
   * @param {string} key
   */
  public deleteTower(key: string) {
    this._dataService.removeData(key);
  }

  public getTowerBase(options: {towerType: string, community?: string, subCommunity?: string}): Tower {
    return {
      position: CITY_CONFIG.towers.position,
      rotation: CITY_CONFIG.towers.rotation,
      name: 'tower name',
      src: options.towerType,
      mtl: '',
      scale: CITY_CONFIG.towers.scale,
      subCommunity: options.subCommunity || '',
      community: options.community || '',
      color: '',
    };
  }

  /**
   * Add tower to the HTML scene
   */
  public addTowerToScene(newTower: Tower): void {
    const el = document.createElement('a-obj-model');
    el.setAttribute('data-id', newTower.id);
    el.setAttribute('src', '#' + newTower.src);
    el.setAttribute('position', `${newTower.position.x} ${newTower.position.y} ${newTower.position.z}`);
    el.setAttribute('scale', `${newTower.scale.x} ${newTower.scale.y} ${newTower.scale.z}`);
    el.setAttribute('rotation', `${newTower.rotation.x} ${newTower.rotation.y} ${newTower.rotation.z}`);
    document.querySelector('a-scene').appendChild(el);
  }

}
