```javascript
// ==========================================
// GW Jigs & Lures Cart System V2
// ==========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ----------------------
// Add Item
// ----------------------
function addToCart(name, price, options = "") {

    cart.push({
        name: name,
        price: Number(price),
        options: options,
        quantity: 1
    });

    saveCart();

    alert(name + " added to cart!");

}

// ----------------------
// Save Cart
// ----------------------
function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

// ----------------------
// Display Cart
// ----------------------
function displayCart() {

    const cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item,index)=>{

        subtotal += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <strong>${item.name}</strong><br>

            ${item.options}<br>

            Qty:
            <button onclick="decreaseQty(${index})">-</button>

            ${item.quantity}

            <button onclick="increaseQty(${index})">+</button>

            <br>

            $${(item.price * item.quantity).toFixed(2)}

            <br>

            <button onclick="removeItem(${index})">
                Remove
            </button>

            <hr>

        </div>

        `;

    });

    // SHIPPING

    let shipping = 0;

    if(subtotal > 0){

        let state = "TX";

        const stateSelect = document.getElementById("state");

        if(stateSelect){

            state = stateSelect.value;

        }

        shipping = state === "TX" ? 9 : 12;

    }

    let total = subtotal + shipping;

    document.getElementById("subtotal").innerHTML =
        "Subtotal: $" + subtotal.toFixed(2);

    document.getElementById("shipping").innerHTML =
        "Shipping: $" + shipping.toFixed(2);

    document.getElementById("total").innerHTML =
        "Total: $" + total.toFixed(2);

}

// ----------------------
// Increase Quantity
// ----------------------
function increaseQty(index){

    cart[index].quantity++;

    saveCart();

}

// ----------------------
// Decrease Quantity
// ----------------------
function decreaseQty(index){

    cart[index].quantity--;

    if(cart[index].quantity <= 0){

        cart.splice(index,1);

    }

    saveCart();

}

// ----------------------
// Remove Item
// ----------------------
function removeItem(index){

    cart.splice(index,1);

    saveCart();

}

// ----------------------
// Clear Cart
// ----------------------
function clearCart(){

    cart = [];

    saveCart();

}

// ----------------------
// Checkout
// ----------------------
function checkout(){

    if(cart.length === 0){

        alert("Your cart is empty.");

        return;

    }

    alert("Online checkout is coming soon! Thank you for supporting GW Jigs & Lures!");

}

// ----------------------
// Page Load
// ----------------------
window.onload = function(){

    displayCart();

};
```
