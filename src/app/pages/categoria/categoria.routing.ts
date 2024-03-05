import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaListaComponent } from "./categoria-lista/categoria-lista.component";
import { CategoriaCadastroComponent } from "./categoria-cadastro/categoria-cadastro.component";

const routes: Routes = [
  {
    path: '',
    component: CategoriaListaComponent,

  },
  {
    path: 'novo',
    component: CategoriaCadastroComponent,

  },
  {
    path: ':id',
    component: CategoriaCadastroComponent,

  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class CategoriaRouting {}
