import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Renderer2, ViewContainerRef } from '@angular/core';
import { ContentComponent } from 'src/app/content/content.component';

@Component({
  selector: 'my-app',
  template: ``
})
export class AppComponent implements AfterViewInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private renderer2: Renderer2) {
  }


  ngAfterViewInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ContentComponent);
    const element = this.renderer2.createText('Hiho from the AppComponent!');
    const componentRef: ComponentRef<ContentComponent> =
    this.viewContainerRef.createComponent(componentFactory, 0, undefined, [[element]]);
    componentRef.changeDetectorRef.detectChanges();
  }

}
