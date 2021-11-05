import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ApiClientService} from "../../api/api-client.service";
import {ApiInitDataService} from "../../api/api-init-data.service";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  constructor(private api: ApiClientService, private initData: ApiInitDataService) { }

  setChart(): void {
    if(this.selected === 'option1'){
      this.api.getRegions(
        {"type": "line", "x_field": "Year"},
        {"region": [this.region], "year": {"2020": "less_or_equal"}, "var": [this.criterion]},
        items => {
          this.chartOptions.series = items;
          this.chartOptions.title!.text = this.region;
          this.updateFlag = true;
        });
    }
    if(this.selected === 'option2'){
      alert('Второй вариант использования!');
    }
  }

  variables: string[] = [];
  year = '2005';
  years: number[] = [];
  selected = 'option1';
  criterion = 'wind_twh';
  region = 'Europe';
  allRegion: string[] = [];
  updateFlag = false;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {

    title: {
      text: 'Data from server'
    },

    exporting: {
      enabled: false
    },

    series: [
      {
        "type": "line",
        "data": []
      }
    ]
  }

  ngOnInit(): void {
    this.api.getCountry(
      {"type": "column", "discrete": true, "x_field": "Year", "y_field": "Value"},
      {"country": ["United Kingdom"], "year": {"2000": "less_or_equal"}, "var": ["pop"]},
      items => {
        this.chartOptions.series = items;
        this.updateFlag = true;
      });
    this.variables = this.initData.variablesList();
    this.allRegion = this.initData.regionList();
    this.years = this.initData.yearList();
  }

}
