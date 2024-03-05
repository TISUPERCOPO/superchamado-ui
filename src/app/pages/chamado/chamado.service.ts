import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';
import { Chamado } from 'src/app/core/models/chamado.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {
  chamadoUrl: string;

constructor(private http: HttpClient) {
  this.chamadoUrl = `${environment.apiUrl}/chamados`;
}

listarChamado(): Promise<any> {
  return firstValueFrom(this.http.get(`${this.chamadoUrl}`)).then(
    (response) => {
      const obj = response as any[];
      this.convertStringDate(obj);
      return obj;
    });
}



excluir(id: number): Promise<void> {
  return firstValueFrom(this.http.delete(`${this.chamadoUrl}/${id}`))
    .then()
    .then(() => null);
}

adicionar(chamado: Chamado): Promise<Chamado> {
  return firstValueFrom(this.http.post<Chamado>(this.chamadoUrl, chamado));
}

atualizar(chamado: Chamado): Promise<Chamado> {
  return firstValueFrom(
    this.http.put(`${this.chamadoUrl}/${chamado.id}`, chamado)
  ).then((response) => response as Chamado);
}

buscarPorId(id: number) {
  return firstValueFrom(this.http.get(`${this.chamadoUrl}/${id}`)).then(
    (response) => response as Chamado
  );
}

mudarStatus(id: number, status: boolean): Promise<void> {
  const headers = new HttpHeaders().append(
    'Content-Type',
    'application/json'
  );
  return firstValueFrom(
    this.http.put(`${this.chamadoUrl}/${id}/status`, status, { headers })
  ).then(() => null);
}

AlternarLista(valor: string): Promise<any> {
  return firstValueFrom(this.http.get(`${this.chamadoUrl}${valor}`)).then(
    (response) => response
  );
}


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
