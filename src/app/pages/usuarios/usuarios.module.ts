import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { UsuarioListaComponent } from "./usuario-lista/usuario-lista.component";
import { UsuarioEditarComponent } from "./usuario-editar/usuario-editar.component";
import { UsuarioCadastroComponent } from "./usuario-cadastro/usuario-cadastro.component";
import { UsuariosRouting } from "./usuarios.routing";





@NgModule({
  declarations: [
    UsuarioListaComponent,
    UsuarioEditarComponent,
    UsuarioCadastroComponent
  ],
  imports:[
    PrimeNGModule,
    SharedModule,
    UsuariosRouting,
  ]
})


export class UsuariosModule {}
