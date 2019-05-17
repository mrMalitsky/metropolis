import { Injectable } from '@angular/core';
const AFRAME = require('aframe');
const THREE = require('three');

@Injectable({
  providedIn: 'root',
})
export class TooltipComponent {

  /**
   * Component property values
   */
  private _data: any;

  /**
   * Component element
   */
  private element: HTMLElement;

  /**
   * Component input parameters
   */
  private _schema = {
    message: {type: 'string', default: 'Hello, World!'},
  };

  constructor() {
    this.init();
  }

  /**
   * Init component
   */
  private init(): void {
    AFRAME.registerComponent('tooltip', {
      // Input parameters
      schema: this._schema,
      init:  function () {},
      update: function () {

        // ________________________________

        // Set color with material.
        // const textMaterial = new THREE.LineBasicMaterial({
        //   color: '#ff0000'
        // });

        const textMaterial = new THREE.MeshPhongMaterial(
          { color: 0xff0000, specular: 0xffffff }
        );

        // Add vertices to geometry.
        // const geometry = new THREE.Geometry();
        // this.data.path.forEach(function (vec3) {
        //   geometry.vertices.push(
        //     new THREE.Vector3(vec3.x, vec3.y, vec3.z)
        //   );
        // });

        // Apply mesh.
        // this.el.setObject3D('mesh', new THREE.Line(geometry, material));
        //
        // const loader = new THREE.FontLoader();
        //
        // loader.load('assets/3d-fonts/helvetiker_regular.typeface.json', (font) => {
        //
        //   const scene = document.querySelector('a-scene');
        //
        //   const textGeometry = new THREE.TextGeometry('Hello three.js!', {
        //     font: font,
        //     size: 800,
        //     height: 5,
        //     curveSegments: 12,
        //     bevelEnabled: true,
        //     bevelThickness: 10,
        //     bevelSize: 8,
        //     bevelSegments: 5
        //   });
        //   console.log({font, textGeometry});
        //   // console.log(scene.hasLoaded);
        //
        //   // // Use './lib/shaders/sdf' to help build a shader material
        //   // const material = new THREE.RawShaderMaterial(SDFShader({
        //   //   map: texture,
        //   //   side: THREE.DoubleSide,
        //   //   transparent: true,
        //   //   color: data.color,
        //   //   opacity: data.opacity
        //   // }));
        //
        //   const text = new THREE.Mesh(textGeometry, textMaterial);
        //
        //   // Rotate so text faces the camera
        //   // text.rotation.y = Math.PI;
        //
        //   // Scale text down
        //   // text.scale.multiplyScalar(-0.005);
        //
        //   // Register text mesh under entity's object3DMap
        //
        //
        //
        //   // TEST
        //
        //   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        //   var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        //   var cube = new THREE.Mesh( geometry, material );
        //   // scene.add( cube );
        //   // console.log(this.el);
        //   // scene.add( text );
        // });
      },
      tick: function () {},
      remove: function () {},
      pause: function () {},
      play: function () {}
    });
  }
}
