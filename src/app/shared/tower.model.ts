export class Tower {

  /**
   * Unique tower identificator
   */
  $key: string;

  /**
   * Name of tower
   */
  name: string;

  /**
   * Position on the map X and Y coordinates
   */
  position: {
    x: number,
    y: number,
  };
}
