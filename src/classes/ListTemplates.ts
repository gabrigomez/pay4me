import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement) { }

    render(item: HasFormatter, heading: string) {
        const li = document.createElement('li')

        const h3 = document.createElement('h3')

        h3.innerHTML = heading
        h3.classList.add("h3")          //tailwind class       
        li.append(h3)


        const p = document.createElement('p')
        p.classList.add("p")
        li.append(p)

        p.innerText = item.format()

        this.container.append(li)

    }
}