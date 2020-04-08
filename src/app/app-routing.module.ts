import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyTreeViewerComponent } from './family-tree-viewer/family-tree-viewer.component';
import { EarliestAscendantComponent } from './earliest-ascendant/earliest-ascendant.component';


const routes: Routes = [
  { path: '',
  redirectTo: '/viewer',
  pathMatch: 'full'
},

{ path: 'viewer', component: FamilyTreeViewerComponent },
{ path: 'earliest-ascendant', component: EarliestAscendantComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
