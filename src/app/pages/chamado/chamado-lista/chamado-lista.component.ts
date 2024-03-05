import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { ChamadoService } from '../chamado.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValidationService } from 'src/app/core/service/validation.service';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-chamado-lista',
  templateUrl: './chamado-lista.component.html',
  styleUrls: ['./chamado-lista.component.css']
})
export class ChamadoListaComponent implements OnInit {

  @ViewChild('tabela') table: Table;
  rowsPerPageTable: number[] = [10, 25, 50, 100, 200, 500];
  chamados = [];
  cols: any[];
  messagePageReport = 'Mostrando {first} a {last} de {totalRecords} registros';
  items: MenuItem[];
  sinal = true;
  valorTooltip = 'INATIVO';

  constructor(
    private title: Title,
    private chamadaService: ChamadoService,
    private spinner: NgxSpinnerService,
    private validationService: ValidationService,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.title.setTitle('Lista de Convênios');
    this.items = [
      {
        label: 'Ativo/Inativo',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarLista();
        }
      }
    ]
    this.carregarChamado();

    this.cols = [
      { field: 'id', header: 'Código', width: '100px', type: 'numeric', key: 1 },
      { field: 'descricao', header: 'Descrição', width: '150px', type: 'text', key: 2 },
      { field: 'datagravacao', header: 'Data Gravação', width: '100px', data: true, format: `dd/MM/yyyy H:mm`, type: 'date', key: 3 },
      { field: 'loginusuario', header: 'Usuário Gravação', width: '150px', type: 'text', key: 4 },
      { field: 'statusformatado', header: 'Status', width: '150px', type: 'text', key: 5 }
    ]
  }

  carregarChamado() {
    this.spinner.show();
    this.chamadaService.listarChamado()
      .then((obj) => {
        this.chamados = obj;
        this.chamados = this.validationService.formataAtivoeInativo(this.chamados);
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        // this.erroHandler.handle(erro);
      })
  }

  AlternarLista() {
    this.spinner.show();
    const valor = this.sinal ? '/Ativos' : '/';
    if (this.sinal === true) {
      this.valorTooltip = 'ATIVO';
      this.sinal = false;
    } else {
      this.valorTooltip = 'INATIVO';
      this.sinal = true;
    }
    this.chamadaService.AlternarLista(valor)
      .then((obj) => {
        this.chamados = obj;
        this.chamados = this.validationService.formataAtivoeInativo(this.chamados);
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        // this.erroHandler.handle(erro);
      })
  }
  refresh(){
    this.carregarChamado();
  }
  onClear(){
    this.table.clear();
  }
}
