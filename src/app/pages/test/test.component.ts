import { Component, OnInit } from '@angular/core';
import {ApiClientService} from "../../api/api-client.service";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  updateFlag = false;
  constructor(private api: ApiClientService) { }
  Highcharts: typeof Highcharts = Highcharts;
  lineChartOptions: Highcharts.Options = {
    rangeSelector: {
      buttons: [{
        count: 1,
        type: 'minute',
        text: '1M'
      }, {
        count: 5,
        type: 'minute',
        text: '5M'
      }, {
        type: 'all',
        text: 'All'
      }],
      inputEnabled: false,
      selected: 0
    },

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
      console.log(items.series);
      this.lineChartOptions.series = items.series;
      this.updateFlag = true;
    });
  }

}
