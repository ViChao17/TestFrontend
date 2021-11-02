import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ApiClientService} from "../../api/api-client.service";
import {ThemePalette} from '@angular/material/core';

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

  constructor(private api: ApiClientService) { }

  organizations: Task[] = [
    {name: 'CIS', completed: false, color: 'primary'},
    {name: 'OECD', completed: false, color: 'primary'},
    {name: 'EU', completed: false, color: 'primary'},
    {name: 'OPEC', completed: false, color: 'primary'}
  ];

  selected = 'option1';
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
  }

}
