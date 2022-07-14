import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(e: any) {
    if (e.itemData.text) {
        console.log(e.itemData.text + ' has been clicked!');
    }
    else if (e.itemData.icon) {
        console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
    }
}
  toogle:boolean = false;

  onValue(e:any){
    this.toogle = e.value
  }

}
