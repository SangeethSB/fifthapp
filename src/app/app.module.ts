import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HtmlTableComponent } from './components/html-table/html-table.component';
import { HtmlFormComponent } from './components/html-form/html-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlTableComponent,
    HtmlFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
