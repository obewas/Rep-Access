import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicrepoComponent } from './publicrepo/publicrepo.component'
import { SelfrepoComponent } from './selfrepo/selfrepo.component'



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
