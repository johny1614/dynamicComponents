import { AfterViewInit, Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ContentComponent } from 'src/app/content/content.component';

@Component({
  selector: 'my-app',
  template: ``
})
export class AppComponent implements AfterViewInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ContentComponent);
    this.viewContainerRef.createComponent(componentFactory);
  }

}
