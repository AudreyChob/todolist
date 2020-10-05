import { Component, OnInit,ElementRef } from '@angular/core';
import { Chart } from "chart.js";
import { ViewChild } from '@angular/core'
declare var google:any;

@Component({
  selector: 'app-camembert',
  templateUrl: './camembert.page.html',
  styleUrls: ['./camembert.page.scss'],
})
export class CamembertPage implements OnInit {

  pieChartData;
  @ViewChild("barCanvas") barCanvas: ElementRef;
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;

  barChart: Chart = [] ;
  // doughnutChart: Chart;
  // lineChart: Chart;
    constructor( private element: ElementRef) { }

  ngOnInit() {
    let _ = this;
    _.useAngularLibrary();
    let ctx = this.element.nativeElement.querySelector('#barCanvas');
let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ["Janvier", "Fevrier", "Mars", "Avril", "Ma", "Juin", "Jullet", "Aout", "Septembre", "Octobre", "Novembre","Decembre"],
    datasets: [{
      label: "Suivi des températures",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, -2, 5, -1, 20, 30, 37, 35, 20, 10, 5,-7],
    }]
  },

  // Configuration options go here
  options: {}
});
}


  useAngularLibrary() {
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Languages', 'Percent'],
        ['Ionic',     33],
        ['Angular',      33],
        ['JavaScript',  33]
      ],
      options: {
      'title': 'Technologies',
      'width': 400,
      'height': 300
      }
    };
  }
}
