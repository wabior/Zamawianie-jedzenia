import { addOrder } from "./db.js";

const li = document.createElement('li');
const form = document.querySelector('form');
const person = document.querySelector('#person');
const order = document.querySelector('#order')
const orderList = document.querySelector('#orders');
const warning = document.querySelector('#warning');
const spanPerson = document.createElement('span');
const spanOrder = document.createElement('span');

const checkDuplicate = function(list){
    for (let item of list) {
        if (item.innerText === li.innerText){
            console.log('Istnieje identyczne zamówiene.');
            warning.innerText = 'Istnieje identyczne zamówiene.';

            return false;
        }
    }
    console.log('brak duplikatu')
    warning.innerText = '';
    
return true;
} 

form.addEventListener('submit', e => {
    e.preventDefault();

    spanPerson.innerText = `${person.value}`.trim();
    let personName = `${person.value}`.trim();
    spanPerson.classList.add('person-submitted');

    spanOrder.innerText = `${order.value}`.trim();
    spanOrder.classList.add('order-submitted');
    let orderName = `${order.value}`.trim();
    let fullOrder = new Object;
    fullOrder[personName] = orderName;

    li.appendChild(spanPerson);
    li.appendChild(spanOrder);

    let list = document.querySelectorAll('li');  
  
    addOrder(fullOrder);
    orderList.appendChild(li);
     
})
