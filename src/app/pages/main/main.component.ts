import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      plotShadow: false,

    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 30,
        borderColor: 'rgba(10, 10, 10, 0.1)',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0
        }
      }
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '$ 500.000.00',
    },
    legend: {
      enabled: false
    },
    series: [
      {
        type: 'pie',
        data: [
          {name: 'A', y: 1, color: '#ffff00'},
          {name: 'B', y: 2, color: '#393e46'},
          {name: 'C', y: 3, color: '#00adb5'},
          {name: 'D', y: 4, color: '#ff1f51'},
          {name: 'E', y: 5, color: '#506ef9'},
        ]
      }
    ]
  };

  histChartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      plotShadow: false,

    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 30,
        borderColor: 'rgba(10, 10, 10, 0.1)',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0
        }
      }
    },
    title: {
      verticalAlign: 'top',
      floating: true
    },
    legend: {
      enabled: false
    },
    series: [
      {
        type: 'column',
        data: [
          {name: 'A', y: 1, color: '#ffff00'},
          {name: 'B', y: 2, color: '#393e46'},
          {name: 'C', y: 3, color: '#00adb5'},
          {name: 'D', y: 4, color: '#ff1f51'},
          {name: 'E', y: 5, color: '#506ef9'},
        ]
      }
    ]
  };

  roundChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      plotShadow: false,

    },
    plotOptions: {
      pie: {
        borderColor: 'rgba(10, 10, 10, 0.1)',
        dataLabels: {
          connectorWidth: 0
        }
      }
    },
    title: {
      verticalAlign: 'top',
      floating: true
    },
    legend: {
      enabled: false
    },
    series: [
      {
        type: 'pie',
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }
    ]
  };


  constructor() { }

  ngOnInit(): void {
    console.log('main init!');
  }
}
