import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { DataGridComponent } from './data-grid/data-grid.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'list',component:ListComponent},
      {path:'menu',component:MenuComponent},
      {path:'data-grid',component:DataGridComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
