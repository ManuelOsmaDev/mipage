import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { LoadPanelComponent } from './load-panel/load-panel.component';
import { VentanasComponent } from './ventanas/ventanas.component';
import { TreeComponent } from './tree/tree.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { ProgramadorComponent } from './programador/programador.component';
import { TabpanelComponent } from './tabpanel/tabpanel.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'list',component:ListComponent},
      {path:'menu',component:MenuComponent},
      {path:'data-grid',component:DataGridComponent},
      {path:'load-panel',component:LoadPanelComponent},
      {path:'ventanas',component:VentanasComponent},
      {path:'tree',component:TreeComponent},
      {path:'archivos',component:ArchivosComponent},
      {path:'form-upload',component:FormUploadComponent},
      {path:'load',component:LoadPanelComponent},
      {path:'notify',component:NotificacionComponent},
      {path:'programador',component:ProgramadorComponent},
      {path:'tabpanel',component:TabpanelComponent},




    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
