import { Component } from '@angular/core';

@Component({
  selector: 'app-load-panel',
  templateUrl: './load-panel.component.html',
  styleUrls: ['./load-panel.component.css']
})
export class LoadPanelComponent    {
  isPopupVisible: boolean;

  constructor(){
    this.isPopupVisible = true
  }


  togglePopup(){
    this.isPopupVisible  = !this.isPopupVisible
  }
}
