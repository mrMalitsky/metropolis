export class Tower {

  /**
   * Unique tower identificator
   */
  id: string;

  /**
   * Name of tower
   */
  name: string;

  /**
   * Position of tower on the scene (example: '9.277 0 6.91')
   */
  position: string;

  /**
   * Rotation of tower on the scene (example: '0 -90 0')
   */
  rotation: string;

  /**
   * Scale of tower on the scene (example: '1 1 1')
   */
  scale: string;

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
   * Id of tower sub_community (example: '1')
   */
  sub_community: string;

  /**
   * Color of the tower (example: '1')
   * Using in testing proposes and for homering effect
   */
  color?: string;

}
