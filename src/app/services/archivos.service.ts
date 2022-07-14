import { Injectable } from '@angular/core';

export class FileItem {
  name: string | undefined;

  isDirectory: boolean | undefined;

  size?: number;

  items?: FileItem[];
}

const fileItems: FileItem[] = [{
  name: 'Documents',
  isDirectory: true,
  items: [{
    name: 'Projects',
    isDirectory: true,
    items: [{
      name: 'About.rtf',
      isDirectory: false,
      size: 1024,
    }, {
      name: 'Passwords.rtf',
      isDirectory: false,
      size: 2048,
    }],
  }, {
    name: 'About.xml',
    isDirectory: false,
    size: 1024,
  }, {
    name: 'Managers.rtf',
    isDirectory: false,
    size: 2048,
  }, {
    name: 'ToDo.txt',
    isDirectory: false,
    size: 3072,
  }],
}, {
  name: 'Images',
  isDirectory: true,
  items: [{
    name: 'phote.jpg',
    isDirectory: false,
    size: 2080,
  }, {
    name: 'banner.gif',
    isDirectory: false,
    size: 10240,
  }],
}, {
  name: 'System',
  isDirectory: true,
  items: [{
    name: 'Employees.txt',
    isDirectory: false,
    size: 3072,
  }, {
    name: 'PasswordList.txt',
    isDirectory: false,
    size: 5120,
  }],
}, {
  name: 'Description.rtf',
  isDirectory: false,
  size: 1024,
}, {
  name: 'Description.txt',
  isDirectory: false,
  size: 2048,
}];
@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  getItemFile():FileItem[]{
    return fileItems;
  }
}
