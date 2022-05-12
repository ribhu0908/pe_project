import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigureComponent } from './configure/configure.component';
import { ConstraintManagerComponent } from './constraint-manager/constraint-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileComponent } from './file/file.component';
import { SolverComponent } from './solver/solver.component';
import { SupplyComponent } from './supply/supply.component';
import { TransportComponent } from './transport/transport.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {ContraintManagerComponent} from "./contraint-manager/contraint-manager.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  { path:'cm', component: ContraintManagerComponent, pathMatch: 'full'}
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'file', component: FileComponent, pathMatch: 'full'},
  {path: 'solver', component: SolverComponent, pathMatch: 'full'},
  {path: 'supply', component: SupplyComponent, pathMatch: 'full'},
  {path: 'transport', component: TransportComponent, pathMatch: 'full'},
  {path: 'configure', component: ConfigureComponent, pathMatch: 'full'},
  {path: 'constraint-manager', component: ConstraintManagerComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
