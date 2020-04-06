
import {Chart} from 'chart.js';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('lineCanvas',null) lineCanvas;
  

  googleChartLibrary;
  lineChart: any;
  constructor() {

  }


  ngOnInit() {
    this.lineCanvas.nativeElement.height = 0.75*window.innerHeight;
    this.lineChartMethod();
  }
  
  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['01', '02', '03', '04' ,'05', '08', '09', '10'],
        datasets: [
          {
            label: 'Power',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [50,52,51,53,52,55,53,56,52,53],
            spanGaps: false,
          }
        ]
      }
    });
  }
  

}

