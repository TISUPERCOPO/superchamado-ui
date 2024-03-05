import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresasListaComponent } from "./empresas-lista/empresas-lista.component";
import { EmpresaCadastroComponent } from "./empresa-cadastro/empresa-cadastro.component";
import { AuthGuard } from "../seguranca/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: EmpresasListaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'novo',
    component: EmpresaCadastroComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: EmpresaCadastroComponent,
    canActivate: [AuthGuard],
  },
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class EmpresasRouting {}
