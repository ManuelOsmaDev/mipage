import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialExtremeModule } from '../devExtreme/material-extreme.module';
import { MenuComponent } from './menu/menu.component';
import { DataGridComponent } from './data-grid/data-grid.component';


@NgModule({
  declarations: [
    ListComponent,
    MenuComponent,
    DataGridComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialExtremeModule
  ]
})
export class PagesModule { }
