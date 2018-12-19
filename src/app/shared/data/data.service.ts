import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Tower} from '../tower.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  towersColections: AngularFirestoreCollection<Tower>;
  towers: Observable<Tower[]>;

  constructor(private afs: AngularFirestore) { }

  // source: https://www.youtube.com/watch?v=-GjF9pSeFTs
  public getData(): Observable<Tower[]> {
    this.towersColections = this.afs.collection('towers'); // reference
    this.towers = this.towersColections.valueChanges();          // observable of towers data

    return this.towers;
  }

}
