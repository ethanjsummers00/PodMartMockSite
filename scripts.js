function openCart() {
    document.getElementById("cartNav").style.width = "25%";
    document.querySelector("main").style.marginRight = "25%";
    document.querySelector("header").style.marginRight= "25%";
}

function closeCart() {
    document.getElementById("cartNav").style.width = "0";
    document.querySelector("main").style.marginRight= "0";
    document.querySelector("header").style.marginRight= "0";
}