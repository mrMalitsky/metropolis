import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Metropolis';

  constructor() {
    // @todo: Add checking browser supporting webVR
    // const supportsVR = 'getVRDisplays' in navigator;
    //
    // if (supportsVR) {
    //   navigator.getVRDisplays().then(function(displays) {
    //     // ... Load VR experience
    //   });
    // }
    // else {
    //   // ... Show "you need {x} browser" message
    // }
  }

}
