export interface CityPopulation {
  value: number;
  name: string;
  country: string;
}
export interface CitiesPopulation {
  name: string;
  items: CityPopulation[];
}
