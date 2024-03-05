import { Sac } from 'src/app/core/models/sac.model';
import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../relatorio.service';
import { Title } from '@angular/platform-browser';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { SacService } from '../../sac/sac.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  dataInicio: Date;
  dataFim: Date;
  mes: string;
  mes1: string;
  ano: string;
  ano1: string;
  sac: string;
  usuario: string;
  traducao: any;
  usuarios = [];
  sacs = [];


  meses = [
    { label: 'Janeiro', value: '1' },
    { label: 'Fevereiro', value: '2' },
    { label: 'Março', value: '3' },
    { label: 'Abril', value: '4' },
    { label: 'Maio', value: '5' },
    { label: 'Junho', value: '6' },
    { label: 'Julho', value: '7' },
    { label: 'Agosto', value: '8' },
    { label: 'Setembro', value: '9' },
    { label: 'Outubro', value: '10' },
    { label: 'Novembro', value: '11' },
    { label: 'Dezembro', value: '12' }
  ];

  anos = [
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
    { label: '2026', value: '2026' },
    { label: '2027', value: '2027' },
  ];


  constructor(
    private relatoriosService: RelatorioService,
    private title: Title,
    private userService: UsuariosService,
    private sacService: SacService,
    private errorHandler: ErrorHandlerService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.title.setTitle('Relatórios');
    this.carregarUsuarios();
    this.carregarSac();


  }

  erarMensalUsuario() {
    this.relatoriosService.relatorioMensalUsuario(this.mes1, this.ano1, this.usuario)
    .then(relatorio => {
      const url = window.URL.createObjectURL(relatorio);
      window.open(url);
    });
   }
   gerarMensal() {
    this.relatoriosService.relatorioMensal(this.mes, this.ano)
    .then(relatorio => {
      const url = window.URL.createObjectURL(relatorio);
      window.open(url);
    });
   }
   gerarMensalSac() {
    this.relatoriosService.relatorioMensalsac(this.mes, this.ano, this.sac)
    .then(relatorio => {
      const url = window.URL.createObjectURL(relatorio);
      window.open(url);
    });
   }
   gerarSacs() {
    this.relatoriosService.relatorioSacs()
    .then(relatorio => {
      const url = window.URL.createObjectURL(relatorio);
      window.open(url);
    });
   }

   gerarUsuarios() {
    this.relatoriosService.relatorioUsuarios()
    .then(relatorio => {
      const url = window.URL.createObjectURL(relatorio);
      window.open(url);
    });
   }
  carregarUsuarios() {
    return this.userService.listarUsuarios()
      .then(user => {
        this.usuarios = user
          .map(mp => ({ label: mp.nome, value: mp.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarSac() {
    return this.sacService.listar()
      .then(obj => {
        this.sacs = obj
          .map(mp => ({ label: mp.descricao, value: mp.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
