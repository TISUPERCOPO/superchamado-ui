import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { SetorService } from '../setor.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValidationService } from 'src/app/core/service/validation.service';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-setor-listar',
  templateUrl: './setor-listar.component.html',
  styleUrls: ['./setor-listar.component.css']
})
export class SetorListarComponent implements OnInit {

  @ViewChild('tabela') table: Table;
  rowsPerPageTable: number[] = [10, 25, 50, 100, 200, 500];
  setores = [];
  cols: any[];
  messagePageReport = 'Mostrando {first} a {last} de {totalRecords} registros';
  items: MenuItem[];
  sinal = true;
  valorTooltip = 'Inativos';

  constructor(
    private title: Title,
    private setorService: SetorService,
    private spinner: NgxSpinnerService,
    private validationService: ValidationService,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.title.setTitle('Lista de Setores');
    this.items = [
      {
        label: 'Ativo/Inativo',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarLista();
        }
      }
    ]
    this.carregarSetor();

    this.cols = [
      { field: 'id', header: 'Código', width: '100px', type: 'numeric', key: 1 },
      { field: 'descricao', header: 'Descrição', width: '150px', type: 'text', key: 2 },
      { field: 'datagravacao', header: 'Data Gravação', width: '100px', data: true, format: `dd/MM/yyyy H:mm`, type: 'date', key: 3 },
      { field: 'loginusuario', header: 'Usuário Gravação', width: '150px', type: 'text', key: 4 },
      { field: 'statusformatado', header: 'Status', width: '150px', type: 'text', key: 5 }
    ]

  }

  carregarSetor() {
    this.spinner.show();
    this.setorService.listarSetor()
      .then((obj) => {
        this.setores = obj;
        this.setores = this.validationService.formataAtivoeInativo(this.setores);
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        // this.erroHandler.handle(erro);
      })
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
    this.setorService.AlternarLista(valor)
      .then((obj) => {
        this.setores = obj;
        // this.convenios = this.validationService.formataAtivoeInativo(this.convenios);
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        // this.erroHandler.handle(erro);
      })
  }
  refresh(){
    this.carregarSetor();
  }
  onClear(){
    this.table.clear();
  }

}
