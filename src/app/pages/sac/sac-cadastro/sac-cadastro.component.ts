import { Component, OnInit } from '@angular/core';
import { Sac } from 'src/app/core/models/sac.model';
import { Regex } from 'src/app/core/validators/regex';
import { SacService } from '../sac.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-sac-cadastro',
  templateUrl: './sac-cadastro.component.html',
  styleUrls: ['./sac-cadastro.component.css']
})
export class SacCadastroComponent implements OnInit {
  messageDrop = 'Nenhum resultado encontrado...';
  regex = new Regex();
  salvando: boolean = false;
  sac = new Sac();
  idSac: number;

  sacs: Sac[];


  vendedor = [
    { label: 'DANI', value: 'DANI' },
    { label: 'KAIQUE', value: 'KAIQUE' },
  ];
  problema = [
    { label: 'AVARIA NO TRANSPORTE', value: 'AVARIA NO TRANSPORTE' },
    { label: 'FALHA NO ATENDIMENTO', value: 'FALHA NO ATENDIMENTO' },
  ];

  setor = [
    { label: 'TRANSPORTE', value: 'TRANSPORTE' },
    { label: 'PINTURA', value: 'PINTURA' },
  ];

  transportadoras = [
    { label: 'ALFA', value: 'ALFA' },
    { label: 'TNT', value: 'TNT' },
  ];

  tipopedido = [
    { label: 'RS', value: 'RS' },
    { label: 'PV', value: 'PV' },
  ];

  devolucao = [
    { label: 'SIM', value: 'SIM' },
    { label: 'NAO', value: 'NÃO' },
  ];


  constructor(
    private sacService: SacService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro Sac');
    this.idSac = this.route.snapshot.params['id'];
    if (this.idSac) {
      console.log(this.idSac)
      this.spinner.show();
      this.carregarSac(this.idSac);
    } else {
      this.sac.status = true;
    }
  }
  get editando(){
    return Boolean(this.sac.id);
  }

  salvar(form: NgForm) {
    if(this.editando){
      this.atualizarSac(form);
    }else {
      this.adicionarSac(form);
    }
  }


  adicionarSac(form: NgForm){
    this.salvando = true;
    this.sacService.adicionar(this.sac)
    .then((obj) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Sac',
        detail: `${obj.credito}, adicionado com sucesso!`
      });
      this.salvando = false;
      this.router.navigate(['/sacs']);
    })
    .catch((erro) => {
      this.salvando = false;
      this.errorHandler.handle(erro);
    })
  }

  atualizarSac(form: NgForm){
    this.salvando = true;
    this.sacService.atualizar(this.sac)
    .then((obj) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Sac',
        detail: `${obj.credito}, atualizado com sucesso!`
      });
      this.atualizarTituloEdicao();
      this.salvando = false;
      this.router.navigate(['/sacs']);
    })
    .catch((erro) => {
      this.salvando = false;
      this.errorHandler.handle(erro);
    })
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Sac: ${this.sac.empresa}`);
  }

  carregarSac(id: number) {
    this.sacService.buscarPorId(id)
      .then((obj) => {
        this.sac = obj;
        this.atualizarTituloEdicao();
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
        this.errorHandler.handle(erro);
      })
  }


}
