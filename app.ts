import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const peopleAccount = new PeopleAccount(123456789, "Mandyta", 789);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);

const companyAccount = new CompanyAccount("Empresa ABC", 456);
companyAccount.deposit(100);
companyAccount.getLoan(500);
companyAccount.withdraw(100);
