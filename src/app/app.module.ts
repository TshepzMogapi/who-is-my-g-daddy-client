import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FamilyTreeViewerComponent } from './family-tree-viewer/family-tree-viewer.component';
import { EarliestAscendantComponent } from './earliest-ascendant/earliest-ascendant.component';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FamilyTreeViewerComponent,
    EarliestAscendantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
