import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { InnerContentComponent } from './inner-content/inner-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    InnerContentComponent,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[ContentComponent,InnerContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
