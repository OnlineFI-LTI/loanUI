import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';
import {LoanServiceService} from '../../../services/loan-service.service';

@Component({
  selector: 'app-loan-outstanding',
  templateUrl: './loan-outstanding.component.html',
  styleUrls: ['./loan-outstanding.component.css']
})
export class LoanOutstandingComponent implements OnInit {
  item = [];
  quantity = [];
  outStandingChart = [];

  constructor(private httpClient: HttpClient, private loanService: LoanServiceService) { }

  ngOnInit(): void {
    this.loanService.getloanOutstandings('1').subscribe((result: any) => {
      Object.keys(result).forEach(key => {
        const obj1 = result[key];
        this.item.push(key);
        this.quantity.push(obj1);
      });

      this.outStandingChart = new Chart('outStandingCanvas', {
        type: 'bar',
        data: {
          labels: this.item,
          datasets: [
            {
              label: 'Amount',
              data: this.quantity,
              backgroundColor: 'rgb(55,154,192)',
              /*borderColor: '#3cba9f',*/
              fill: false
            }
          ]
        },
        options: {
          responsive: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                fontColor: '#000',
                fontSize: 13,
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                fontColor: '#000',
                fontSize: 13,
              }
            }],
          }
        }
      });
    });
  }
}
