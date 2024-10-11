export abstract class DioAccount {
  private balance: number;
  private status: boolean;
  private readonly name: string;
  private readonly accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.status = true;
  }

  // setName = (name: string): void => {
  //   this.name = name;
  //   console.log("Nome alterado com sucesso!");
  // };

  getName = (): string => {
    return this.name;
  };

  deposit(value: number): void {
    if (this.status) {
      this.balance += value;
      console.log(`${value} depositado. Saldo atual: ${this.balance}`);
    } else {
      console.log("Conta inativa, depósito não permitido.");
    }
  }

  withdraw(value: number): void {
    if (this.status && this.balance >= value) {
      this.balance -= value;
      console.log(`${value} sacado. Saldo atual: ${this.balance}`);
    } else if (!this.status) {
      console.log("Conta inativa, saque não permitido.");
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  getBalance(): number {
    return this.balance;
  }

  isActive(): boolean {
    return this.status;
  }
}
