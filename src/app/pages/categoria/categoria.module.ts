import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CategoriaListaComponent } from "./categoria-lista/categoria-lista.component";
import { CategoriaCadastroComponent } from "./categoria-cadastro/categoria-cadastro.component";
import { CategoriaRouting } from "./categoria.routing";



@NgModule({
declarations:[
  CategoriaListaComponent,
  CategoriaCadastroComponent
],
imports: [
  PrimeNGModule,
  SharedModule,
  CategoriaRouting
]
})

export class CategoriaModule {}
