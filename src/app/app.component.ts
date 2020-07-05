import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
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
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ContentComponent);
    const componentRef: ComponentRef<ContentComponent> = this.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.name = 'Johny';
    componentRef.changeDetectorRef.detectChanges();
  }

}
