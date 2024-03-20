const signupBtn = document.querySelector("#signup"),
formOpenBtn = document.querySelector("#form_open") 
home = document.querySelector(".home"),
loginBtn = document.querySelector("#login"), 
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"), 
pwShowHide = document.querySelectorAll(".pw_hide");

pwShowHide.forEach(icon => {
   icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if(getPwInput.type === "password")
    {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
    }
    else
    {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
    }
   })  
})

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});




/* JAVASCRIPT FOR ORDER NOW INTERFACE*/
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () =>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'Images/cake.jpg', 
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'Images/cake.jpg', 
        price: 130000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'Images/cake.jpg', 
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'Images/cake.jpg', 
        price: 125000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'Images/cake.jpg', 
        price: 150000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'Images/cake.jpg', 
        price: 160000
    },

];

let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src = "image/${value.image}"/>
        <div class = "title">${value.name}</div>
        <div class = "price">${value.price.toLocaleString()}</div>
        <button onclick = "addToCard(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();