import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { DashboardsRountingModule } from "./dashboards.routing";
import { SharedModule } from "src/app/shared/shared.module";
import { PrincipalComponent } from "./principal/principal.component";





@NgModule({
declarations: [
  PrincipalComponent
],
imports: [
    PrimeNGModule,
    DashboardsRountingModule,
    SharedModule
]


})


export class DashboardsModule{}
