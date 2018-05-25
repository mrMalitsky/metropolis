import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  activeColor = '#CC0000';
  defaultColor = '#00C3D9';

  constructor() { }

  ngOnInit() {
  }

  public mouseEnter(e: EventListener) {
    console.log(e);
  }

  public mouseLeave(e: EventListener) {
    console.log(e);
  }

}
