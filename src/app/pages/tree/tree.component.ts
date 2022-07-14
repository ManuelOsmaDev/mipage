import { Component,  } from '@angular/core';
import { CountryService, CitiesPopulation } from '../../services/country.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent   {
  citiesPopulatios! : CitiesPopulation[];

  constructor(private serviceCountry: CountryService) {
    this.citiesPopulatios = serviceCountry.getCitiesPopulations()
   }



}
