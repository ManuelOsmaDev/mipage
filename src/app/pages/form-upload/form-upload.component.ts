import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent   {
  @ViewChild('form') form! : NgForm;

  updateClick(){
    alert('TODO ESTA LISTO!!')
  }


}
