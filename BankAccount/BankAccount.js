class BankAccount {
	constructor(name, deposit = 0) {
	  this.name = name;
	  this.balance = deposit;
	}
  
	deposit(amount) {
	  this.balance += amount;
	}
  
	debit(amount) {
	  if (amount <= this.balance) {
		this.balance -= amount;
	  } else {
		console.log("Insufficient funds.");
	  }
	}
  }
  
  class AccountManager {
	static accountInfoList = [];
  
	static createAccount() {
	  const nameInput = document.getElementById("nameInput");
	  const depositInput = document.getElementById("depositInput");
  
	  const name = nameInput.value;
	  const deposit = parseFloat(depositInput.value);
  
	  const account = new BankAccount(name, deposit);
	  AccountManager.accountInfoList.push(account);
  
	  nameInput.value = "";
	  depositInput.value = "";
  
	  AccountManager.displayAccountInfo();
	}
  
	static displayAccountInfo() {
	  const accountListTextArea = document.getElementById("accountListTextArea");
	  accountListTextArea.value = "";
  
	  for (const account of AccountManager.accountInfoList) {
		accountListTextArea.value += `Account Name: ${account.name}, Balance: ${account.balance}\n`;
	  }
	}
  
	static showTransactionPage(transactionType) {
	  const transactionPage = document.getElementById("transactionPage");
	  transactionPage.style.display = "block";
  
	  const accountDropdown = document.getElementById("accountDropdown");
	  accountDropdown.innerHTML = "";
  
	  for (const account of AccountManager.accountInfoList) {
		const option = document.createElement("option");
		option.value = account.name;
		option.textContent = account.name;
		accountDropdown.appendChild(option);
	  }
  
	  const amountInput = document.getElementById("amountInput");
	  amountInput.value = "";
  
	  const submitButton = document.getElementById("submitButton");
	  submitButton.disabled = true;
  
	  if (transactionType === "deposit") {
		submitButton.onclick = AccountManager.handleDeposit;
	  } else if (transactionType === "debit") {
		submitButton.onclick = AccountManager.handleDebit;
	  }
  
	  accountDropdown.onchange = AccountManager.validateTransaction;
	  amountInput.oninput = AccountManager.validateTransaction;
	}
  
	static validateTransaction() {
	  const accountDropdown = document.getElementById("accountDropdown");
	  const amountInput = document.getElementById("amountInput");
	  const submitButton = document.getElementById("submitButton");
  
	  if (accountDropdown.value && amountInput.value) {
		submitButton.disabled = false;
	  } else {
		submitButton.disabled = true;
	  }
	}
  
	static handleDeposit() {
	  const accountDropdown = document.getElementById("accountDropdown");
	  const selectedAccount = accountDropdown.value;
	  const amountInput = document.getElementById("amountInput");
	  const amount = parseFloat(amountInput.value);
  
	  for (const account of AccountManager.accountInfoList) {
		if (account.name === selectedAccount) {
		  account.deposit(amount);
		  break;
		}
	  }
  
	  const transactionPage = document.getElementById("transactionPage");
	  transactionPage.style.display = "none";
  
	  AccountManager.displayAccountInfo();
	}
  
	static handleDebit() {
	  const accountDropdown = document.getElementById("accountDropdown");
	  const selectedAccount = accountDropdown.value;
	  const amountInput = document.getElementById("amountInput");
	  const amount = parseFloat(amountInput.value);
  
	  for (const account of AccountManager.accountInfoList) {
		if (account.name === selectedAccount) {
		  account.debit(amount);
		  break;
		}
	  }
  
	  const transactionPage = document.getElementById("transactionPage");
	  transactionPage.style.display = "none";
  
	  AccountManager.displayAccountInfo();
	}
  }
  
  // Event listener for creating new accounts
  document.getElementById("createAccountButton").addEventListener("click", AccountManager.createAccount);
  
  