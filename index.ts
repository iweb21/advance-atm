#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1984;

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter pin number",
    type: "number",
  },
]);

if (pinAns.pin === myPin) {
   let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "select option",
      type: "list",
      choices: ["Withdraw", "Balance", "fastcash"],
    },
  ]);
  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter amount",
        type: "number",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insufficient Balance");
    } else {
      myBalance -= amountAns.amount;
      console.log(`Amount Withdrawn & Current Balane is:${myBalance}`);
    }
  } else if (operationAns.operation === "Balance") {
    console.log(`Current Balance is:${myBalance}`);
  }

  if (operationAns.operation === "fastcash") {
    let cashAmnt = await inquirer.prompt([
      {
        name: "cashAmount",
        message: "select amount",
        type: "list",
        choices: [1000, 2000, 5000],
      },
    ]);
    myBalance -= cashAmnt.cashAmount;
    console.log(`Amount Withdrawn & Current Balane is:${myBalance}`);
  }
} else {
  console.log("Access Denied");
}
