import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FamilyTreeViewerComponent } from "./family-tree-viewer/family-tree-viewer.component";
import { EarliestAscendantComponent } from "./earliest-ascendant/earliest-ascendant.component";

const routes: Routes = [
  { path: "", component: FamilyTreeViewerComponent, pathMatch: "full" },
  { path: "viewer", component: FamilyTreeViewerComponent },
  { path: "earliest-ascendant", component: EarliestAscendantComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
