// const whom = prompt('What is your name?',"typing your name")
// const comfirmYourname = confirm(`You are ${whom}`)
// confirmTourname ? alert(`Hello nigga , ${whom}`):alert(`hello , guest`)
// const okButton = document.querySelector("div>button")
// console.log(okButton)

// // //1. annonymous handler function with bubble event flow (default)
// okButton.addEventListener("click", (event) => {
//   console.log(`event.target: ${event.target}`)
//   console.log(`event.currentTarget:${event.currentTarget}`)
//   console.log(`event.eventPhase:${event.eventPhase}`)
//   console.log(`event.type : ${event.type}`)
//   console.log("Button was clicked")
// },)
// // //does not work with annonymouse function
// // // okButton.removeEventListener("click", () => {
// // //   alert("Button was clicked!")
// // // })
// // //2. named function with bubble event flow (default)
// // // function getTarget(e) {
// // //   alert(`${e.target.nodeName} was fired!`)
// // // }
// // function getMessage() {
// //   const yourMessage = prompt("What is your message", "typing your message...")
// //   alert(yourMessage)
// // }
// // //3. add more than one handler functions
// // // okButton.addEventListener("click", getTarget)
// // okButton.addEventListener("click", getMessage)
// // //4. remove handler function
// // // okButton.removeEventListener("click", getTarget)
 



// const divElement = document.querySelector("div")
// divElement.addEventListener("click",(event)=>{
//     console.log(`event.target: ${event.target}`)
//     console.log(`event.currentTarget:${event.currentTarget}`)
//     console.log(`event.eventPhase:${event.eventPhase}`)
//     console.log(`event.type : ${event.type}`)
//     console.log("div was clicked")
// },)
// const bodyElement = document.body
// bodyElement.addEventListener("click", (event)=>{
//     console.log(`event.target: ${event.target}`)
//     console.log(`event.currentTarget:${event.currentTarget}`)
//     console.log(`event.eventPhase:${event.eventPhase}`)
//     console.log(`event.type : ${event.type}`)
//     console.log("Body was clicked")
// },)


// const aElement = document.querySelector("a")
// aElement.addEventListener("click",(event)=>{
//     event.preventDefault()
//     console.log("visit link was canceled")
// })
// // when click submit button , prevent default behavior and validate form data
// const submitButton = document.querySelector("input[type='submit']")
// console.log(submitButton)
// submitButton.addEventListener("click", (event)=>{
//     event.preventDefault()
//     //validate data
//     const inputElements = document.querySelectorAll("input")
//     inputElements.forEach((input)=> {
//         const attr=input.getAttribute("type")
//         if(attr === "text"){
//             if(input.value.trim().length === 0) console.log("invalid")
//             console.log("NIGGA!")
//         }
//     })
// })
const inputMessage = document.getElementById('message')
inputMessage.addEventListener('keyup', (event) => {
  if (event.key === 'Enter')  console.log(event.target.value)
})
const message = document.querySelector('#message')
const display = document.querySelector('p')
message.addEventListener('input',function (){
    display.textContent = message.value
})