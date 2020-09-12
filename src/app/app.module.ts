import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicrepoComponent } from './publicrepo/publicrepo.component'
import { SelfrepoComponent } from './selfrepo/selfrepo.component'
import { SearchService } from './search.service'
import { from } from 'rxjs';
import { HttpClientModule } from "@angular/common/http";
import { SearchPipe } from './search.pipe';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    SelfrepoComponent,
    PublicrepoComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
