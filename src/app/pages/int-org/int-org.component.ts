import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ApiClientService} from "../../api/api-client.service";
import {ThemePalette} from '@angular/material/core';
import {ApiInitDataService} from "../../api/api-init-data.service";

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-int-org',
  templateUrl: './int-org.component.html',
  styleUrls: ['./int-org.component.css']
})
export class IntOrgComponent implements OnInit {

  constructor(private api: ApiClientService, private initData: ApiInitDataService) { }

  setChart(): void {
    if(this.selected === 'option1'){
      const orgs: any = {};
      this.organizations.forEach((value: Task) => {
        orgs[value.name] = value.completed;
      });
      this.api.getIntOrg(
        {"type": "line", "x_field": "Year"},
        {"int_org": orgs, "year": {"2020": "less_or_equal"}, "var": [this.criterion]},
        items => {
          this.chartOptions.series = items;
          this.chartOptions.title!.text = 'selected org';
          this.updateFlag = true;
        });
      alert('Работает странно!(скорее всего неправильно)');
    }
    if(this.selected === 'option2'){
      alert('Второй вариант использования!');
    }
  }

  organizations: Task[] = [
    {name: 'CIS', completed: false, color: 'primary'},
    {name: 'OECD', completed: false, color: 'primary'},
    {name: 'EU', completed: false, color: 'primary'},
    {name: 'OPEC', completed: false, color: 'primary'}
  ];

  variables: string[] = [];
  year = '2005';
  years: number[] = [];
  selected = 'option1';
  criterion = 'wind_twh';
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
    this.years = this.initData.yearList();
  }

}
