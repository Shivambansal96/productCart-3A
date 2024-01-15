let plusOne = document.querySelectorAll(".increaseButton1");
let plus2 = document.querySelectorAll(".increaseButton2");
let plus3 = document.querySelectorAll(".increaseButton3");
let minus1 = document.querySelectorAll(".decreaseButton1");
let minus2 = document.querySelectorAll(".decreaseButton2");
let minus3 = document.querySelectorAll(".decreaseButton3");
let totalProductsOne = document.querySelector("noOfProdutcsOne");

var count = 0;

function add() {
    let currentValue = Number(document.querySelector("#noOfProductsOne").innerText);

    totalProductsOne.innerText = currentValue + 1;

}

function sub() {
    count--;
    return count;
}

plusOne.addEventListener("click", add);

// plusOne.addEventListener("click", function() {
//     alert ("hello")
//     let productOneAdd = add();  
//     document.querySelector(".noOfProducts1").innerHTML = productOneAdd;
// });

// plus2.addEventListener("click", () => {
//     alert ("hello");
//     let productOneAdd = add().document.querySelector(".noOfProducts2").innerHTML = productOneAdd;
// })

// plus3.addEventListener("click", () => {
    // alert ("hello");
    // let productOneAdd = add().document.querySelector(".noOfProducts3").innerHTML = productOneAdd;
// })

// minus1.addEventListener("click", () => {
//     // alert ("hello");
//     let productOneAdd = add();
//     document.querySelector(".noOfProducts3").innerHTML = productOneAdd;
// })




// plus.addEventListener("click", () => {
//     let output = add();
//     noOfProducts.innerHTML = `${output}`;
//     console.log(output)
// });

// minus.addEventListener("click", () => {
//     sub();
// });
