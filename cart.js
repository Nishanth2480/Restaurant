let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Mazedar Makhni Paneer',
        image: 'mazedar-makhni-paneer.jpg',
        price: 1200
    },
    {
        id: 2,
        name: 'Momo Mia Veg',
        image: 'momo-mia-veg.jpg',
        price: 1140
    },
    {
        id: 3,
        name: 'Corn and Cheese',
        image: 'corn and cheese.jpg',
        price: 1267
    },
    {
        id: 4,
        name: 'Tandoori Paneer',
        image: 'tandoori-paneer.jpg',
        price: 1230
    },
    {
        id: 5,
        name: 'Veggie Supreme',
        image: 'veggie-supreme.jpg',
        price: 1650
    },
    {
        id: 6,
        name: 'Cheezy Mushroom Magic',
        image: 'cheezy-mushroom-magic.jpg',
        price: 1588
    },
    {
        id: 7,
        name: 'Non Veg Supreme',
        image: 'Non Veg Supreme.png',
        price: 1176
    },
    {
        id: 8,
        name: 'Chicken Dominator',
        image: 'Chicken Dominator.png',
        price: 1285 
    },
    {
        id: 9,
        name: 'Chicken Sausage',
        image: 'Chicken Sausage.png',
        price: 1200
    },
    {
        id: 10,
        name: 'Indian Tikka',
        image: 'Indian Tikka.png',
        price: 1490
    },
    {
        id: 11,
        name: 'Chicken Pepperoni',
        image: 'Chicken Pepperoni.png',
        price: 1200
    },
    {
        id: 12,
        name: 'Chicken Golden Delight',
        image: 'Chicken Golden Delight.png',
        price: 1540
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="C:/Users/Prem/Desktop/Sem-2/Projects/Pro/images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="C:/Users/Prem/Desktop/Sem-2/Projects/Pro/images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}