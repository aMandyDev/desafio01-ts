import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan(value: number): void {
    if (this.isActive()) {
      this.deposit(value);
      console.log(`Empréstimo de ${value} realizado.`);
    } else {
      console.log("Conta inativa, empréstimo não permitido.");
    }
  }
}
