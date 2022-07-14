import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialExtremeModule } from '../devExtreme/material-extreme.module';
import { MenuComponent } from './menu/menu.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { LoadPanelComponent } from './load-panel/load-panel.component';
import { VentanasComponent } from './ventanas/ventanas.component';
import { TreeComponent } from './tree/tree.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { FormUploadComponent } from './form-upload/form-upload.component';


@NgModule({
  declarations: [
    ListComponent,
    MenuComponent,
    DataGridComponent,
    LoadPanelComponent,
    VentanasComponent,
    TreeComponent,
    NavegacionComponent,
    ArchivosComponent,
    FormUploadComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialExtremeModule
  ]
})
export class PagesModule { }
