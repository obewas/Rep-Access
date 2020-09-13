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
import { NgxPaginationModule  } from "ngx-pagination";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SearchInputComponent } from './search-input/search-input.component';
@NgModule({
  declarations: [
    AppComponent,
    SelfrepoComponent,
    PublicrepoComponent,
    SearchPipe,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
