import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Sac } from 'src/app/core/models/sac.model';
import { SacService } from '../sac.service';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../seguranca/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sac-lista',
  templateUrl: './sac-lista.component.html',
  styleUrls: ['./sac-lista.component.css']
})
export class SacListaComponent implements OnInit {

  @ViewChild('tabela') table: Table;



  rowsPerPageTable: number[] = [10, 25, 50, 100, 200];
  messagePageReport = 'Mostrando {first} a {last} de {totalRecords} registros';
  status = 'Ativo';
  sinal = true;
  sacs: Sac[];
  cols = [];
  items: MenuItem[];
  _selectedColumns = [];
  valorTooltip = 'Inativos';
  dialogColunas: boolean;
  yearFilter: Date;
  brands: any[];
  colors: any[];
  noRecords = true;


  constructor(
    private sacService: SacService,
    private title: Title,
    public auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private spinner: NgxSpinnerService
  ) { }

  onClear() {
    this.table.clear();
    this.refresh();
  }

  refresh() {
    this.carregarSac();
  }


  ngOnInit() {
    this.title.setTitle('Sac');
    this.carregarSac();

    this.items = [
      {
        label: 'Ativo / Inativo',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarLista();
        },
      }
    ];
    this.brands = [

    ];
    this.colors = [];
    this.cols = [
      { field: 'id', header: 'Código', width: '50px', type: 'text' },
      { field: 'cliente', header: 'Cliente', width: '200px', type: 'text' },
      { field: 'pedido', header: 'Pedido', width: '115px', type: 'number' },
      { field: 'empresa', header: 'Empresa', width: '200px', type: 'text' },
      { field: 'problema', header: 'Problema', width: '130px', type: 'text' },
      { field: 'setor', header: 'Setor', width: '115px', type: 'text' },
      { field: 'credito', header: 'Crédito', width: '115px', type: 'text' },
      { field: 'transportadora', header: 'Transportadora', width: '115px', type: 'text' },
      { field: 'tipopedido', header: 'Tipo Pedido', width: '115px', type: 'text' },
      { field: 'devolucao', header: 'Devolução', width: '115px', type: 'text' },
      { field: 'dataprevisao', header: 'Data Previsão', width: '200px', data: true, format: `dd/MM/yyyy`, type: 'date' },
      { field: 'credito', header: 'Tipo Crédito', width: '180px', type: 'number' },
      { field: 'valorcredito', header: 'Valor Total', width: '107px', currency: true, format: `BRL`, type: 'numeric'},
    ];
  }

  carregarSac() {
    this.spinner.show();
    this.sacService.listar().then((obj) => {
      this.sacs = obj;
      if (this.sacs.length > 0) {
        this.noRecords = true;
      }
      else {
        this.noRecords = false;
      }
      this.spinner.hide();
    })
      .catch((erro) => {
        this.errorHandler.handle(erro);
        this.spinner.hide();
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
    this.sacService
      .AlternarLista(valor)
      .then((sac) => {
        (this.sacs = sac);
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        this.errorHandler.handle(erro)
      });
  }



}
