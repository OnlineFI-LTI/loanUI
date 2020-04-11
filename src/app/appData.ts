export class AppData {
  loan_application_no: string ;
  account_holder_name: string;
  effective_loan_amount: string;

  constructor( loan_application_no: string , account_holder_name: string, effective_loan_amount: string) {
    this.loan_application_no = loan_application_no;
    this.account_holder_name = account_holder_name;
    this.effective_loan_amount = effective_loan_amount;
  }
}
