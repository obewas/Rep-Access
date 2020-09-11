import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicrepoComponent } from '.PublicrepoComponent'
import { SelfrepoComponent } from '.SelfrepoComponent'





@NgModule({
  declarations: [
    AppComponent,
    SelfrepoComponent,
    PublicrepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
