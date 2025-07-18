

let category_nav_list =document.querySelector(".category-nav-list");

function open_category_nav_list(){
    category_nav_list.classList.toggle("active")
};
let nav_links = document.querySelector(".category-links");
function open_close_menu(){
    nav_links.classList.toggle("active")

}

var cart =document.querySelector(".cart");
function open_close_cart(){
    cart.classList.toggle("active")
}
fetch('products.json')
.then(Response=>Response.json())
.then(data=>{
    const addtocartbutton = document.querySelectorAll('.btn-add-cart')
   addtocartbutton.forEach(btn=>{
    btn.addEventListener("click",(event)=>{
        const productId =event.target.getAttribute("data-id")
        const selectedproduct = data.find(product=>product.id == productId)
        addToCart(selectedproduct)
        const allMatchingButton =document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`)
        allMatchingButton.forEach( btn=>{
            btn.classList.add("active")
            btn.innerHTML =`<i class="fa-solid fa-cart-shopping"></i>item in cart`
        })
    })
   })
})

function addToCart(prod){
    let cart =JSON.parse(localStorage.getItem('cart'))||[]
    cart.push({...prod,quantity: 1})
    localStorage.setItem('cart',JSON.stringify(cart))
    updatetocart()
}

function updatetocart(){
      const cart =JSON.parse(localStorage.getItem('cart'))||[]
    const cartItemContainer =document.getElementById("cart-items")
    const checkout_item = document.getElementById("checkout-items")
    let items_input = document.getElementById("items")
      let totalPrice_input = document.getElementById("total-price")
        let count_items = document.getElementById("count-items")


    if(checkout_item){
        checkout_item.innerHTML=""

        items_input.value ="";
        totalPrice_input.value="";
        count_items.value="";
    }
    
    cartItemContainer.innerHTML="";
     
     var total_price =0;
     var total_count=0;

    cart.forEach((item,index)=>{

        const totalPrice = item.price * item.quantity; 
        total_price += totalPrice
        total_count += item.quantity
        // check out inputs
        if(checkout_item){
        items_input.value += item.name + "----"+"price :"+ 
        totalPrice +"--------"+"count:"+item.quantity +"\n"

         totalPrice_input.value =total_price +20;
        count_items.value = total_count;
        }
       
       
        cartItemContainer.innerHTML +=`
        <div class="item-cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price-cart">${totalPrice}$</p>
                    <div class="quantity-control"> 
                        <button class="decrease-quantity" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase-quantity" data-index=${index}>+</button>

                    </div><!--quantity controls-->
                </div><!--content-->
                <button class="delete-item" data-index=${index}><i class="fa-solid fa-trash"></i></button>

            </div><!--item cart-->
        `
        if(checkout_item){
            checkout_item.innerHTML += `
                         <div class="item-cart">
                                <div class="image-item">
                                    <img src="${item.img}" alt="">
                                    <div class="content">
                                        <h4>${item.name}</h4>
                                        <p class="price-cart">${totalPrice}$</p>
                                        <div class="quantity-control">
                                            <button class="decrease-quantity"  data-index=${index}>-</button>
                                            <span class="quantity">${item.quantity}</span>
                                            <button class="increase-quantity"  data-index=${index}>+</button>
                                        </div><!--quantity-control--> 

                                    </div><!--content-->
                                </div><!--image-item-->
                                
                                <button class="delete-item" data-index=${index}><i class="fa-solid fa-trash"></i></button>
                              
                            </div><!--item-card-->`
        }

    })
    const price_card_total =document.querySelector(".price-cart-total")
     const count_item_header=document.querySelector(".count-item-header")
      const count_item_cart =document.querySelector(".count-item-cart")

      price_card_total.innerHTML = `${total_price}`
      count_item_cart.innerHTML = total_count
      count_item_header.innerHTML = total_count

    if(checkout_item){
        const subtotal_checkout = document.querySelector(".subtotal-checkout")
        const total_checkout = document.querySelector(".total-checkout")
        subtotal_checkout.innerHTML =`${total_price}`
        total_checkout.innerHTML=`${total_price + 20} `

    }


    const increaseButton =document.querySelectorAll(".increase-quantity")
    const decreaseButton =document.querySelectorAll(".decrease-quantity")

    increaseButton.forEach(button=>{
        button.addEventListener("click",(event)=>{
            const itemIndex = event.target.getAttribute("data-index")
            increaseQuantity(itemIndex)
        })
     
    })

    
    decreaseButton.forEach(button=>{
        button.addEventListener("click",(event)=>{
            const itemIndex = event.target.getAttribute("data-index")
            decreaseQuantity(itemIndex)
        })
     
    })

    const deletebutton =document.querySelectorAll(".delete-item")
    deletebutton.forEach(button =>{
        button.addEventListener("click",(event)=>{
            const itemIndex =event.target.closest('button').getAttribute("data-index")
            removFromCart(itemIndex)
        })
    })
}

function increaseQuantity(index){
    let cart = JSON.parse(localStorage.getItem('cart')) ||[]
     cart[index].quantity += 1
     localStorage.setItem('cart', JSON.stringify(cart))
     updatetocart()

}

function decreaseQuantity(index){
    let cart = JSON.parse(localStorage.getItem('cart')) ||[]
    if(cart[index].quantity > 1){
        cart[index].quantity -= 1
    }
     
     localStorage.setItem('cart', JSON.stringify(cart))
     updatetocart()

}


function removFromCart(index){
    const cart =JSON.parse(localStorage.getItem('cart'))||[]
    const removeproduct = cart.splice(index,1)[0]
    localStorage.setItem('cart',JSON.stringify(cart))
    updatetocart()
    updateButtonState(removeproduct.id)
}
function updateButtonState(productId){
    const allMatchingButton =document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`)
    allMatchingButton.forEach(btn=>{
        btn.classList.remove("active")
        btn.innerHTML =`<i class="fa-solid fa-cart-shopping"></i>add to cart`
        
    })
}
updatetocart()
