import {Component, Input, OnInit} from '@angular/core';
import {Tower} from '../shared/tower.model';

@Component({
  selector: 'app-object-info',
  templateUrl: './object-info.component.html',
  styleUrls: ['./object-info.component.scss']
})
export class ObjectInfoComponent implements OnInit {

  @Input()
  set element(tower: Tower) {
    this.isVisible = !!tower.id;
    console.log(this.isVisible);
  }

  isVisible: boolean;

  constructor(
  ) { }

  ngOnInit() {
  //  Nothing for now
  }


}
