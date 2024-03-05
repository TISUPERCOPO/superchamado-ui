import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';
import { Setor } from 'src/app/core/models/setor.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SetorService {
  setorUrl: string;


constructor(private http: HttpClient) {
  this.setorUrl = `${environment.apiUrl}/setores`;
 }


 listarSetor(): Promise<any> {
  return firstValueFrom(this.http.get(`${this.setorUrl}`)).then(
    (response) => {
      const obj = response as any[];
      this.convertStringDate(obj);
      return obj;
    });
}

excluir(id: number): Promise<void> {
  return firstValueFrom(this.http.delete(`${this.setorUrl}/${id}`))
    .then()
    .then(() => null);
}


adicionar(setor: Setor): Promise<Setor> {
  return firstValueFrom(this.http.post<Setor>(this.setorUrl, setor));
}

atualizar(setor: Setor): Promise<Setor> {
  return firstValueFrom(
    this.http.put(`${this.setorUrl}/${setor.id}`, setor)
  ).then((response) => response as Setor);
}

buscarPorId(id: number) {
  return firstValueFrom(this.http.get(`${this.setorUrl}/${id}`)).then(
    (response) => response as Setor
  );
}

mudarStatus(id: number, status: boolean): Promise<void> {
  const headers = new HttpHeaders().append(
    'Content-Type',
    'application/json'
  );
  return firstValueFrom(
    this.http.put(`${this.setorUrl}/${id}/status`, status, { headers })
  ).then(() => null);
}

AlternarLista(valor: string): Promise<any> {
  return firstValueFrom(this.http.get(`${this.setorUrl}${valor}`)).then(
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
