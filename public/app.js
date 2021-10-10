// // variables-----
// let character = "Adarsh";
// let age = 30;
// let isBlackBelt = false;
const me = {
    name: "Adarsh",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("i spent", amount);
        return amount;
    },
};
console.log(me);
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
// class -------
import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("mario", "work on his website", 24);
const invTwo = new Invoice("sdaw", "study on his subject", 222);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invoices);
// DOM and type casting -------
// const form = document.querySelector("form")!;
const form = document.querySelector(".nav-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
