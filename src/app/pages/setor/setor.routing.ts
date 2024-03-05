import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SetorListarComponent } from "./setor-listar/setor-listar.component";
import { SetorCadastroComponent } from "./setor-cadastro/setor-cadastro.component";

const routes: Routes = [
  {
    path: '',
    component: SetorListarComponent
  },
  {
    path: 'novo',
    component: SetorCadastroComponent
  },
  {
    path: ':id',
    component: SetorCadastroComponent
  },

]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class SetorRouting {}
