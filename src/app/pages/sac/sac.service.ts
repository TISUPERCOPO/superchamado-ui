import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';
import { Sac } from 'src/app/core/models/sac.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SacService {
sacUrl: string;


constructor(private http: HttpClient) {
  this.sacUrl = `${environment.apiUrl}/sacs`;
 }


 listar(): Promise<any> {
  return firstValueFrom(this.http.get(`${this.sacUrl}`)).then(
    (response) => {
      const obj = response as any[];
      this.convertStringDate(obj);
      return obj;
    }
  );
}

AlternarLista(valor: string): Promise<any> {
  return firstValueFrom(this.http.get(`${this.sacUrl}${valor}`)).then(
    (response) => response
  );
}

adicionar(sac: Sac): Promise<Sac> {
  return firstValueFrom(this.http.post<Sac>(this.sacUrl, sac));
}

atualizar(sac: Sac): Promise<Sac> {
  return firstValueFrom(
    this.http.put(`${this.sacUrl}/${sac.id}`, sac)
  ).then((response) => response as Sac);
}


buscarPorId(id: number) {
  return firstValueFrom(this.http.get(`${this.sacUrl}/${id}`)).then(
    (response) => response as Sac
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
