import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputStyle: string | undefined;
  loanAmount = 50000;
  listOfSelectedTenure: any[] = [];
  loanTenures = new Set([12]);
  loanReasons = new Set();
  monthlyPayment: number | undefined;
  loanTenor = 12;
  constructor() { }

  ngOnInit(): void {
    this.calculateRepayment();
  }

  calcLoan(ev: any) {
    const min = ev.target.min;
    const max = ev.target.max;
    const inputVal = ev.target.value;
    this.loanAmount = +inputVal;
    const value = (inputVal - min) / (max - min) * 100;
    this.inputStyle = 'linear-gradient(to right, #252A58 0%, #252A58 ' + value + '%, #F6FEE4 ' + value + '%, #F6FEE4 100%)';
    this.calculateRepayment();
  }

  updateSelectedLoanTenures(id: number, eve: any): void {
    const checked = eve.target.checked;
    this.loanTenures.clear();
    if (checked) {
      this.loanTenures.add(id);
      this.loanTenor = id;
      this.calculateRepayment();
    }
  }

  updateSelectedLoanReasons(id: number, eve: any): void {
    const checked = eve.target.checked;
    if (checked) {
      this.loanReasons.add(id);
    } else {
      this.loanReasons.delete(id);
    }
  }

  calculateRepayment() {
    this.monthlyPayment = ((0.045 * this.loanAmount * this.loanTenor) + this.loanAmount) / this.loanTenor;
  }
}
