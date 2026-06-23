let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, options = "") {
cart.push({
name,
price,
options
});

```
localStorage.setItem("cart", JSON.stringify(cart));

displayCart();

alert(name + " added to cart!");
```

}

function getCart() {
return JSON.parse(localStorage.getItem("cart")) || [];
}

function clearCart() {
localStorage.removeItem("cart");
cart = [];
displayCart();
}

function removeItem(index) {
cart.splice(index, 1);

```
localStorage.setItem("cart", JSON.stringify(cart));

displayCart();
```

}

function displayCart() {

```
cart = getCart();

let cartItems = document.getElementById("cartItems");

if (!cartItems) return;

cartItems.innerHTML = "";

let subtotal = 0;

cart.forEach((item, index) => {

    subtotal += item.price;

    cartItems.innerHTML += `
        <p>
            ${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeItem(${index})">
                Remove
            </button>
        </p>
    `;
});

let state = document.getElementById("state")?.value || "TX";

let shipping = 0;

if (cart.length > 0) {
    shipping = state === "TX" ? 9 : 12;
}

let total = subtotal + shipping;

document.getElementById("subtotal").innerText =
    "Subtotal: $" + subtotal.toFixed(2);

document.getElementById("shipping").innerText =
    "Shipping: $" + shipping.toFixed(2);

document.getElementById("total").innerText =
    "Total: $" + total.toFixed(2);
```

}

window.onload = displayCart;
