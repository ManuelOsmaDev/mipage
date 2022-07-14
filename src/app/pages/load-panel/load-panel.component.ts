import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-panel',
  templateUrl: './load-panel.component.html',
  styleUrls: ['./load-panel.component.css']
})
export class LoadPanelComponent implements OnInit {
  isLoadPanelVisible:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
