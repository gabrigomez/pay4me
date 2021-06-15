import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'


const form = document.getElementById('forms') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter

    if (type.value === 'payment') {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }

    console.log(doc)
})