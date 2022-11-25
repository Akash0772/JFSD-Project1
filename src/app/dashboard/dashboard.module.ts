import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
