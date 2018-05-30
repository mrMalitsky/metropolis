import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {switchMap} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';

import {FloorService} from './services/floor.service';
import {Floor} from '../shared/floor';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {

  floor$: Observable<Floor>;
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FloorService
  ) { }

  ngOnInit() {
    console.log('1');
    this.floor$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getFloor(params.get('id')))
    );
    console.log(this.floor$);
  }

}
