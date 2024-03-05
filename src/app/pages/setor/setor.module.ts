import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { SetorRouting } from "./setor.routing";
import { SetorListarComponent } from "./setor-listar/setor-listar.component";
import { SetorCadastroComponent } from "./setor-cadastro/setor-cadastro.component";



@NgModule({
declarations:[
  SetorListarComponent,
  SetorCadastroComponent
],
imports: [
  PrimeNGModule,
  SharedModule,
  SetorRouting
]

})

export class SetorModule {}
