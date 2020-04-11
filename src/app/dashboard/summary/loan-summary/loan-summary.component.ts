import { Component, OnInit } from '@angular/core';
import {LoanDetailsModel} from "./loan-details.model";
import {LoanServiceService} from '../../../services/loan-service.service';

@Component({
  selector: 'app-loan-summary',
  templateUrl: './loan-summary.component.html',
  styleUrls: ['./loan-summary.component.css']
})
export class LoanSummaryComponent implements OnInit {
  /*loanSummary: LoanDetailsModel[] = [
    new LoanDetailsModel("Number of loan accounts",4665),
    new LoanDetailsModel("Number of customers",6969),
    new LoanDetailsModel("Number of centres",868),
    new LoanDetailsModel("Number of Groups",1717),
    new LoanDetailsModel("Number of Active Groups",1717),
    new LoanDetailsModel("Number of Closed Groups",0),
    new LoanDetailsModel("Number of loan accounts",4665),
    new LoanDetailsModel("Number of customers",6969),
    new LoanDetailsModel("Number of centres",868),
    new LoanDetailsModel("Number of Groups",1717),
    new LoanDetailsModel("Number of Active Groups",1717),
    new LoanDetailsModel("Number of Closed Groups",0),
    new LoanDetailsModel("Number of loan accounts",4665),
    new LoanDetailsModel("Number of customers",6969)

  ];*/

  postsArray: Array<any> = [];

  constructor(private loanService: LoanServiceService) { }

  ngOnInit(): void {
    this.loanService.getlocationSummary('1').subscribe(
      (response: any) => {
        Object.keys(response).forEach(key => {
          const obj1 = response[key];
          this.postsArray.push({k: key , m: obj1 });
        });
      }
    )
  }

}
