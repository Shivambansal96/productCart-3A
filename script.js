let productsContainer = document.querySelector("#products");
let cartContainer = document.querySelector("#cart");

let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");
let numberThree = document.querySelector("#numberThree");


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



    // making new divs for cart
    let cartOne = document.createElement("div");
    // let totalContainer = document.createElement("div");

    // linking css with js
    cartOne.classList.add("cartOne");
    // totalContainer.classList.add("totalContainer");

    cartContainer.append(cartOne);
    // cartContainer.append(cartOne, totalContainer);
    // totalContainer.appendChild(total);

    let cartOnePara = document.createElement("p");
    let cartOneCalculation = document.createElement("p");
    let total = document.createElement("p");

    // linking css with js
    // cartOnePara.classList.add("cartOnePara");
    
    // cartOneCalculation.innerText = `${currentValueOne}`;
    cartOneCalculation.innerText = "1*100";


    cartOne.appendChild(cartOnePara, cartOneCalculation)

    cartOnePara.innerText = "Sylvester Tshirt";


    // () => {
    //     numberOne * totalOne = result;
    // }

    



    // console.log(cartOneCalculation);
    console.log(numberOne);
    

    // console.log(cartContainer);
    




}

function addTwo() {
    let currentValueTwo = Number(document.querySelector("#noOfProductsTwo").innerText);
    document.querySelector("#noOfProductsTwo").innerText = currentValueTwo + 1; 

    let cartTwo = document.createElement("div");

    cartTwo.classList.add("cartTwo");

    let cartTwoPara = document.createElement("p");
    let cartTwoCalculation = document.createElement("p");

    cartTwoPara.innerText = "Harry Potter Leviosa";

    cartContainer.append(cartTwo);
    cartTwo.appendChild(cartTwoPara, cartTwoCalculation)

}

function addThree() {
    let currentValueThree = Number(document.querySelector("#noOfProductsThree").innerText);
    document.querySelector("#noOfProductsThree").innerText = currentValueThree + 1; 

    
    let cartThree = document.createElement("div");

    cartThree.classList.add("cartThree");

    let cartThreePara = document.createElement("p");
    let cartThreeCalculation = document.createElement("p");

    cartThreePara.innerText = "Hogwarts";
    cartThreeCalculation.innerText = "1*300 = 300";

    cartContainer.append(cartThree);
    cartThree.appendChild(cartThreePara, cartThreeCalculation)



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