export class AppData {
  applicationNo: string ;
  name: string;
  effectiveLoanAmount: string;

  constructor( applicationNo: string , name: string, effectiveLoanAmount: string) {
    this.applicationNo = applicationNo;
    this.name = name;
    this.effectiveLoanAmount = effectiveLoanAmount;

  }
}
