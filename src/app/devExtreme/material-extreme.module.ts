import { NgModule } from '@angular/core';
import { DxListModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxLoadPanelModule } from 'devextreme-angular';
import { DxToolbarModule, DxTextBoxModule } from 'devextreme-angular'
import { DxTabPanelModule,DxMenuModule, DxSpeedDialActionModule } from "devextreme-angular";
import { DxChartModule,DxFileUploaderModule } from 'devextreme-angular';
import { DxTabsModule,DxFileManagerModule } from 'devextreme-angular';;
import { DxNumberBoxModule,DxPopoverModule,DxToastModule,DxBoxModule,DxSwitchModule,DxScrollViewModule,DxPopupModule,DxSankeyModule,DxProgressBarModule,DxTreeMapModule,DxDrawerModule,DxRadioGroupModule} from 'devextreme-angular';


@NgModule({
  declarations: [],
  exports:[
    DxListModule,
    DxPopoverModule,
    DxBoxModule,
    DxNumberBoxModule,
    DxToastModule,
    DxScrollViewModule,
    DxSwitchModule,
    DxPopupModule,
    DxTextBoxModule,
    DxToolbarModule,
    DxButtonModule,
    DxProgressBarModule,
    DxSankeyModule,
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
    DxFileUploaderModule,
    DxSpeedDialActionModule,
    DxTabPanelModule,
  ]
})
export class MaterialExtremeModule { }
