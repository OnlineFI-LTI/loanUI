import { Component, OnInit } from '@angular/core';
import {AppData} from '../../../appData';
import {LoanServiceService} from '../../../services/loan-service.service';
import Big from 'big.js';

@Component({
  selector: 'app-application-summary',
  templateUrl: './application-summary.component.html',
  styleUrls: ['./application-summary.component.css']
})
export class ApplicationSummaryComponent implements OnInit {
  appData: AppData[] = [];

  constructor(private loanService: LoanServiceService) { }

  formattedAmount(amt: any){
    return  Big(amt).toFixed(2);
  }

  ngOnInit(): void {
    this.loanService.getApplicationSummary('1').subscribe(data => {
      this.appData = data;
    });
  }

}
