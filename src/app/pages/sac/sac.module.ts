import { NgModule } from "@angular/core";
import { SacListaComponent } from "./sac-lista/sac-lista.component";
import { SacCadastroComponent } from "./sac-cadastro/sac-cadastro.component";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { SacRouting } from "./sac.routing";
import { InputNumberModule } from "primeng/inputnumber";



@NgModule({
declarations:[
  SacListaComponent,
  SacCadastroComponent
],
imports: [
  PrimeNGModule,
  SharedModule,
  SacRouting,
]
})

export class SacModule {}
