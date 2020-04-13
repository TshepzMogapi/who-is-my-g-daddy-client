import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FamilyTreeViewerComponent } from './family-tree-viewer/family-tree-viewer.component';
import { EarliestAscendantComponent } from './earliest-ascendant/earliest-ascendant.component';
import { PersonService } from './services/person.service';

import { TreeViewComponent } from './tree-view/tree-view.component';
import { SubTreeViewComponent } from './sub-tree-view/sub-tree-view.component';

import { TreeModule } from 'angular-tree-component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FamilyTreeViewerComponent,
    EarliestAscendantComponent,
    TreeViewComponent,
    SubTreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TreeModule.forRoot()
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
