const buttons = document.getElementsByTagName("button")
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "add"){
        box.classList.add("bordered");
    } else
    if (button.id === "remove"){
        box.classList.remove("bordered")
    } else
    if (button.id === "toggle"){
        box.classList.toggle("bordered")
    }
  })
})
 