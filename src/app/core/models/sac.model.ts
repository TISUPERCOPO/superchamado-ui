import { Empresas } from "./empresas.model";

export class Sac {
  id?: number;
  cliente?: string;
  pedido?: number;
  empresa?: string;
  vendedor?: string;
  problema?: string;
  setor?: string;
  credito?: string;
  transportadora?: string;
  tipopedido?: string;
  valorcredito?: number;
  frete?: number;
  devolucao?: boolean;
  custoTotal?: number;
  observacao?: string;
  status?: boolean;
  dataprevisao?: Date;
  loginusuario?: string;
  datagravacao?: Date;
}
