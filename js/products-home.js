fetch('products.json')
.then(Response=>Response.json())
.then(data=>{
    const cart = JSON.parse(localStorage.getItem('cart'))||[]
    const swiper_items_sale =document.getElementById("swiper-items-sale");
    const swiper_electronics =document.getElementById("swiper-electronics");
     const swiper_appliances =document.getElementById("swiper-appliances");
     const swiper_mobils =document.getElementById("swiper-mobils");

    data.forEach(item=>{
        if(item.old_price){
            const isINCart =cart.some(cartItem=>cartItem.id===item.id)

            const percent_disc =Math.floor((item.old_price - item.price)/item.old_price * 100)
            swiper_items_sale.innerHTML +=`
            
                    <div class="swiper-slide product">
                        <span class="sale-present">${percent_disc}%</span>
                        
                        <div class="image-product">
                            <a href="#"><img src="${item.img}"></a>
                        </div><!--imag-products-->
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div><!--stars-->
                        <p class="name-product"><a href="#">${item.name}</a></p>
                            <div class="price">
                                <p><span>${item.price}$</span></p>
                                <p class="old-price">${item.old_price}$</p>
                            </div><!--price-->
                            <div class="icons">
                                <span class="btn-add-cart ${isINCart?"active":""}" data-id="${item.id}">
                                    <i class="fa-solid fa-cart-shopping"></i>${isINCart?"item in cart":"add to cart"}
                                </span>
                                <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                            </div>
                    </div>
            
            
            `
        }
    })
    data.forEach(item=>{
        if(item.catetory=="electronics"){
            const isINCart =cart.some(cartItem=>cartItem.id===item.id)

        const item_old_price = item.old_price?` <p class="old-price">${item.old_price}$</p>`:"";
         const percent_disc_div = item.old_price?` <span class="sale-present">${Math.floor((item.old_price - item.price)/item.old_price * 100)}%</span>`:"";    
        
        swiper_electronics.innerHTML +=`
            
                    <div class="swiper-slide product">
                        ${percent_disc_div}
                        
                        <div class="image-product">
                            <a href="#"><img src="${item.img}"></a>
                        </div><!--imag-products-->
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div><!--stars-->
                        <p class="name-product"><a href="#">${item.name}</a></p>
                            <div class="price">
                                <p><span>${item.price}$</span></p>
                                ${item_old_price}
                            </div><!--price-->
                            <div class="icons">
                                   <span class="btn-add-cart ${isINCart?"active":""}" data-id="${item.id}">
                                    <i class="fa-solid fa-cart-shopping"></i>${isINCart?"item in cart":"add to cart"}
                                </span>
                                <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                            </div>
                    </div>
            
            
            `
        }

    })
       data.forEach(item=>{
        if(item.catetory=="appliances"){
             const isINCart =cart.some(cartItem=>cartItem.id===item.id)

        const item_old_price = item.old_price?` <p class="old-price">${item.old_price}$</p>`:"";
         const percent_disc_div = item.old_price?` <span class="sale-present">${Math.floor((item.old_price - item.price)/item.old_price * 100)}%</span>`:"";    
        
        swiper_appliances.innerHTML +=`
            
                    <div class="swiper-slide product">
                        ${percent_disc_div}
                        
                        <div class="image-product">
                            <a href="#"><img src="${item.img}"></a>
                        </div><!--imag-products-->
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div><!--stars-->
                        <p class="name-product"><a href="#">${item.name}</a></p>
                            <div class="price">
                                <p><span>${item.price}$</span></p>
                                ${item_old_price}
                            </div><!--price-->
                            <div class="icons">
                                    <span class="btn-add-cart ${isINCart?"active":""}" data-id="${item.id}">
                                    <i class="fa-solid fa-cart-shopping"></i>${isINCart?"item in cart":"add to cart"}
                                </span>
                                <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                            </div>
                    </div>
            
            
            `
        }

    })
     data.forEach(item=>{
        if(item.catetory=="mobiles"){
              const isINCart =cart.some(cartItem=>cartItem.id===item.id)

        const item_old_price = item.old_price?` <p class="old-price">${item.old_price}$</p>`:"";
         const percent_disc_div = item.old_price?` <span class="sale-present">${Math.floor((item.old_price - item.price)/item.old_price * 100)}%</span>`:"";    
        
        swiper_mobils.innerHTML +=`
            
                    <div class="swiper-slide product">
                        ${percent_disc_div}
                        
                        <div class="image-product">
                            <a href="#"><img src="${item.img}"></a>
                        </div><!--imag-products-->
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div><!--stars-->
                        <p class="name-product"><a href="#">${item.name}</a></p>
                            <div class="price">
                                <p><span>${item.price}$</span></p>
                                ${item_old_price}
                            </div><!--price-->
                            <div class="icons">
                                <span class="btn-add-cart ${isINCart?"active":""}" data-id="${item.id}">
                                    <i class="fa-solid fa-cart-shopping"></i>${isINCart?"item in cart":"add to cart"}
                                </span>
                                <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                            </div>
                    </div>
            
            
            `
        }

    })



 })