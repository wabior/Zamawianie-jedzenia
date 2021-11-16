import { addOrder } from "./db.js";

let li = document.createElement('li');
let form = document.querySelector('form');
let person = document.querySelector('#person');
let order = document.querySelector('#order')
let orderList = document.querySelector('#orders');
let warning = document.querySelector('#warning');
let spanPerson = document.createElement('span');
let spanOrder = document.createElement('span');

export function showOrders(orders){
    if (orders) {
        let lista = orderList.querySelectorAll('li');
        lista.forEach((el) => el.parentNode.removeChild(el));
        orders.forEach(element => {
            let li = document.createElement('li');
            let spanPerson = document.createElement('span');
            let spanOrder = document.createElement('span');
            spanPerson.innerText = Object.keys(element);
            spanOrder.innerText = Object.values(element);
            spanPerson.classList.add('person-submitted');
            spanOrder.classList.add('order-submitted');
            li.appendChild(spanPerson);
            li.appendChild(spanOrder);
            orderList.appendChild(li);
        });
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    let personName = `${person.value}`.trim();
    let orderName = `${order.value}`.trim();
    let fullOrder = new Object;

    spanPerson.innerText = `${person.value}`.trim();
    spanPerson.classList.add('person-submitted');
    spanOrder.innerText = `${order.value}`.trim();
    spanOrder.classList.add('order-submitted');
    
    fullOrder[personName] = orderName;
    addOrder(fullOrder);
})
