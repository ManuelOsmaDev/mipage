import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Product, ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  dataSource!:DataSource;
  products:Product[]=[];

  constructor(private service: ProductosService) {
    this.products = service.getProducts();
    this.dataSource = new DataSource({
      store: this.products,
      group:"Category"
    })
  }


}
