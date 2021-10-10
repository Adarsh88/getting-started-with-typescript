// // variables-----
// let character = "Adarsh";
// let age = 30;
// let isBlackBelt = false;

// // array------
// let names = ["adarsh", "tj"];
// names.push("toda");
// names[0] = "soda";

// objects-----
// let ninja = {
//   name: "ADarsh",
//   belt: "brown",
//   age: 21,
// };
// ninja.age = 20;

// //  explict types-----
// let character: string;
// let ninjas: string[] = [];
// ninjas.push("Adarsh");

// // union types ------
// let mixed: (string | number)[] = [];
// mixed.push("ada");
// mixed.push(45);
// console.log(mixed);

// any property ------
// let age: any = 25;
// age = true;
// let charactser = "sada";

// console.log(age);

// functions ---------
// let greet: Function;

// greet = () => {
//   console.log(5 + 3);
// };

// greet();

// Alias function ( to reduce duplication of functions)
// type name = { name: string; vid: string };

// const greet = (user: name) => {
//   console.log(`$(user.name) says hello`);
// };

// interfaces --------
interface IsPerson {
  name: String;
  age: number;
  speak(a: string): void;
  spend(a: number): void;
}

const me: IsPerson = {
  name: "Adarsh",
  age: 20,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("i spent", amount);
    return amount;
  },
};

console.log(me);

const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};

greetPerson(me);

// class -------
import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice("mario", "work on his website", 24);
const invTwo = new Invoice("sdaw", "study on his subject", 222);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

console.log(invoices);

// DOM and type casting -------
// const form = document.querySelector("form")!;
const form = document.querySelector(".nav-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type")! as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom")! as HTMLInputElement;
const details = document.querySelector("#details")! as HTMLInputElement;
const amount = document.querySelector("#amount")! as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
