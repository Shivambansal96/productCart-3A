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

    document.querySelector("#para").style.display = "none";
    
    let currentValueOne = Number(document.querySelector("#noOfProductsOne").innerText) + 1;

    document.querySelector("#noOfProductsOne").innerText = currentValueOne; 

    if (currentValueOne == 1) {

    
    // making new divs for cart
    let cartOne = document.createElement("div");
    let totalOneContainer = document.createElement("div");
    
    // linking css with js
    cartOne.classList.add("cartOne");
    // totalContainer.classList.add("totalContainer");
    cartContainer.append(cartOne, totalOneContainer);
    
    
    // cartContainer.append(cartOne);
    // totalOneContainer.append(totalOne);
    
    let cartOnePara = document.createElement("p");
    let cartOneCalculation = document.createElement("p");
    // let total = document.createElement("p");
    // let totalOne = document.createElement("p");

    cartOneCalculation.setAttribute("class", "cart-one-calculation");

    // linking css with js
    // cartOnePara.classList.add("cartOnePara");

    cartOnePara.innerText = "Sylvester Tshirt";

    let cartOneTotal = (currentValueOne) * 100;

    cartOneCalculation.innerText = `${currentValueOne}*100 = ${cartOneTotal}`;

    cartOne.append(cartOnePara, cartOneCalculation)
    totalOneContainer.append(total, totalOne)


    total.innerText ="TOTAL = ";
    totalOne.innerText = `(${cartOneTotal})`;




    }

    else {

    let cartOneTotal = (currentValueOne) * 100;

    document.querySelector(".cart-one-calculation").innerText = `${currentValueOne}*100 = ${cartOneTotal}`;

    // () => {
    //     numberOne * totalOne = result;
    // }

    }
    // console.log(cartOneCalculation);
    // console.log(numberOne);
    

    // console.log(cartContainer);

}

function addTwo() {

    document.querySelector("#para").style.display = "none";

    let currentValueTwo = Number(document.querySelector("#noOfProductsTwo").innerText) + 1;
    document.getElementById("noOfProductsTwo").innerText = currentValueTwo; 

    if (currentValueTwo == 1) {

        let cartTwo = document.createElement("div");

        cartTwo.classList.add("cartTwo");   

        let cartTwoPara = document.createElement("p");
        let cartTwoCalculation = document.createElement("p");

        cartTwoCalculation.setAttribute("class", "cart-two-calculation");


        console.log(totalTwo);
        let cartTwoTotal = (currentValueTwo) * 200;

        cartTwoPara.innerText = "Harry Potter Leviosa";
        cartTwoCalculation.innerText = `${currentValueTwo}*200 = ${cartTwoTotal}`;

        cartContainer.append(cartTwo);
        cartTwo.append(cartTwoPara, cartTwoCalculation)


    }



    else {

        let cartTwoTotal = (currentValueTwo) * 200;
    
        document.querySelector(".cart-two-calculation").innerText = `${currentValueTwo}*100 = ${cartTwoTotal}`;

    }

    // totalTwo++;

}

function addThree() {

    document.querySelector("#para").style.display = "none";


    let currentValueThree = Number(document.querySelector("#noOfProductsThree").innerText) + 1;
    document.querySelector("#noOfProductsThree").innerText = currentValueThree; 

    if (currentValueThree == 1) {

    
    let cartThree = document.createElement("div");

    cartThree.classList.add("cartThree");

    let cartThreePara = document.createElement("p");
    let cartThreeCalculation = document.createElement("p");

    cartThreeCalculation.setAttribute("class", "cart-three-calculation");



    let cartThreeTotal = (currentValueThree) * 300;
    cartThreePara.innerText = "Hogwarts";

    cartThreeCalculation.innerText = `${currentValueThree}*300 = ${cartThreeTotal}`;


    cartContainer.append(cartThree);
    cartThree.append(cartThreePara, cartThreeCalculation)
    }

    else {

        let cartThreeTotal = (currentValueThree) * 100;
    
        document.querySelector(".cart-three-calculation").innerText = `${currentValueThree}*300 = ${cartThreeTotal}`;

    }


}
// function addThree() {
//     let currentValueThree = Number(document.querySelector("#noOfProductsThree").innerText);
//     document.querySelector("#noOfProductsThree").innerText = currentValueThree + 1; 
// };

function subOne() {

    document.querySelector("#para").style.display = "none";

    let currentValueOne = Number(document.querySelector("#noOfProductsOne").innerText);
    document.querySelector("#noOfProductsOne").innerText = currentValueOne - 1; 
}

function subTwo() {

    document.querySelector("#para").style.display = "none";

    let currentValueTwo = Number(document.querySelector("#noOfProductsTwo").innerText);
    document.querySelector("#noOfProductsTwo").innerText = currentValueTwo - 1; 
}

function subThree() {
    document.querySelector("#para").style.display = "none";

    let currentValueThree = Number(document.querySelector("#noOfProductsThree").innerText);
    document.querySelector("#noOfProductsThree").innerText = currentValueThree - 1; 
}

plusOne.addEventListener("click", addOne);
plusTwo.addEventListener("click", addTwo);
plusThree.addEventListener("click", addThree);

minusOne.addEventListener("click", subOne);
minusTwo.addEventListener("click", subTwo);
minusThree.addEventListener("click", subThree);