import { Injectable } from '@angular/core';
import {ApiClientService} from "./api-client.service";

@Injectable({
  providedIn: 'root'
})
export class ApiInitDataService {

  constructor(private api: ApiClientService) { }

  countryList(): string[]{
    const items: string[] = [];
    this.api.getCountryList((i: string[]) => {
      i.forEach(value => {
        items.push(value);
      });
    });
    return items;
  }

  regionList(): string[]{
    const items: string[] = [];
    this.api.getRegionList((i: string[]) => {
      i.forEach(value => {
        items.push(value);
      });
    });
    return items;
  }

  subregionList(): string[]{
    const items: string[] = [];
    this.api.getSubregionList((i: string[]) => {
      i.forEach(value => {
        items.push(value);
      });
    });
    return items;
  }

  variablesList(): string[]{
    const items: string[] = [];
    this.api.getValueList((i: string[]) => {
      i.forEach(value => {
        items.push(value);
      });
    });
    return items;
  }

  yearList(): number[]{
    const items: number[] = [];
    for (let i = 1965; i < 2021; i++){
      items.push(i);
    }
    return items;
  }
}
