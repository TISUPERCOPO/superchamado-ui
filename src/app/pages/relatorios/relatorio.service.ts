import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

sacUrl:string;

constructor(private http: HttpClient) {
  this.sacUrl = `${environment.apiUrl}/sacs`;
}


/* relatorioAtendimentoFiltro(inicio: Date, fim: Date) {
  let params = new HttpParams();
  params = params.set('inicio', moment(inicio).format('YYYY-MM-DD'));
  params = params.set('fim', moment(fim).format('YYYY-MM-DD'));
  return firstValueFrom(
    this.http.get(`${this.atendimentosUrl}/relatorios/atendimentoFiltro`, {
      params,
      responseType: 'blob',
    })
  ).then((response) => response);
} */
relatorioMensalUsuario(mes: string, ano: string, usuario: string) {
  let params = new HttpParams();
  params = params.set('mes', mes);
  params = params.set('ano', ano);
  params = params.set('usuario', usuario);
  return firstValueFrom(
    this.http.get(`${this.sacUrl}/relatorios/mensalUsuario`, {
      params,
      responseType: 'blob',
    })
  ).then((response) => response);
}

relatorioMensal(mes: string, ano: string) {
  let params = new HttpParams();
  params = params.set('mes', mes);
  params = params.set('ano', ano);
  return firstValueFrom(
    this.http.get(`${this.sacUrl}/relatorios/mensal`, {
      params,
      responseType: 'blob',
    })
  ).then((response) => response);
}
relatorioMensalsac(mes: string, ano: string, convenio: string) {
  let params = new HttpParams();
  params = params.set('mes', mes);
  params = params.set('ano', ano);
  params = params.set('convenio', convenio);
  return firstValueFrom(
    this.http.get(`${this.sacUrl}/relatorios/mensalsac`, {
      params,
      responseType: 'blob',
    })
  ).then((response) => response);
}
relatorioUsuarios() {
  return firstValueFrom(
    this.http.get(`${this.sacUrl}/relatorios/usuarios`, {
      responseType: 'blob',
    })
  ).then((response) => response);
}
relatorioSacs() {
  return firstValueFrom(
    this.http.get(`${this.sacUrl}/relatorios/sacs`, {
      responseType: 'blob',
    })
  ).then((response) => response);
}



}
