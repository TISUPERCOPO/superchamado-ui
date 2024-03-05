import { NgModule } from '@angular/core';
import { PrimeNGModule } from 'src/app/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmpresasListaComponent } from './empresas-lista/empresas-lista.component';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { EmpresasRouting } from './empresa.routing';





@NgModule({
  declarations: [

    EmpresasListaComponent,
    EmpresaCadastroComponent
  ],
  imports: [
    PrimeNGModule,
    SharedModule,
    EmpresasRouting
  ]

})


export class EmpresasModule {}
