import { NgModule } from "@angular/core";
import { PrincipalComponent } from "./principal/principal.component";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { RelatoriosRountingModule } from "./relatorio.routing";



@NgModule({
  declarations: [ PrincipalComponent ],
  imports: [
    PrimeNGModule,
    SharedModule,
    RelatoriosRountingModule
  ],


})
export class RelatoriosModule { }
