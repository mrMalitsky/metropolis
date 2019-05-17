import {CoordinatesInterface} from './interfaces/coordinates';
import {ObjectTypeEnum} from './object-type.enum';

export class Tower {

  /**
   * Unique tower identificator
   */
  id?: string;

  /**
   * Name of tower
   */
  name: string;

  /**
   * Position of tower on the scene (example: {x: 9.2, y: 0, z: 6.9})
   */
  position: CoordinatesInterface;

  /**
   * Rotation of tower on the scene (example: {x: 0, y: -90, z: 0})
   */
  rotation: CoordinatesInterface;

  /**
   * Scale of tower on the scene (example: {x: 1, y: 1, z: 1})
   */
  scale: CoordinatesInterface;

  /**
   * Source of tower model (example: 'tower1')
   */
  src: string;

  /**
   * Source of tower material (example: 'tower1')
   */
  mtl: string;

  /**
   * Id of tower community (example: '1')
   */
  community: string;

  /**
   * Id of tower subCommunity (example: '1')
   */
  subCommunity: string;

  /**
   * Color of the tower (example: '1')
   * Using in testing proposes and for hovering effect
   */
  color?: string;

  /**
   * Type of object (example: ObjectTypeEnum.tower)
   */
  type: ObjectTypeEnum;

}
