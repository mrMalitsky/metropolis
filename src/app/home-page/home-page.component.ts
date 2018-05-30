import { Component, OnInit } from '@angular/core';
import {a} from '@angular/core/src/render3';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  activeColor = '#CC0000';
  defaultColor = '#00C3D9';
  tower = [
    {
      id: 0,
      position: '0 1 -3',
      height: '0.5',
      rotation: '0 45 0',
      color: '#ff0000'
    },
    {
      id: 1,
      position: '0 1.5 -3',
      height: '0.5',
      rotation: '0 45 0',
      color: '#ff0000'
    },
    {
      id: 2,
      position: '0 2 -3',
      height: '0.5',
      rotation: '0 45 0',
      color: '#ff0000'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public click(e: EventListener, i: number) {
    this.router.navigate(['/floor',  i ]);
  }

  public mouseEnter(id: number) {
    const hoveredFlor = this.tower.filter((flor) => flor.id === id)[0];
    hoveredFlor.color = '#a90000';
  }

  public mouseLeave(id: number) {
    const hoveredFlor = this.tower.filter((flor) => flor.id === id)[0];
    hoveredFlor.color = '#ff0000';
  }

}
