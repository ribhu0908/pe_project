import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ContraintManagerComponent } from './contraint-manager/contraint-manager.component';
import { FileComponent } from './file/file.component';
import { SolverComponent } from './solver/solver.component';
import { SupplyComponent } from './supply/supply.component';
import { TransportComponent } from './transport/transport.component';
import { ConfigureComponent } from './configure/configure.component';
import { ConstraintManagerComponent } from './constraint-manager/constraint-manager.component';

import {MatTabsModule} from '@angular/material/tabs';

import { FormsModule }   from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    NavbarComponent,
    ContraintManagerComponent
    NavbarComponent,
    FileComponent,
    SolverComponent,
    SupplyComponent,
    TransportComponent,
    ConfigureComponent,
    ConstraintManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
