import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ContentComponent } from 'src/app/content/content.component';
import { InnerContentComponent } from 'src/app/inner-content/inner-content.component';
import { EmbeddedViewRef } from '@angular/core/src/linker/view_ref';

@Component({
  selector: 'my-app',
  template: `
    <ng-template #innerComponent>
      <app-inner (click)="logSth()"></app-inner>
    </ng-template>
  `
})
export class AppComponent implements AfterViewInit {

  @ViewChild('innerComponent', { read: ViewContainerRef })
  innerComponent: ViewContainerRef;

  @ViewChild('innerComponent', { read: TemplateRef }) _template: TemplateRef<any>;


  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit() {
    this.createDynamicIntoDynamic();
    this.createNormalIntoDynamic();
  }

  createDynamicIntoDynamic(){
    const innerContentComponentFactory = this.componentFactoryResolver.resolveComponentFactory(InnerContentComponent);
    const innerComponentRef: ComponentRef<InnerContentComponent> =
      this.viewContainerRef.createComponent(innerContentComponentFactory);

    const contentComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ContentComponent);
    const componentRef: ComponentRef<ContentComponent> =
      this.viewContainerRef.createComponent(contentComponentFactory, 0, undefined, [[innerComponentRef.location.nativeElement]]);
    componentRef.changeDetectorRef.detectChanges();
  }

  createNormalIntoDynamic(){
    const view = this._template.createEmbeddedView({});
    const contentComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ContentComponent);
    const componentRef: ComponentRef<ContentComponent> =
      this.viewContainerRef.createComponent(contentComponentFactory, 0, undefined, [[view.rootNodes[0]]]);
    componentRef.changeDetectorRef.detectChanges();
  }

  logSth(){
    console.log('hello in the console :)');
  }

}
