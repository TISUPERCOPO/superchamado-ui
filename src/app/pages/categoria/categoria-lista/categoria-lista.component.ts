import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { CategoriaService } from '../categoria.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValidationService } from 'src/app/core/service/validation.service';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  @ViewChild('tabela') table: Table;
  rowsPerPageTable: number[] = [10, 25, 50, 100, 200, 500];
  categorias = [];
  cols: any[];
  messagePageReport = 'Mostrando {first} a {last} de {totalRecords} registros';
  items: MenuItem[];
  sinal = true;
  valorTooltip = 'Inativos';

  constructor(
    private title: Title,
    private categoriaService: CategoriaService,
    private spinner: NgxSpinnerService,
    private validationService: ValidationService,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.title.setTitle('Lista de Categoria');
    this.items = [
      {
        label: 'Ativo/Inativo',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarLista();
        }
      }
    ]
    this.carregarCategoria();

    this.cols = [
      { field: 'id', header: 'Código', width: '100px', type: 'numeric', key: 1 },
      { field: 'descricao', header: 'Descrição', width: '150px', type: 'text', key: 2 },
      { field: 'datagravacao', header: 'Data Gravação', width: '100px', data: true, format: `dd/MM/yyyy H:mm`, type: 'date', key: 3 },
      { field: 'loginusuario', header: 'Usuário Gravação', width: '150px', type: 'text', key: 4 },
      { field: 'statusformatado', header: 'Status', width: '150px', type: 'text', key: 5 }
    ]
  }

  carregarCategoria() {
    this.spinner.show();
    this.categoriaService.listarCategoria()
      .then((obj) => {
        this.categorias = obj;
        this.categorias = this.validationService.formataAtivoeInativo(this.categorias);
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
    this.categoriaService.AlternarLista(valor)
      .then((obj) => {
        this.categorias = obj;
        // this.convenios = this.validationService.formataAtivoeInativo(this.convenios);
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        // this.erroHandler.handle(erro);
      })
  }
  refresh(){
    this.carregarCategoria();
  }
  onClear(){
    this.table.clear();
  }

}
