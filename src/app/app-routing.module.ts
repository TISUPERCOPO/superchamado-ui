import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarSenhaComponent } from './core/layout/nav-bar/alterar-senha/alterar-senha.component';
import { NaoAutorizadoComponent } from './core/layout/nao-autorizado/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/layout/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'empresas' , loadChildren: () =>
    import('./pages/empresas/empresas.module').then(m => m.EmpresasModule)
  },
  {
    path: 'usuarios', loadChildren: () =>
    import('./pages/usuarios/usuarios.module').then(m =>  m.UsuariosModule)
  },
  {
    path: 'sacs', loadChildren: () =>
    import('./pages/sac/sac.module').then(m =>  m.SacModule)
  },
  {
    path: 'setores', loadChildren: () =>
    import('./pages/setor/setor.module').then(m =>  m.SetorModule)
  },
  {
    path: 'categorias', loadChildren: () =>
    import('./pages/categoria/categoria.module').then(m =>  m.CategoriaModule)
  },
  {
    path: 'chamados', loadChildren: () =>
    import('./pages/chamado/chamado.module').then(m =>  m.ChamadoModule)
  },
  {
    path: 'relatorios', loadChildren: () =>
      import('./pages/relatorios/relatorio.module').then(m => m.RelatoriosModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
