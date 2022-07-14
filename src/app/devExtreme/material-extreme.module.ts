import { NgModule } from '@angular/core';
import { DxListModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule } from 'devextreme-angular';
import { DxToolbarModule, DxTextBoxModule } from 'devextreme-angular'
import { DxMenuModule } from "devextreme-angular";
import { DxChartModule } from 'devextreme-angular';



@NgModule({
  declarations: [],
  exports:[
    DxListModule,
    DxTextBoxModule,
    DxToolbarModule,
    DxButtonModule,
    DxMenuModule,
    DxChartModule,
    DxCheckBoxModule,
    DxDataGridModule
  ]
})
export class MaterialExtremeModule { }
