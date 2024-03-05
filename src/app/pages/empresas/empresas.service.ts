import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { Empresas } from 'src/app/core/models/empresas.model';
import { firstValueFrom } from 'rxjs';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {
  empresaUrl: string;

  constructor(private http: HttpClient) {
    this.empresaUrl = `${environment.apiUrl}/empresas`;
  }

  listar(): Promise<any> {
    return firstValueFrom(this.http.get(`${this.empresaUrl}`)).then(
      (response) => {
        const obj = response as any[];
        this.convertStringDate(obj);
        return obj;
      }
    );
  }

  listarEmpresas(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.empresaUrl}`)
    )
      .then(response => {
        const obj = response as any[];
        this.convertStringDate(obj);
        return obj;
      });
  }

  listarEmpresasUsuario(): Promise<any> {
    return firstValueFrom(this.http.get(`${this.empresaUrl}/usuario`)).then(
      (response) => response
    );
  }

  adicionar(obj: Empresas): Promise<Empresas> {
    return firstValueFrom(this.http.post<Empresas>(this.empresaUrl, obj));
  }

  atualizar(obj: Empresas): Promise<Empresas> {
    return firstValueFrom(
      this.http.put(`${this.empresaUrl}/${obj.id}`, obj)
    ).then((response) => response as Empresas);
  }

  buscarPorId(id: number) {
    return firstValueFrom(this.http.get(`${this.empresaUrl}/${id}`)).then(
      (response) => response as Empresas
    );
  }

  AlternarLista(valor: string): Promise<any> {
    return firstValueFrom(this.http.get(`${this.empresaUrl}${valor}`)).then(
      (response) => response
    );
  }
  // TODO Metodo para converter Datas e filtros
  convertStringDate(obj: any[]) {
    obj.forEach((element) => {
      // Certifique-se de que o formato da string de data está correto
      const dateFormat = 'YYYY/MM/DD H:mm';

      // Verifique se a data não é nula ou indefinida antes de tentar convertê-la
      if (element.datagravacao) {
        element.datagravacao = moment(element.datagravacao, dateFormat)
          .tz('America/Sao_Paulo')
          .toDate();
      }
    });
  }
}
