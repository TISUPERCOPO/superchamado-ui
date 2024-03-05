import { ChamadoCadastroComponent } from './chamado-cadastro/chamado-cadastro.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChamadoListaComponent } from "./chamado-lista/chamado-lista.component";

const routes: Routes = [
  {
    path: '',
    component: ChamadoListaComponent
  },
  {
    path: 'novo',
    component: ChamadoCadastroComponent
  },
  {
    path: ':id',
    component: ChamadoCadastroComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class ChamadoRouting {}
