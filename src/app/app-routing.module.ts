import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListprovideComponent } from './listprovide/listprovide.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListarticleComponent } from './listarticle/listarticle.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
const routes: Routes = [
  { path: "listProvider", component: ListprovideComponent },
{ path: "addProvider", component: AddProviderComponent },
{ path: "updateProvider/:id", component: UpdateProviderComponent },
{ path: "updateArticle/:id/:id_provider", component:UpdateArticleComponent  },
{ path: "listArticle", component: ListarticleComponent },
{ path: "addArticle", component: AddArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
