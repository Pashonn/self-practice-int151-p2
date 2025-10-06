const buttons = document.getElementsByTagName('button')
const box = document.getElementById('box')
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
    const NIG = button.dataset.color;
    box.style.background = NIG;
    })
})
 