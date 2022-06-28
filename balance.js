function* bankAccount() {
  let balance = 0;

  while (balance >= 0) {
    balance += yield balance;
  }

  return 'You are broke';
}

let account = bankAccount();

console.log(account.next());
console.log(account.next(10));
console.log(account.next(75));
console.log(account.next(-100));
