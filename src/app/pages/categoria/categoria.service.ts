import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';
import { Categoria } from 'src/app/core/models/categoria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categoriaUrl: string;

constructor(private http: HttpClient) {
  this.categoriaUrl = `${environment.apiUrl}/categorias`;
}


listarCategoria(): Promise<any> {
  return firstValueFrom(this.http.get(`${this.categoriaUrl}`)).then(
    (response) => {
      const obj = response as any[];
      this.convertStringDate(obj);
      return obj;
    });
}



excluir(id: number): Promise<void> {
  return firstValueFrom(this.http.delete(`${this.categoriaUrl}/${id}`))
    .then()
    .then(() => null);
}

adicionar(categoria: Categoria): Promise<Categoria> {
  return firstValueFrom(this.http.post<Categoria>(this.categoriaUrl, categoria));
}

atualizar(categoria: Categoria): Promise<Categoria> {
  return firstValueFrom(
    this.http.put(`${this.categoriaUrl}/${categoria.id}`, categoria)
  ).then((response) => response as Categoria);
}

buscarPorId(id: number) {
  return firstValueFrom(this.http.get(`${this.categoriaUrl}/${id}`)).then(
    (response) => response as Categoria
  );
}

mudarStatus(id: number, status: boolean): Promise<void> {
  const headers = new HttpHeaders().append(
    'Content-Type',
    'application/json'
  );
  return firstValueFrom(
    this.http.put(`${this.categoriaUrl}/${id}/status`, status, { headers })
  ).then(() => null);
}

AlternarLista(valor: string): Promise<any> {
  return firstValueFrom(this.http.get(`${this.categoriaUrl}${valor}`)).then(
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
