"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " deve " + this.amount + " de " + this.details;
    };
    return Invoice;
}());
var invoice1 = new Invoice('Marcelo', 'Danone', 350);
var invoices = [];
invoices.push(invoice1);
console.log(invoice1.format());
var form = document.getElementById('forms');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
