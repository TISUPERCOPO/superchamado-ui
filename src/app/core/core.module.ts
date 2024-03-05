import { NgModule } from "@angular/core";
import { PrimeNGModule } from "../primeng.module";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { UsuariosService } from "../pages/usuarios/usuarios.service";
import { NavBarComponent } from "./layout/nav-bar/nav-bar.component";
import { LayoutComponent } from "./layout/layout.component";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "../pages/seguranca/auth.service";
import { ErrorHandlerService } from "./error-handler.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { ValidationService } from "./service/validation.service";
import { EmpresasService } from "../pages/empresas/empresas.service";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { MessageModule } from "primeng/message";



@NgModule({
  declarations: [
    NavBarComponent,
    LayoutComponent
  ],
  imports: [
    PrimeNGModule,
    RouterModule,
    SharedModule,
    ConfirmDialogModule
  ],
  providers: [
    AuthService,
    JwtHelperService,
    UsuariosService,
    ErrorHandlerService,
    ConfirmationService,
    MessageService,
    ValidationService,
    EmpresasService,
  ],
  exports:[
    LayoutComponent,
    ConfirmDialogModule,
  ]

})

export class CoreModule {}
