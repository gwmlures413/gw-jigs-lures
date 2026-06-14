let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, options = ""){
    cart.push({name, price, options});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function clearCart(){
    localStorage.removeItem("cart");
}
