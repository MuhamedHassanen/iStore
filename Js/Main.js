let toggle = document.querySelector("#toggleMod");
toggle.addEventListener('click',function () {
    var bg = document.querySelector("#body");
    bg.classList.toggle("body-bk");
    let navlink = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navlink.length; i++) {
        navlink[i].classList.toggle("lightlink")
    }
    let texts = document.querySelectorAll("h1,h2,h3,p")
    for (let i = 0; i < texts.length; i++) {
        texts[i].classList.toggle("lightlink")  
    }
    let apple = document.querySelector(".fa-brands");
    apple.classList.toggle("lightlink");
    let lead = document.querySelector(".lead");
    lead.classList.toggle("lightlink");
})
var items = [
    {
        id: 0, // first 10 items are skipped
        title: "iPhone 14 Pro",
        price: 1000,
        image: "/images/iphone14.png"
    },{
        id: 1, // first 10 items are skipped
        title: "iPhone 14 Pro Max",
        price: 1300,
        image: "/images/iphone14.png"
    
    },{
        id: 2, // first 10 items are skipped
        title: "iPhone 14",
        price: 900,
        image: "/images/iphone14.png"
    
    },
    {
        id: 3, // first 10 items are skipped
        title: "iPhone 14",
        price: 900,
        image: "/images/iphone14.png"
    
    },{
        id: 4, // first 10 items are skipped
        title: "iPhone 14",
        price: 900,
        image: "/images/iphone14.png"
    
    },{
        id: 5, // first 10 items are skipped
        title: "iPhone 14",
        price: 900,
        image: "/images/iphone14.png"
    
    },{
        id: 6, // first 10 items are skipped
        title: "iPhone 14",
        price: 900,
        image: "/images/iphone14.png"
    
    },
    {
        id: 7, // first 10 items are skipped
        title: "iPhone 14",
        price: 900,
        image: "/images/iphone14.png"
    
    },
    {
        id: 8, // first 10 items are skipped
        title: "iPhone 14",
        price: 900,
        image: "/images/iphone14.png"
    
    },]
var table = document.querySelector(".cart");
let cartBtn = document.querySelector("#cartBtn");
let closeBtn = document.getElementById("closeBtn");
cartBtn.addEventListener("click",function () {
    if (table.style.display = "none") {
        table.style.display = "block"
    }
});
closeBtn.addEventListener("click",function () {
    if (table.style.display = "block") {
        table.style.display = "none"
    }   
})

let products = document.querySelector("#products");
let shopItems = ""
function renderItems() {
    items.forEach(item =>{
        shopItems+=`
        <div class="col-md-4 mt-4">


        <div class="card bg-bg-transparent">
            <div class="card-body">
                <div class="card-img-actions">

                    <img src=${item.image}
                        class="card-img img-fluid w-100" alt="">


                </div>
            </div>

            <div class="card-body bg-light text-center">
                <div class="mb-2">
                    <h6 class="font-weight-semibold mb-2">
                        <a href="#" class="text-default mb-2" data-abc="true">
                        ${item.title}</a>
                    </h6>
                </div>

                <h3 class="mb-0 font-weight-semibold">${item.price} USD</h3>

                <div>
                    <i class="fa fa-star star"></i>
                    <i class="fa fa-star star"></i>
                    <i class="fa fa-star star"></i>
                    <i class="fa fa-star star"></i>
                </div>

                <div class="text-muted mb-3">34 reviews</div>

                <button type="button" id="addToCart" data-id="${item.id}" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> Add to
                    cart</button>


            </div>
        </div>




    </div>
        `
        products.innerHTML = shopItems
    })
}
renderItems();
let cartItems = []
let cartItemsBody = ''

function renderCartItems() {
    cartItemsBody = ""
    cartItems.forEach(item => {
        cartItemsBody += `
        <tr>
                <td class="text-light">${item.id}</td>
                <td> <img src="${item.image}" width="200px" alt="" srcset=""> </td>
                <td class="text-light">${item.title}</td>
                <td class="text-light">${item.price}.00$</td>
                <td><Button onclick="deleteCartItem(${item.id})">Delete</Button></td>
    </tr>
        `
        document.querySelector('#table').innerHTML = cartItemsBody
    })
}
renderCartItems()
let addCartButtons = document.querySelectorAll('#addToCart')

addCartButtons.forEach(btn => {
    btn.addEventListener('click',e => {
        let id = btn.dataset.id
        items.find(item => {
            if (item.id == id) {

               if (cartItems.some(cartItem => cartItem.id == id)) {
                    alert('product already added')
               }else{
                cartItems.push(item)
                renderCartItems()
               }
              
            }
        })
    })
})
//

function deleteCartItem(id) {
    cartItems = cartItems.filter(item => item.id != id)
    renderCartItems()
    if (cartItems.length == 0) {
        document.querySelector('tbody').innerHTML = ""
    }
}
