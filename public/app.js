import { Invoice } from './classes/Invoice.js';
let invoice1 = new Invoice('Marcelo', 'Danone', 350);
let invoices = [];
invoices.push(invoice1);
console.log(invoice1.format());
const form = document.getElementById('forms');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
