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

const form = document.querySelector('form');
const person = document.querySelector('#person');
const order = document.querySelector('#order')
const orderList = document.querySelector('#orders');
const warning = document.querySelector('#warning');


form.addEventListener('submit', e => {
    e.preventDefault();

    spanPerson = document.createElement('span');
    spanPerson.innerText = `${person.value}`.trim();
    spanPerson.classList.add('person-submitted');

    spanOrder = document.createElement('span');
    spanOrder.innerText = `${order.value}`.trim();
    spanOrder.classList.add('order-submitted');

    li = document.createElement('li');
    li = document.createElement('li');
    li.appendChild(spanPerson);
    li.appendChild(spanOrder);

    const list = document.querySelectorAll('li');  

    if (list.length === 0 ) {
        orderList.appendChild(li);
        console.log('pusta lista')
    } else {
        console.log('lista istnieje');
        if (checkDuplicate(list)){
            orderList.appendChild(li);
        };
    }          
})
