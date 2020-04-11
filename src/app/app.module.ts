import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanOverdueComponent } from './dashboard/loan-charts/loan-overdue/loan-overdue.component';
import { LoanOutstandingComponent } from './dashboard/loan-charts/loan-outstanding/loan-outstanding.component';
import { LoanSummaryComponent } from './dashboard/summary/loan-summary/loan-summary.component';
import { ApplicationSummaryComponent } from './dashboard/summary/application-summary/application-summary.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoanOverdueComponent,
    LoanOutstandingComponent,
    LoanSummaryComponent,
    ApplicationSummaryComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
