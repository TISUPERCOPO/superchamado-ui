import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Setor } from 'src/app/core/models/setor.model';
import { Regex } from 'src/app/core/validators/regex';
import { SetorService } from '../setor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-setor-cadastro',
  templateUrl: './setor-cadastro.component.html',
  styleUrls: ['./setor-cadastro.component.css']
})
export class SetorCadastroComponent implements OnInit {

  regex = new Regex();
  salvando: boolean = false;
  setor = new Setor();
  idSetor: number;


  constructor(
    private setorService: SetorService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private spinner: NgxSpinnerService,
    private messageService: MessageService

  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro Setor');
    this.idSetor = this.route.snapshot.params['id'];
    if (this.idSetor) {
      this.spinner.show();
      this.carregarSetor(this.idSetor);
    } else {
      this.setor.status = true;
    }
  }

  get editando(){
    return Boolean(this.setor.id);
  }

  salvar(form: NgForm) {
    if(this.editando){
      this.atualizarSetor(form);
    }else {
      this.adicionarSetor(form);
    }
   }


   adicionarSetor(form: NgForm){
    this.salvando = true;
    this.setorService.adicionar(this.setor)
    .then((obj) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Setor',
        detail: `${obj.descricao}, adicionado com sucesso!`
      });
      this.salvando = false;
      this.router.navigate(['/setores']);
    })
    .catch((erro) => {
      this.salvando = false;
       // this.erroHandler.handle(erro);
    })
  }

  atualizarSetor(form: NgForm){
    this.salvando = true;
    this.setorService.atualizar(this.setor)
    .then((obj) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Setor',
        detail: `${obj.descricao}, atualizado com sucesso!`
      });
      this.atualizarTituloEdicao();
      this.salvando = false;
      this.router.navigate(['/setores']);
    })
    .catch((erro) => {
      this.salvando = false;
       // this.erroHandler.handle(erro);
    })
  }

  carregarSetor(id: number) {
    this.setorService.buscarPorId(id)
      .then((obj) => {
        this.setor = obj;
        this.atualizarTituloEdicao();
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
       // this.erroHandler.handle(erro);
      })
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Convênio: ${this.setor.descricao}`);
  }

}
