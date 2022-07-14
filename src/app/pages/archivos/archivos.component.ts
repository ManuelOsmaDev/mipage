import { Component, OnInit } from '@angular/core';
import { FileItem, ArchivosService } from '../../services/archivos.service';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent   {

fileItems:FileItem[];

constructor(service: ArchivosService){
  this.fileItems = service.getItemFile()
}

}
