import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
  private doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber); // Chama o construtor da classe pai
    this.doc_id = doc_id; // Atribui o valor de doc_id
  }

  deposit(value: number): void {
    const bonus = 10;
    const totalDeposit = value + bonus;

    super.deposit(totalDeposit);
    console.log(
      `Depósito de R$${value.toFixed(
        2
      )} realizado com um bônus de R$${bonus.toFixed(
        2
      )}! Saldo atual: R$${this.getBalance().toFixed(2)}`
    );
  }

  withdraw(value: number): void {
    const bonus = 10;

    if (this.getBalance() >= value) {
      super.withdraw(value);
      console.log(
        `Saque de R$${value.toFixed(
          2
        )} realizado. Um bônus de R$${bonus.toFixed(
          2
        )} foi aplicado apenas na mensagem. Saldo atual: R$${this.getBalance().toFixed(
          2
        )}`
      );
    } else {
      console.log("Saldo insuficiente para realizar o saque.");
    }
  }

  // Método para obter o doc_id
  getDocId(): number {
    return this.doc_id;
  }
}
