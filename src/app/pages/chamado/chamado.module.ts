import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ChamadoListaComponent } from "./chamado-lista/chamado-lista.component";
import { ChamadoCadastroComponent } from "./chamado-cadastro/chamado-cadastro.component";
import { ChamadoRouting } from "./chamado.routing";



@NgModule({
declarations: [
  ChamadoListaComponent,
  ChamadoCadastroComponent
],
imports: [
  PrimeNGModule,
  SharedModule,
  ChamadoRouting
]
})

export class ChamadoModule {}
