import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanOverdueComponent } from './dashboard/loan-charts/loan-overdue/loan-overdue.component';
import { LoanOutstandingComponent } from './dashboard/loan-charts/loan-outstanding/loan-outstanding.component';
import { ApplicationSummaryComponent } from './dashboard/summary/application-summary/application-summary.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { LocationSummaryComponent } from './dashboard/summary/location-summary/location-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoanOverdueComponent,
    LoanOutstandingComponent,
    ApplicationSummaryComponent,
    HeaderComponent,
    FooterComponent,
    LocationSummaryComponent
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
