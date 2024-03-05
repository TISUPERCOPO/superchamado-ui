import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SacListaComponent } from "./sac-lista/sac-lista.component";
import { SacCadastroComponent } from "./sac-cadastro/sac-cadastro.component";

const routes: Routes = [
  {
    path: '',
    component: SacListaComponent
  },
  {
    path: 'novo',
    component: SacCadastroComponent
  },
  {
    path: ':id',
    component: SacCadastroComponent
  },


]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]

})

export class SacRouting {}
