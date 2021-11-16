import { addOrder } from "./db.js";

const li = document.createElement('li');
const form = document.querySelector('form');
const person = document.querySelector('#person');
const order = document.querySelector('#order')
const orderList = document.querySelector('#orders');
const warning = document.querySelector('#warning');
const spanPerson = document.createElement('span');
const spanOrder = document.createElement('span');

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

    li.appendChild(spanPerson);
    li.appendChild(spanOrder);
  
    wynik = addOrder(fullOrder);
    orderList.appendChild(li);
    console.log(wynik);
     
})
