import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ContentComponent } from 'src/app/content/content.component';

@Component({
  selector: 'my-app',
  template: `
  <ng-template #AppButton>
    <button (click)="logSth()">Button from AppComponent</button>
  </ng-template>
  `
})
export class AppComponent implements AfterViewInit {

  @ViewChild('AppButton')
  appButton: TemplateRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit() {
    const buttonNode = this.appButton.createEmbeddedView({}).rootNodes[0];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ContentComponent);
    const componentRef: ComponentRef<ContentComponent> =
    this.viewContainerRef.createComponent(componentFactory, 0, undefined, [[buttonNode]]);
    componentRef.changeDetectorRef.detectChanges();
  }

  logSth(){
    console.log('everything works :)');
  }

}
