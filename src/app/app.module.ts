import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FamilyTreeViewerComponent } from './family-tree-viewer/family-tree-viewer.component';
import { EarliestAscendantComponent } from './earliest-ascendant/earliest-ascendant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FamilyTreeViewerComponent,
    EarliestAscendantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
