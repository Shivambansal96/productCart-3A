let plusOne = document.querySelector("#increaseButtonOne");
let plusTwo = document.querySelector("#increaseButtonTwo");
let plusThree = document.querySelector("#increaseButtonThree");
let minusOne = document.querySelector("#decreaseButtonOne");
let minusTwo = document.querySelector("#decreaseButtonTwo");
let minusThree = document.querySelector("#decreaseButtonThree");
let totalOne = document.querySelector("noOfProductsOne");
let totalTwo = document.querySelector("noOfProductsTwo");
let totalThree = document.querySelector("noOfProductsThree");

function addOne() {
    let currentValueOne = Number(document.querySelector("#noOfProductsOne").innerText);
    document.querySelector("#noOfProductsOne").innerText = currentValueOne + 1; 
}

function addTwo() {
    let currentValueTwo = Number(document.querySelector("#noOfProductsTwo").innerText);
    document.querySelector("#noOfProductsTwo").innerText = currentValueTwo + 1; 
}

function addThree() {
    let currentValueThree = Number(document.querySelector("#noOfProductsThree").innerText);
    document.querySelector("#noOfProductsThree").innerText = currentValueThree + 1; 
}
// function addThree() {
//     let currentValueThree = Number(document.querySelector("#noOfProductsThree").innerText);
//     document.querySelector("#noOfProductsThree").innerText = currentValueThree + 1; 
// };

function subOne() {
    let currentValueOne = Number(document.querySelector("#noOfProductsOne").innerText);
    document.querySelector("#noOfProductsOne").innerText = currentValueOne - 1; 
}

function subTwo() {
    let currentValueTwo = Number(document.querySelector("#noOfProductsTwo").innerText);
    document.querySelector("#noOfProductsTwo").innerText = currentValueTwo - 1; 
}

function subThree() {
    let currentValueThree = Number(document.querySelector("#noOfProductsThree").innerText);
    document.querySelector("#noOfProductsThree").innerText = currentValueThree - 1; 
}

plusOne.addEventListener("click", addOne);
plusTwo.addEventListener("click", addTwo);
plusThree.addEventListener("click", addThree);

minusOne.addEventListener("click", subOne);
minusTwo.addEventListener("click", subTwo);
minusThree.addEventListener("click", subThree);