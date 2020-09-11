import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicrepoComponent } from '.PublicrepoComponent'
import { SelfrepoComponent } from '.SelfrepoComponent'



const routes: Routes = [
{path:"selfrepo", component:SelfrepoComponent},
{path: "publicrepo", component:PublicrepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent =
[SelfrepoComponent, PublicrepoComponent];
