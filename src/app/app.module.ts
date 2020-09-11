import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicrepoComponent } from './publicrepo/publicrepo.component'
import { SelfrepoComponent } from './selfrepo/selfrepo.component'
import { SearchService } from './search.service'
import { from } from 'rxjs';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SelfrepoComponent,
    PublicrepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
