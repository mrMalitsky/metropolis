import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../shared/data/data.service';
import {Tower} from '../shared/tower.model';
import {TowersService} from '../shared/services/towers/towers.service';
import {TooltipComponent} from '../shared/a-frame-components/tooltip.component';
const AFRAME_INSPECTOR = require('aframe-inspector');
const AFRAME = require('aframe');
const ENVIRONMENT = require('aframe-environment-component');
const Events = require('aframe-inspector/src/lib/Events');

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit, OnDestroy {
  towersList: Tower[][] = [];
  activeTower: Tower;
  towerSubscribe: Subscription;
  towerTypes: Iterable<string>;

  constructor(
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    private router: Router,
    private _dataService: DataService,
    private _towersService: TowersService,
    private _tooltipComponent: TooltipComponent,
  ) { }

  ngOnInit() {
    // this.prepareTheTowerObject();
    this._initTowerList();
    // Init controllers
    // this._controllersService.initControllers();

    // AFRAME.registerComponent('hello-world', {
    //   init: function () {
    //     // Emitted only when scene start running
    //     console.log('Hello, World!');
    //   }
    // });


    // console.log(registerComponent);

    // The better way to modify te obj properties (directly at the three.js level)
    // const cameraEl = document.querySelector('[camera]');
    // entityEl.object3D.position.set(1, 2, 3);
    // entityEl.object3D.position.x += 5;
  }


  ngOnDestroy() {
    this.towerSubscribe.unsubscribe();
  }

  /**
   * On click handler
   */
  public onClick(e: any, id: string) {
    console.log(e, e.target.object3D.position);
    this.activeTower = this._towersService.selectTower(this.towersList, id);
    this._towersService.addTooltip(this.activeTower);

    const scene = document.querySelector('a-scene');
    const box = document.createElement('a-cube');
    scene.appendChild(box);
    box.setAttribute('id', 'highlighter');
    box.setAttribute('color', '#ff0024');
    box.setAttribute('height', '2');
    box.setAttribute('width', '2');
    box.setAttribute('position', `${e.target.object3D.position.x} ${e.target.object3D.position.y} ${e.target.object3D.position.z}`);
    console.log(box);
  }

  public mouseEnter(id: number) {
    // Nothing fo now
  }

  public mouseLeave(id: number) {
    // Nothing fo now
  }

  private _initTowerList() {

    this.towerSubscribe = this._towersService.getTowersList()
      .subscribe(towers => {
        const towerListTemp: Tower[][] = [];
        // @todo: Need to optimize it
        towers.map(item => {
          towerListTemp[item.subCommunity] = towerListTemp[item.subCommunity] ?
            [item, ...towerListTemp[item.subCommunity]] :
            [item];
        });
        console.log(towerListTemp);

        // Added for preventing refreshing models list after updating data
        this.towersList = this.towersList.length ? this.towersList : towerListTemp;
        this.towerTypes = new Set(towers.map(tower => tower.src));
      });
  }

}
