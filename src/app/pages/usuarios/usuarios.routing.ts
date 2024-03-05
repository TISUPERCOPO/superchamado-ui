import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuarioListaComponent } from "./usuario-lista/usuario-lista.component";
import { UsuarioCadastroComponent } from "./usuario-cadastro/usuario-cadastro.component";
import { UsuarioEditarComponent } from "./usuario-editar/usuario-editar.component";

const routes: Routes = [
  {
    path: '',
    component: UsuarioListaComponent
  },
  {
    path: 'novo',
    component: UsuarioCadastroComponent
  },
  {
    path: ':id',
    component: UsuarioEditarComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]

})


export class UsuariosRouting {}
