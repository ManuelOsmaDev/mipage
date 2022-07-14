import { NgModule } from '@angular/core';
import { DxListModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxLoadPanelModule } from 'devextreme-angular';
import { DxToolbarModule, DxTextBoxModule } from 'devextreme-angular'
import { DxMenuModule } from "devextreme-angular";
import { DxChartModule,DxFileUploaderModule } from 'devextreme-angular';
import { DxTabsModule,DxFileManagerModule } from 'devextreme-angular';
import { DxTreeMapModule,DxDrawerModule,DxRadioGroupModule} from 'devextreme-angular';


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
    DxDataGridModule,
    DxLoadPanelModule,
    DxTabsModule,
    DxTreeMapModule,
    DxDrawerModule,
    DxFileManagerModule,
    DxRadioGroupModule,
    DxFileUploaderModule
  ]
})
export class MaterialExtremeModule { }
