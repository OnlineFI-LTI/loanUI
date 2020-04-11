import { Component, OnInit } from '@angular/core';
import {LoanServiceService} from '../../../services/loan-service.service';

@Component({
  selector: 'app-location-summary',
  templateUrl: './location-summary.component.html',
  styleUrls: ['./location-summary.component.css']
})
export class LocationSummaryComponent implements OnInit {
  postsArray: Array<any> = [];

  constructor(private loanService: LoanServiceService) { }

  ngOnInit(): void {
    function getLabelName(key: string) {
        switch (key) {
          case 'numberOfCashTransactionInAday':
            return 'Number Of Cash Transaction In A Day';
          case 'numberOfTransferTransactionInAday':
            return 'Number Of Transfer Transaction In A Day';
          case 'numberOfLoanApplications':
            return 'Number Of Loan Applications';
          case 'numberOfLoanAccounts':
            return 'Number Of Loan Accounts';
          case 'numberOfCustomers':
            return 'Number Of Customers';
          case 'loanAmountDisbursed':
            return 'Loan Amount Disbursed';
          default:
            return '';
        }
    }

    this.loanService.getlocationSummary('1').subscribe(
      (response: any) => {
        Object.keys(response).forEach(key => {
          // tslint:disable-next-line:prefer-const
          let value = response[key];
          const labelName = getLabelName(key);
          this.postsArray.push({k: labelName , m: value });
        });
      }
    );
  }



}
