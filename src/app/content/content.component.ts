import { Component, Input } from '@angular/core';

@Component({
  template: `Hello {{name}} from content Component :)`
})
export class ContentComponent {

  @Input()
  name: string;

}
