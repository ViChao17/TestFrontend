import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ApiClientService} from "../../api/api-client.service";
import {ApiInitDataService} from "../../api/api-init-data.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private api: ApiClientService, private initData: ApiInitDataService) { }

  setChart(): void {
    if(this.selected === 'option1'){
      this.api.getCountry(
        {"type": "line", "x_field": "Year"},
        {"country": [this.country], "year": {"2020": "less_or_equal"}, "var": this.variables},
        items => {
          this.chartOptions.series = items;
          this.chartOptions.title!.text = this.country;
          this.updateFlag = true;
        });
    }
    if(this.selected === 'option2'){
      const year_info: any = {};
      year_info[this.year] = "equal";
      this.api.getCountry(
        {"type": "column", "x_field": "Var"},
        {"country": [this.country], "year": year_info},
        items => {
          this.chartOptions.series = items;
          this.chartOptions.title!.text = '';
          this.updateFlag = true;
        });
    }
  }

  variables: string[] = [];
  year = '2005';
  years: number[] = [];
  selected = 'option1';
  criterion = 'wind_twh';
  country = 'Russian Federation';
  allCountry: string[] = [];
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
      {"type": "line", "discrete": true, "x_field": "Year", "y_field": "Value"},
      {"country": ["United Kingdom"], "year": {"2020": "less_or_equal"}, "var": ["pop"]},
      items => {
        this.chartOptions.series = items;
        this.updateFlag = true;
      });
    this.variables = this.initData.variablesList();
    this.allCountry = this.initData.countryList();
    this.years = this.initData.yearList();
  }

}
