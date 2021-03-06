import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';
import {LoanServiceService} from '../../../services/loan-service.service';

@Component({
  selector: 'app-loan-overdue',
  templateUrl: './loan-overdue.component.html',
  styleUrls: ['./loan-overdue.component.css']
})
export class LoanOverdueComponent implements OnInit {
  item = [];
  quantity = [];
  overdueChart = [];

  constructor(private httpClient: HttpClient, private loanService: LoanServiceService) { }

  ngOnInit(): void {

    this.loanService.getloanOverdues('1').subscribe((res: any) => {
      Object.keys(res).forEach(key => {
        const obj1 = res[key];
        this.item.push(key);
        this.quantity.push(obj1);
      });

      this.overdueChart = new Chart('overdueCanvas', {
        type: 'bar',
        data: {
          labels: this.item,
          datasets: [
            {
              label: 'Amount',
              data: this.quantity,
              backgroundColor: 'rgb(55,154,192)',   /*'rgb(159, 201, 247)',*/
              borderColor: '#3cba9f',
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
