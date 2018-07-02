import { Component, OnInit } from '@angular/core';
import {a} from '@angular/core/src/render3';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  activeColor = '#a90000';
  defaultColor = '#ff0000';
  tower = [
    {
      id: 0,
      position: '5 0.1 -7',
      height: '0.2',
      rotation: '0 45 0',
      color: this.defaultColor,
      scale: '1 1 1',
    },
    {
      id: 1,
      position: '5 0.25 -7',
      height: '0.1',
      rotation: '0 45 0',
      color: this.defaultColor,
      scale: '0.9 1 0.9'
    },
    {
      id: 2,
      position: '5 0.4 -7',
      height: '0.2',
      rotation: '0 45 0',
      color: this.defaultColor,
      scale: '1 1 1',
    },
    {
      id: 3,
      position: '5 0.55 -7',
      height: '0.1',
      rotation: '0 45 0',
      color: this.defaultColor,
      scale: '0.9 1 0.9'
    },
    {
      id: 4,
      position: '5 0.70 -7',
      height: '0.2',
      rotation: '0 45 0',
      color: this.defaultColor,
      scale: '1 1 1',
    },
    {
      id: 5,
      position: '5 0.85 -7',
      height: '0.1',
      rotation: '0 45 0',
      color: this.defaultColor,
      scale: '0.9 1 0.9'
    },
    {
      id: 6,
      position: '5 1 -7',
      height: '0.2',
      rotation: '0 45 0',
      color: this.defaultColor,
      scale: '1 1 1',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.prepareTheTowerObject();
  }

  public click(e: EventListener, i: number) {
    // this.router.navigate(['/floor',  i ]);
    console.log(e);
  }

  public mouseEnter(id: number) {
    const hoveredFlor = this.tower.filter((flor) => flor.id === id)[0];
    hoveredFlor.color = this.activeColor;
  }

  public mouseLeave(id: number) {
    const hoveredFlor = this.tower.filter((flor) => flor.id === id)[0];
    hoveredFlor.color = this.defaultColor;
  }

  public prepareTheTowerObject() {

    this.tower = {
      ...this.tower,
      ...this.getTowerBase(1)
    };
  }

  private getTowerBase(id) {
    return [
      {
        id: id,
        position: '5 0.1 -7',
        height: '0.2',
        rotation: '0 45 0',
        color: this.defaultColor,
        scale: '1 1 1',
      },
      {
        id: ++id,
        position: '5 0.25 -7',
        height: '0.1',
        rotation: '0 45 0',
        color: this.defaultColor,
        scale: '0.9 1 0.9'
      },
    ];
  }

}
