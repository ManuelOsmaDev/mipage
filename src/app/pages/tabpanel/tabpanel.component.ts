import { Component } from '@angular/core';

@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.css']
})
export class TabpanelComponent   {
  employeeData = {
        Nombre: 'Jose Manuel Sanchez Osma',
        Ocupacion: 'Dev',
        FechaEntrada: new Date(2012, 4, 13),
        NumeroOficina: 901,
        Notas: 'Manuel is a Frontend Developer',
        Rol: ['Developer', 'Backend', 'DevOps']
  }

  tabNames = ['Empleado','Notas','Rol']
  selectedTabIndex = 0;

  onValueChanged(e:any){
    this.selectedTabIndex = this.tabNames.indexOf(e.value);
}
}
