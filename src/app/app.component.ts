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

  @ViewChild('innerComponent', { read: TemplateRef })
  innerComponent: TemplateRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit() {
    const normalInnerComponentTemplateRef = this.innerComponent.createEmbeddedView({}).rootNodes[0];

    const dynamicInnerContentComponentFactory = this.componentFactoryResolver.resolveComponentFactory(InnerContentComponent);
    const dynamicInnerComponentRef: ComponentRef<InnerContentComponent> =
      this.viewContainerRef.createComponent(dynamicInnerContentComponentFactory);
    const dynamicInnerComponentTemplateRef= dynamicInnerComponentRef.location.nativeElement;

    const contentComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ContentComponent);
    const componentRef: ComponentRef<ContentComponent> =
      this.viewContainerRef.createComponent(contentComponentFactory, 0, undefined, [[normalInnerComponentTemplateRef],[dynamicInnerComponentTemplateRef]]);
    componentRef.changeDetectorRef.detectChanges();
  }

  logSth(){
    console.log('hello in the console :)');
  }

}
