import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../shared/data/data.service';
import {Tower} from '../shared/tower.model';
import {CITY_CONFIG} from '../shared/configurations/city';
import {TowersService} from '../shared/services/towers/towers.service';
import {Observable, Subscribable, Subscriber, Subscription} from 'rxjs';
import {TowersListInterface} from '../shared/services/interfaces/towers-list';
// import {ControllersService} from '../shared/services/controllers/controllers.service';
const AFRAME_INSPECTOR = require('aframe-inspector');
const AFRAME = require('aframe');
// const Events = require('events').EventEmitter;
const Events = require('aframe-inspector/src/lib/Events');

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit, OnDestroy {
  activeColor = '#a90000';
  defaultColor = '#ff0000';

  towersList: TowersListInterface[] = [];
  towerSubscribe: Subscription;
  towerTypes: Iterable<string>;

  constructor(
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    private router: Router,
    private _dataService: DataService,
    private _towersService: TowersService,
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

  public click(e: EventListener, i: number) {
    // this.router.navigate(['/floor',  i ]);
    console.log(e);
  }

  // public mouseEnter(id: number) {
  //   const hoveredFlor = this.towers.filter((flor) => flor.id === id)[0];
  //   hoveredFlor.color = this.activeColor;
  // }
  //
  // public mouseLeave(id: number) {
  //   const hoveredFlor = this.towers.filter((flor) => flor.id === id)[0];
  //   hoveredFlor.color = this.defaultColor;
  // }

  // public prepareTheTowerObject() {
  //
  //   this.towers = {
  //     ...this.towers,
  //     ...this._towersService.getTowerBase({'tower1', '1' ,'1'})
  //   };
  // }

  private _initTowerList() {

    this.towerSubscribe = this._towersService.getTowersList()
      .subscribe(towers => {
        const towerListTemp: TowersListInterface[] = [];
        // @todo: Need to optimize it
        towers.map(item => {
          towerListTemp[item.subCommunity] = towerListTemp[item.subCommunity] ?
            [item, ...towerListTemp[item.subCommunity]] :
            [item];
        });

        // Added for preventing refreshing models list after updating data
        this.towersList = this.towersList.length ? this.towersList : towerListTemp;
        this.towerTypes = new Set(towers.map(tower => tower.src));
      });
  }

}
