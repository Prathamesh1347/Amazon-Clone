// const products = [{


//     image:"images/products/athletic-cotton-socks-6-pairs.jpg",
//     name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
//     rating: {
//         stars:4.5,
//         count:87

//     },
//         price: 10.90
// },
// {


//     image:"images/products/athletic-cotton-socks-6-pairs.jpg",
//     name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
//     rating: {
//         stars:4.5,
//         count:87

//     },
//         price: 10.90
// },
// {


//     image:"images/products/athletic-cotton-socks-6-pairs.jpg",
//     name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
//     rating: {
//         stars:4.5,
//         count:87

//     },
//         price: 10.90
// },


// ];

let producthtml = ``;
products.forEach((product) => {
producthtml = producthtml+
`<div class="product-container">
    <div class="product-image-container">
    <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${product.name}
    </div>

    <div class="product-rating-container">
    <img class="product-rating-stars"
        src="images/ratings/rating-${(product.rating.stars)*10}.png">
    <div class="product-rating-count link-primary">
        ${product.rating.count}
    </div>
    </div>

    <div class="product-price">
    ${(product.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
    <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
    <img src="images/icons/checkmark.png">
    Added
    </div>

    <button data-product-name="${product.name}"
        class="add-to-cart-button button-primary js-add-to-cart">
    Add to Cart
    </button>
</div>`

}

);
// console.log(html);

let grid = document.querySelector(".js-products-grid");

grid.innerHTML =  producthtml;

let addToCartButton = document.querySelectorAll(".js-add-to-cart");

addToCartButton.forEach(button => {
    button.addEventListener("click",()=>{
        // console.log(button.dataset.productName);
        let productName=button.dataset.productName;

        let matchingItem;

        cart.forEach(cartItem=>{
            if(cartItem.productName===productName){
                matchingItem=cartItem;
            }
        })

        if(matchingItem){
            matchingItem.quantity += 1;
        }else{
            cart.push({
            productName : productName,
            quantity : 1
        }) ;
        };
        let cartQuantity = document.querySelector(".js-cart-quantity");

        let totalCartItems = 0;
        cart.forEach(cartItem =>{
            totalCartItems += cartItem.quantity;

        })
        cartQuantity.innerHTML = totalCartItems;
        console.log(cart);  
    })
});



// addToCartButton.addEventListener("click",()=>{
//     console.log(addToCartButton);
// })


// console.log(addToCartButton);
