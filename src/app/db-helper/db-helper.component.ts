import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TowersService} from '../shared/services/towers/towers.service';
import {Tower} from '../shared/tower.model';
import {FormControl, FormGroup} from '@angular/forms';
import {AframeInspectorEventsEnum} from './aframe-inspector-events.enum';
const AFRAME = require('aframe');

@Component({
  selector: 'app-db-helper',
  templateUrl: './db-helper.component.html',
  styleUrls: ['./db-helper.component.scss']
})
export class DbHelperComponent implements OnInit {

  newTowerForm = new FormGroup({
    towerType: new FormControl(''),
    community: new FormControl(''),
    subCommunity: new FormControl(''),
  });

  selectedTower: Tower;
  towersTypes: string[] = [];

  constructor(private _towersService: TowersService) { }

  ngOnInit() {

    // Set first tower type as a diffolt
    this.newTowerForm.controls['towerType'].setValue(this.towersTypes[0], {onlySelf: true});

    // Init tower sources
    this._initTowerSrc();

    // Add listeners for 3D scene objects
    AFRAME.INSPECTOR.on(AframeInspectorEventsEnum.change, this._onObjectChanged);
    AFRAME.INSPECTOR.on(AframeInspectorEventsEnum.select, this._onObjectSelected);
  }

  public onClickSave(): void {
    const tower = {...this.selectedTower};
    // Clear Id from the tower model
    delete tower.id;
    console.log(tower);
    this._towersService.updateTower(this.selectedTower.id, tower);
  }

  public onAddTower(): void {

    const newTower: Tower = this._towersService.getTowerBase(this.newTowerForm.value);

    // Add tower to the scene
    this._towersService.addTowerToScene(newTower);

    // Add tower to the DB and list
    this._towersService.insertTower(newTower);
  }

  private _onObjectChanged = (e) => {
    // console.log(e);
    this.selectedTower = {
      ...this.selectedTower,
      ...{
        id: e.el.dataset.id,
        position: {
          x:  String(e.position.x.toFixed(3)),
          y:  String(e.position.y.toFixed(3)),
          z:  String(e.position.z.toFixed(3)),
        },
        rotation: {
          x: (e.rotation.x * (180 / Math.PI)).toFixed(2),
          y: (e.rotation.y * (180 / Math.PI)).toFixed(2),
          z: (e.rotation.z * (180 / Math.PI)).toFixed(2),
        },
        scale: { x: e.scale.x.toFixed(3), y: e.scale.y.toFixed(3), z: e.scale.z.toFixed(3) },
        src:  e.el.attributes.src.value.substring(1, e.el.attributes.src.value.length),
        subCommunity:  e.parent.el.dataset.id,
      }
    };
  }

  private _onObjectSelected = (e) => {
    // console.log(e);
    this.selectedTower = {
      ...this._towersService.getTowerBase({towerType: 'tower1'}),
      ...{
        id: e.el.dataset.id,
        position: {
          x: e.position.x.toFixed(3),
          y:  e.position.y.toFixed(3),
          z: e.position.z.toFixed(3),
        },
        rotation: {
          x: (e.rotation.x * (180 / Math.PI)).toFixed(2),
          y: (e.rotation.y * (180 / Math.PI)).toFixed(2),
          z: (e.rotation.z * (180 / Math.PI)).toFixed(2),
        },
        scale: { x: e.scale.x.toFixed(3), y: e.scale.y.toFixed(3), z: e.scale.z.toFixed(3) },
        src:  e.el.attributes.src.value.substring(1, e.el.attributes.src.value.length),
        subCommunity:  e.parent.el.dataset.id,
      }
    };
  }

  /**
   * Init all possible towers src's
   */
  private _initTowerSrc(): void {
    for (let x = 56; x--; ) {
      this.towersTypes.push(`tower${x}`);
    }
    this.towersTypes.push('tree_l');
    this.towersTypes.push('tree_s');
  }
}
