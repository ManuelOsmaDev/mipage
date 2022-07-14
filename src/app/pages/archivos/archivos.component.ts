import { Component } from '@angular/core';
import { FileItem } from 'src/app/interfaces/fileItem.interface';



@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent   {

   fileItems: FileItem[] = [
    {
      name: "Desktop",
      isDirectory: true,
      size:2022,
      items:[{
        name:"NodeJs",
        isDirectory: true,
        size:1024,
        items:[{
          name: "Node",
          isDirectory: false,
          size:9000,
        },
        {
          name:"npx",
          isDirectory:false,
          size:1000
        }
      ]
      },
      {
        name:"Wallpaper",
        isDirectory:true,
        items:[
          {
            name: "Logo.jpg",
            isDirectory:false,
            size:2000
          }
        ]
      }]
    }
];




}
