import { Component, Input } from '@angular/core';

@Component({
  template: `Hello {{name}} from content Component :) <ng-content></ng-content>`
})
export class ContentComponent {

  @Input()
  name: string;

}
