import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../../models/ususarios.model';
import { ErrorHandlerService } from '../../error-handler.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsuariosService } from 'src/app/pages/usuarios/usuarios.service';
import { AuthService } from 'src/app/pages/seguranca/auth.service';
import { EmpresasService } from 'src/app/pages/empresas/empresas.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input()
  routerLinkActiveOptions: {
    exact: boolean;
  };

  sair: any;
  logo: any = '/assets/images/Logo original.svg';
  logoDescricao: any = '/assets/images/Logo original.svg';
  visibleSidebar;
  menu;
  env = environment;
  displayEmpresas: boolean;
  loading: boolean;
  empresas = [];
  usuario = new Usuarios();
  usuarios = new Array<Usuarios>();
  colsEmpresa = [];
  razaosocial: string;
  idEmpresaativa: number;

  constructor(
  public auth: AuthService,
  private errorHandler: ErrorHandlerService,
  private router: Router,
  private confirmation: ConfirmationService,
  private empresaService: EmpresasService,
  private messageService: MessageService,
  private usuarioService: UsuariosService,
   ) {  }

  ngOnInit() {
    this.razaosocial = '...';

    this.colsEmpresa = [
      { field: 'id', header: 'ID', width: '80px' },
      { field: 'cpfoucnpj', header: 'Cnpj', width: '300px' },
      { field: 'razaosocial', header: 'Empresa', width: '250px' },
      { field: 'cidade', header: 'Cidade', width: '100px' },
      { field: 'uf', header: 'Estado', width: '100px' },
    ];
  }

  ngAfterViewInit() {
    if (this.auth.jwtPayload) {
      this.usuarioLogado();
    }
  }

novoAccessToken() {
  this.auth.obterNovoAccessToken();
}
confirmarLogout(sair: any) {
  this.confirmation.confirm({
    message: `Tem certeza que deseja sair? `,
    accept: () => {
      this.logout(sair);
    }
  });
}
logout(sair: any) {
 this.auth.logout()
   .then(() => {
    this.router.navigate(['/login']);
   })
  .catch(erro => this.errorHandler.handle(erro));
 }

 showEmpresas() {
    this.menu = false;
    this.displayEmpresas = true;
    // colocar timeOut
    this.carregarEmpresasUsuario();
  }
  carregarEmpresasUsuario() {
    this.loading = true;
    return this.empresaService
      .listarEmpresasUsuario()
      .then((obj) => {
        this.empresas = obj;
        this.loading = false;
      })
      .catch((erro) => {
        this.errorHandler.handle(erro);
        this.loading = false;
      });
  }

  selecionaEmpresa(id: number) {
    this.usuarioService
      .empresaUsuario(id)
      .then((obj) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Empresa',
          detail: `selecionada com sucesso!`,
        });
        this.displayEmpresas = false;
        this.usuarioLogado();
        this.redirectTo('/');
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }
  redirectTo(uri: string) {
    if (this.router.url === '/dashboard') {
      window.location.reload();
    }
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
  usuarioLogado() {
    this.usuarioService
      .listarUsuarios()
      .then((obj) => {
        this.usuarios = obj;
        this.verificarUsuarioLogado(this.usuarios);
      })
      .catch((erro) => this.errorHandler.handle(erro));
  }

  verificarUsuarioLogado(usuarios: Array<Usuarios>) {
    for (const i of Object.keys(usuarios)) {
      if (this.auth.jwtPayload?.user_name === usuarios[i].login) {
        this.usuario = usuarios[i];
        this.usuarioService.buscarPorId(usuarios[i].id).then((obj2) => {
          this.razaosocial = obj2.empresaativa;
          this.idEmpresaativa = obj2.idEmpresaativa;
        });
      } else {
        this.razaosocial = null;
      }
    }
  }



}
