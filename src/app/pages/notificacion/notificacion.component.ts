import { Component,  } from '@angular/core';
import Notify from "devextreme/ui/notify"


@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent   {

  types= ['error', 'info', 'success','warning']

  showMessage(){
    Notify(
      {
        message: "tienes un nuevo mensaje",
        with:100,
        position:{
          at:"bottom",
          my:"bottom",
          of:"#container"
        }
      },
      this.types[Math.floor(Math.random()* 4)],
      500
    )
  }
  isVisible:boolean = false;
  checkBoxValue: boolean | undefined

  
}
