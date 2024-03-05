import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { Usuarios } from 'src/app/core/models/ususarios.model';
import { UsuariosService } from '../usuarios.service';
import { AuthService } from '../../seguranca/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ValidationService } from 'src/app/core/service/validation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Table } from 'primeng/table';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  @ViewChild('tabela') table: Table;

  rowsPerPageTable: number[] = [10, 25, 50, 100, 200];
  cols: any[];
  sinal = true;
  status = 'Ativo';
  usuariosUrl: string;
  usuarios = [];
  usuario: Usuarios;
  _selectedColumns: any[];
  selectionCols: Usuarios;
  tabela: any;
  display: boolean;
  valorTooltip = 'Inativos';
  messagePageReport = 'Mostrando {first} a {last} de {totalRecords} registros';
  items: MenuItem[];
  salvando: boolean;
  iduser: number;

  showDialog() {
    this.display = true;
  }
  constructor(
    private title: Title,
    private userService: UsuariosService,
    public auth: AuthService,
    private conf: PrimeNGConfig,
    private errorHandler: ErrorHandlerService,
    private validationService: ValidationService,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  onClear() {
    this.table.clear();
  }
  refresh() {
    this.carregarUsers();
  }

  ngOnInit() {
    this.conf.ripple = true;
    this.title.setTitle('Usuários');
    this.carregarUsers();

    this.items = [
      {
        label: 'Ativo / Inativo',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarLista();
        },
      }
    ];

    this.cols = [
      { field: 'id', header: 'Código', width: '130px', type: 'numeric' },
      { field: 'nome', header: 'Nome', width: '200px' , type: 'text'},
      { field: 'login', header: 'Login', width: '300px', type: 'text' },
      { field: 'datagravacao', header: 'Data Alteração', width: '200px', type: 'date', data: true, format: `dd/MM/yyyy H:mm` },
      { field: 'loginusuario', header: 'Usuário Alteração', width: '300px', type: 'text' },
      { field: 'statusformatado', header: 'Status', width: '100px', type: 'text' }
    ];
    this._selectedColumns = this.cols;
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }
  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }
  carregarUsers() {
    this.spinner.show();
    this.userService.listarUsuarios()
      .then(user => {
        this.usuarios = user;
        this.usuarios = this.validationService.formataAtivoeInativo(this.usuarios);
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        this.errorHandler.handle(erro);
      });
  }

  AlternarLista() {
    this.spinner.show();
    const valor = this.sinal ? '/inativos' : '/';
    if (this.sinal === true) {
      this.valorTooltip = 'Ativos';
      this.sinal = false;
    } else {
      this.valorTooltip = 'Inativos';
      this.sinal = true;
    }
    this.userService.AlternarLista(valor)
      .then(obj => {
        this.usuarios = obj
        this.usuarios = this.validationService.formataAtivoeInativo(this.usuarios);
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        this.errorHandler.handle(erro);
      });
  }



  resetSenha(iduser: number) {
    this.iduser = this.route.snapshot.params['id'];

    this.userService
      .resetSenha(iduser)
      .then((usuario) => {
        this.usuario = usuario;
        this.messageService.add({
          severity: 'info',
          summary: 'Senha',
          detail: `${usuario.nome}, senha resetada com sucesso!`,
        });
      })
      .catch((erro) => {
        this.salvando = false;
        this.errorHandler.handle(erro);
      });
  }


  carregarUsuario(id: number) {
    this.userService
      .buscarPorId(id)
      .then((usuario) => {
        this.usuario = usuario;
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        this.errorHandler.handle(erro);
      });
  }

}
