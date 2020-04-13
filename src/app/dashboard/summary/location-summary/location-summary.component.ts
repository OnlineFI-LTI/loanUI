import { Component, OnInit } from '@angular/core';
import {LoanServiceService} from '../../../services/loan-service.service';
import Big from 'big.js';

@Component({
  selector: 'app-location-summary',
  templateUrl: './location-summary.component.html',
  styleUrls: ['./location-summary.component.css']
})
export class LocationSummaryComponent implements OnInit {
  postsArray: Array<any> = [];

  constructor(private loanService: LoanServiceService) { }

  ngOnInit(): void {
    this.loanService.getlocationSummary('1').subscribe(
      (response: any) => {
        Object.keys(response).forEach(key => {
          // tslint:disable-next-line:prefer-const
          let value = response[key];
          let labelName = '';
          switch (key) {
            case 'numberOfCashTransactionInAday':
              labelName = 'Number Of Cash Transaction In A Day';
              break;
            case 'numberOfTransferTransactionInAday':
              labelName = 'Number Of Transfer Transaction In A Day';
              break;
            case 'numberOfLoanApplications':
              labelName = 'Number Of Loan Applications';
              break;
            case 'numberOfLoanAccounts':
              labelName = 'Number Of Loan Accounts';
              break;
            case 'numberOfCustomers':
              labelName = 'Number Of Customers';
              break;
            case 'loanAmountDisbursed':
              labelName = 'Loan Amount Disbursed';
              value = Big(response[key]).toFixed(2);
              break;
            default:
              break;
          }
          this.postsArray.push({k: labelName , m: value });
        });
      }
    );
  }



}
