import { Component, OnInit } from '@angular/core';
import {AppData} from '../../../appData';
import {LoanServiceService} from '../../../services/loan-service.service';

@Component({
  selector: 'app-application-summary',
  templateUrl: './application-summary.component.html',
  styleUrls: ['./application-summary.component.css']
})
export class ApplicationSummaryComponent implements OnInit {
  appData: AppData[] = [];

  constructor(private loanService: LoanServiceService) { }

  ngOnInit(): void {
    this.loanService.getApplicationSummary().subscribe(data => {
      this.appData = data;
    });
  }

}
