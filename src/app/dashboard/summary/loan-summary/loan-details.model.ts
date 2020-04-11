export class LoanDetailsModel {
  public name: string;
  public numAmount: number;

  constructor(name:string, numAmount:number) {
    this.name = name;
    this.numAmount = numAmount;
  }
}
