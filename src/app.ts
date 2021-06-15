import { Invoice } from './classes/Invoice.js'

let invoice1 = new Invoice('Marcelo', 'Danone', 350)

let invoices: Invoice[] = []
invoices.push(invoice1)
console.log(invoice1.format())


const form = document.getElementById('forms') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()


    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})