const display = document.getElementById('form>p')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const Confirmpassword = document.getElementById('confirm-password')
const ButtonSubmit = document.getElementById('submit')
ButtonSubmit.addEventListener("click",(event)=>{
    console.log('clicked')
    event.preventDefault()
    if(username.value === null || email.value === null || password.value === null || Confirmpassword === null){
        console.log('no value')
        display.textContent="missing some values , please try again!"
        display.style.color="red"
    }
    if(password.value !== Confirmpassword.value){
        console.log('no match')
        display.textContent="password and confirm password donot match ,check it again"
        display.style.color="red"
    }
    else{
        console.log("completed")
        display.textContent="your data completed"
        display.style.color="green"
    }
})
