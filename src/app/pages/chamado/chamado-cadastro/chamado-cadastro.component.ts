import { Categoria } from './../../../core/models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { Chamado } from 'src/app/core/models/chamado.model';
import { Regex } from 'src/app/core/validators/regex';
import { ChamadoService } from '../chamado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { CategoriaService } from '../../categoria/categoria.service';
import { SetorService } from '../../setor/setor.service';

@Component({
  selector: 'app-chamado-cadastro',
  templateUrl: './chamado-cadastro.component.html',
  styleUrls: ['./chamado-cadastro.component.css']
})
export class ChamadoCadastroComponent implements OnInit {

  messageDrop = 'Nenhum resultado encontrado...';
  regex = new Regex();
  salvando: boolean = false;
  chamado = new Chamado();
  idChamado: number;
  selectedCategoria: any;
  selectedSetor: any;

  descricaoCategoriaSelecionada: any;

  urgencia = [
    { label: 'BAIXA', value: 'BAIXA' },
    { label: 'MEDIA', value: 'MÉDIA' },
    { label: 'ALTA', value: 'ALTA' },
  ]

  categorias = [];
  setores = [];

  constructor(
    private chamadoService: ChamadoService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private categoriasService: CategoriaService,
    private setorService: SetorService
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarSetor();
    this.title.setTitle('Cadastro Chamado');
    this.idChamado = this.route.snapshot.params['id'];
    if (this.idChamado) {
      this.spinner.show();
      this.carregarChamado(this.idChamado);
    } else {
      this.chamado.status = false;
    }
  }

  get editando(){
    return Boolean(this.chamado.id);
  }

  salvar(form: NgForm) {
    if(this.editando){
      this.atualizarChamado(form);
    }else {
      this.adicionarChamado(form);
    }
   }

   adicionarChamado(form: NgForm){
    this.salvando = true;
    this.chamadoService.adicionar(this.chamado)
    .then((obj) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Convênio',
        detail: `${obj.descricao}, adicionado com sucesso!`
      });
      this.salvando = false;
      this.router.navigate(['/chamados']);
    })
    .catch((erro) => {
      this.salvando = false;
       // this.erroHandler.handle(erro);
    })
  }

  atualizarChamado(form: NgForm){
    this.salvando = true;
    this.chamadoService.atualizar(this.chamado)
    .then((obj) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Convênio',
        detail: `${obj.descricao}, atualizado com sucesso!`
      });
      this.atualizarTituloEdicao();
      this.salvando = false;
      this.router.navigate(['/chamados']);
    })
    .catch((erro) => {
      this.salvando = false;
       // this.erroHandler.handle(erro);
    })
  }

  carregarChamado(id: number) {
    this.chamadoService.buscarPorId(id)
    .then(obj => {
        this.chamado = obj
        this.atualizarTituloEdicao();
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
       // this.erroHandler.handle(erro);
      })
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Chamado: ${this.chamado.descricao}`);
  }

  carregarCategorias() {
    return this.categoriasService
      .listarCategoria()
      .then(categorias => {
        this.categorias = categorias.map((c: { descricao: any; id: any; }) =>({label: c.descricao, value: c.id }));
      })
      .catch((erro) => {
        //this.errorHandler.handle(erro);
      });
  }


  carregarSetor() {
    return this.setorService
      .listarSetor()
      .then(setores => {
        this.setores = setores.map((c: { descricao: any; id: any; }) =>({label: c.descricao, value: c.id }));
      })
      .catch((erro) => {
        //this.errorHandler.handle(erro);
      });
  }

  teste(){
    console.log(this.chamadoCategoria())
  }

 chamadoCategoria() {
   this.chamado.categoria.id = this.selectedCategoria;
  }

  chamadoSetor() {
    this.chamado.setor.id = this.selectedSetor;
  }


}
