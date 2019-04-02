import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Tower} from '../tower.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _collectionEndpoint = 'towers';
  towersColections: AngularFirestoreCollection<Tower>;
  towers: Observable<Tower[]>;

  constructor(private afs: AngularFirestore) { }

  // source: https://www.youtube.com/watch?v=-GjF9pSeFTs
  public getData(): AngularFirestoreCollection<Tower> {
    this.towersColections = this.afs.collection<Tower>(this._collectionEndpoint); // reference
    return this.towersColections;
  }

  /**
   * Add new data to col lection
   */
  public addData(data: Tower): Promise<string | void> {
    return this.afs.collection(this._collectionEndpoint).add(data)
      .then(data => {
        console.log(data);
        return data.id;
      })
      .catch(error => this._errorHandler(error));
  }

  public updateData(key: string, tower: Tower) {
    console.log(key);
    // Get the task document
    this.afs.doc<Tower>(`${this._collectionEndpoint}/${key}`)
    .update(tower)
    .then( () => console.log('Updated ' + key))
    .catch(error => this._errorHandler(error));
  }

  /**
   * Remove element by key
   */
  public removeData(key: string): void {
    this.afs.doc<Tower>(`${this._collectionEndpoint}/${key}`)
    .delete()
    .catch(error => this._errorHandler(error));
  }

  /**
   * Log DB error
   */
  private _errorHandler(error): void {
    console.error('ERROR FireBase: ', error);
  }

}
