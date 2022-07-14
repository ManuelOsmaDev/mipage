import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialExtremeModule } from './devExtreme/material-extreme.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
