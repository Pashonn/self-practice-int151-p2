// document.getElementById(idValue) //return the first object with ID value
// document.querySelector(cssSelector) //return the first element that matches selector
// document.querySelectorAll(cssSelector) //return all elements that matches selector (NodeList - Array like (can use for each, if you want to use array functions, you need to convert array like to array))

//1. query an element node that has id "soup"
const soupIdElement = document.getElementById("soup")
console.log(soupIdElement) //<ul id="soup">

const soupSelectorElement = document.querySelector("#soup")
console.log(soupSelectorElement) //<ul id="soup">

//get NodeList collection
const soupSelectorAllElement = document.querySelectorAll("#soup")
console.log(soupSelectorAllElement) //NodeList [ ul#soup ]
console.log(soupSelectorAllElement.length) //1
console.log(soupSelectorAllElement[0]) //<ul id="soup">
soupSelectorAllElement.forEach((ele) => console.log(ele)) //<ul id="soup">

//2. query an element nodes that have class "vegan"
const veganElements = document.querySelectorAll(".vegan")
console.log(veganElements) //NodeList(3) [ li.vegan, li.vegan, li.vegan ]
//3. query any element nodes that have class "meat"
const meatElements = document.querySelectorAll(".meat")
console.log(meatElements) //NodeList(4) [ li.meat, li.meat, li.meat, li.meat ]
let beefElements
meatElements.forEach(olo => {
    const meatElement = olo
    if (olo.innerHTML === "Beef soup"){
        beefElements = olo
    }
    console.log(meatElement)
})
//4.
const firstVeganElement = document.querySelector(".vegan")
console.log(firstVeganElement) //<li class="vegan">Vegetable Rolls</li>
//5.
const firstMeatElement = document.querySelector(".meat")
console.log(firstMeatElement) //<li class="meat">Chicken Wings</li>
 

//traverse all children nodes  by using sibling relationship
{/*<ul id="appetizer">
        <li class="vegan">Vegetable Rolls</li>
        <li class="meat">Chicken Wings</li>
        <li class="meat">Tuna Sandwich</li>
      </ul>*/}
const appetizer = document.getElementById("appetizer");
let firstChild = appetizer.firstElementChild
while(firstChild){
    console.log(firstChild);
    firstChild = firstChild.nextElementSibling
}