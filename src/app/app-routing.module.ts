import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {ContraintManagerComponent} from "./contraint-manager/contraint-manager.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  { path:'cm', component: ContraintManagerComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
