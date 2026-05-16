// 1. Grab the HTML elements using the correct document selectors
const resultParagraph = document.querySelector("#result");
const calculateButton = document.querySelector("#calc-btn");

// 2. Define the function out in the open so it's clean and reusable
function addNums(a, b) {
    let sum = a + b;
    // Update the text content of our paragraph with the sum
    resultParagraph.textContent = "The sum is: " + sum;
}

// 3. Listen for the click, then execute the function with your numbers
calculateButton.addEventListener("click", () => {
    addNums(22, 87);
});



const cartTotal = document.querySelector("#cart-total")
const addCart = document.querySelector("#add-cart")


let count = 0
function addToCart(){ 
   
    count += 1
    cartTotal.textContent = count;
}


addCart.addEventListener("click", ()=>{
    addToCart()
})




