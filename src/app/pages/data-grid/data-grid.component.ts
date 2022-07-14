import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent  {
  employees:Employee[]= []
  expanded: boolean = true;

  constructor(private employeeService: EmployeeService) {
    this.employees = employeeService.getEmployees();

   }



}
