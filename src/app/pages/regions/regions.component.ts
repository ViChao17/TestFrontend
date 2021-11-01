import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ApiClientService} from "../../api/api-client.service";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  constructor(private api: ApiClientService) { }

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
