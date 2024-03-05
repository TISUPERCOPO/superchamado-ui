import { Categoria } from "./categoria.model";
import { Setor } from "./setor.model";

export class Chamado {
  id?: number;
  descricao?: string;
  titulo?: string;
  status?: boolean;
  urgencia?: string;
  categoria = new Categoria();
  setor = new Setor();
}
