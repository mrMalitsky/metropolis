import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../shared/data/data.service';
import {Tower} from '../shared/tower.model';
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

export class HomePageComponent implements OnInit {
  activeColor = '#a90000';
  defaultColor = '#ff0000';
  // @todo: move to separate file/DB
  cityConfig = {
    towers: {
      scale: '.009 .009 .009',
      rotation: '0 -90 0',
    }
  };

  towers: Tower[] = [
    {
      id: '0',
      position: '9.277 0 6.91',
      rotation: this.cityConfig.towers.rotation,
      name: 'tower1',
      src: 'tower1',
      mtl: '',
      scale: this.cityConfig.towers.scale,
      sub_community: '1',
      community: '1',
      color: '',
    },
    {
      id: '1',
      position: '9.457 0 6.91',
      rotation: this.cityConfig.towers.rotation,
      name: 'tower1',
      src: 'tower1',
      mtl: '',
      scale: this.cityConfig.towers.scale,
      sub_community: '1',
      community: '1',
      color: '',
    },
    {
      id: '2',
      position: '9.637 0 7.26',
      rotation: this.cityConfig.towers.rotation,
      name: 'tower1',
      src: 'tower1',
      mtl: '',
      scale: this.cityConfig.towers.scale,
      sub_community: '1',
      community: '1',
      color: '',
    },
    {
      id: '3',
      position: '9.45 0 7.6',
      rotation: this.cityConfig.towers.rotation,
      name: 'tower1',
      src: 'tower1',
      mtl: '',
      scale: this.cityConfig.towers.scale,
      sub_community: '1',
      community: '1',
      color: '',
    },
    {
      id: '4',
      position: '9.087 0 6.91',
      rotation: this.cityConfig.towers.rotation,
      name: 'tower1',
      src: 'tower1',
      mtl: '',
      scale: this.cityConfig.towers.scale,
      sub_community: '1',
      community: '1',
      color: '',
    },
    {
      id: '5',
      position: '9.78 0 7.6',
      rotation: this.cityConfig.towers.rotation,
      name: 'tower1',
      src: 'tower1',
      mtl: '',
      scale: this.cityConfig.towers.scale,
      sub_community: '1',
      community: '1',
      color: '',
    },
    {
      id: '6',
      position: '9.78 0 6.89',
      rotation: this.cityConfig.towers.rotation,
      name: 'tower1',
      src: 'tower1',
      mtl: '',
      scale: this.cityConfig.towers.scale,
      sub_community: '1',
      community: '1',
      color: '',
    },
  ];
  towersDBTest: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dataService: DataService,
    // private _controllersService: ControllersService,
  ) { }

  ngOnInit() {
    // this.prepareTheTowerObject();
    this.towersDBTest = this._dataService.getData();

    console.log({Events: Events.prototype});
    console.log('AFRAME_INSPECTOR', AFRAME_INSPECTOR);
    console.log('AFRAME', AFRAME);
    AFRAME.INSPECTOR.on('objectchanged', (e) => {
      console.log({
        position: e.position.x + ' ' + e.position.y + ' ' + e.position.z,
        rotation: e.rotation.x + ' ' + e.rotation.y + ' ' + e.rotation.z,
        scale: e.scale.x + ' ' + e.scale.y + ' ' + e.scale.z,
      });
    });

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

  public prepareTheTowerObject() {

    this.towers = {
      ...this.towers,
      ...this.getTowerBase(1)
    };
  }

  private getTowerBase(id): Tower[] {
    return [
      {
        id: '0',
        position: '9.277 0 6.91',
        rotation: this.cityConfig.towers.rotation,
        name: 'tower1',
        src: 'tower1',
        mtl: '',
        scale: this.cityConfig.towers.scale,
        sub_community: '1',
        community: '1',
        color: '',
      }
    ];
  }

}
