import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListprovideComponent } from './listprovide/listprovide.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

const routes: Routes = [
  { path: "listProvider", component: ListprovideComponent },
{ path: "addProvider", component: AddProviderComponent },
{ path: "updateProvider/:id", component: UpdateProviderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
