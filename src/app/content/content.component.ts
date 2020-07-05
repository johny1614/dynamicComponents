import { Component, Input } from '@angular/core';

@Component({
  template: `Hello {{name}} from content Component :)
  <br>
  <ng-content></ng-content>
  <br>
  <ng-content></ng-content>`
})
export class ContentComponent {

  @Input()
  name: string;

}
