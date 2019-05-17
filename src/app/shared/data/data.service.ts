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
  objects: Tower[];

  constructor(private afs: AngularFirestore) { }

  /**
   * Get data from DB
   * @returns {AngularFirestoreCollection<Tower>}
   * source: https://www.youtube.com/watch?v=-GjF9pSeFTs
   */
  public getData(): AngularFirestoreCollection<Tower> {
    this.towersColections = this.afs.collection<Tower>(this._collectionEndpoint); // reference

    // Store Objects
    // @todo - Uncomment if need to update all values
    // this.storeObjects();

    return this.towersColections;
  }

  /**
   * Add new data to collection
   * @param {Tower} data
   * @returns {Promise<string | void>}
   */
  public addData(data: Tower): Promise<string | void> {
    return this.afs.collection(this._collectionEndpoint).add(data)
      .then(data => {
        console.log(data);
        return data.id;
      })
      .catch(error => this._errorHandler(error));
  }

  /**
   * Update object data by key
   * @param {string} key
   * @param {Tower} tower
   */
  public updateData(key: string, tower: Tower) {

    // Get the task document
    this.afs.doc<Tower>(`${this._collectionEndpoint}/${key}`)
    .update(tower)
    .then( () => console.log('Updated ' + key))
    .catch(error => this._errorHandler(error));
  }

  /**
   * Remove element by key
   * @param {string} key
   */
  public removeData(key: string): void {
    this.afs.doc<Tower>(`${this._collectionEndpoint}/${key}`)
    .delete()
    .catch(error => this._errorHandler(error));
  }

  /**
   * Log DB error
   * @param {Error} error
   */
  private _errorHandler(error: Error): void {
    console.error('ERROR FireBase: ', error);
  }

  /**
   * Store array of ids
   */
  private storeObjects(): void {

    this.towersColections
      .snapshotChanges()
      .subscribe(towers => {
        this.objects = [];

        console.log(towers);
        towers.map(item => {
          this.objects.push({ id: item.payload.doc.id, ...item.payload.doc.data() });
        });
      });
  }

  /**
   * Update all objects
   */
  public updateAll(): void {

    this.objects.map((item: Tower) => {
      const object = {...item};
      // noinspection JSAnnotator
      delete object.id;
      console.log(object, item.id);
      this.updateData(item.id, {
        ...object,
        // @todo - New property
      });
    });
  }

}
