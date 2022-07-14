import { Injectable } from '@angular/core';

export interface Product {
  ID: Number,
  Name: String,
  Category: String,
}

const products: Product[] = [{
  ID: 1,
  Name: "HD Video Player",
  Category: "Video Players"
},
{
  ID: 3,
  Name: "SuperPlasma 50",
  Category: "Televisions"
},
{
  ID: 4,
  Name: "SuperLED 50",
  Category: "Televisions"
},
{
  ID: 5,
  Name: "SuperLED 42",
  Category: "Televisions"
},
{
  ID: 6,
  Name: "SuperLCD 55",
  Category: "Televisions"
},
{
  ID: 7,
  Name: "SuperLCD 42",
  Category: "Televisions"
},
{
  ID: 8,
  Name: "SuperPlasma 65",
  Category: "Televisions"
},
{
  ID: 9,
  Name: "SuperLCD 70",
  Category: "Televisions"
},
{
  ID: 10,
  Name: "DesktopLED 21",
  Category: "Monitors"
},
{
  ID: 12,
  Name: "DesktopLCD 21",
  Category: "Monitors"
},
{
  ID: 13,
  Name: "DesktopLCD 19",
  Category: "Monitors"
},
{
  ID: 14,
  Name: "Projector Plus",
  Category: "Projectors"
},
{
  ID: 15,
  Name: "Projector PlusHD",
  Category: "Projectors"
},
{
  ID: 17,
  Name: "Iphone 3",
  Category: "Phone"
},
{
  ID: 18,
  Name: "iphone 12",
  Category: "Phone"
},
{
  ID: 19,
  Name: "iphone Pro MAX",
  Category: "Phone"
},
{
  ID: 20,
  Name: "Fortnite",
  Category: "VideoGames"
},
{
  ID: 21,
  Name: "Gears Of Wars",
  Category: "VideoGames"
},



];

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getProducts():Product[]{
    return products;
  }
}
