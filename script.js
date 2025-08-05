let line;
let container = document.createElement("div")
let square;

const range = document.querySelector("#range")
const display = document.querySelector("#display")

range.addEventListener("input", () =>{
    display.textContent = range.value
})

container.classList.add("container")
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.alignItems = "center"

let number = Number(prompt("grid no? (between 10 and 50)"))
if (number >50) {
    number = 100
}
if (number < 10){
    number = 10
}
for(let i = 0; i <number;i++){
    line = document.createElement("div")
    line.style.display = "flex"
    for(let j = 0; j<number;j++){
        square = document.createElement("div")
        square.classList.add("square")
        line.appendChild(square)
    }
    container.appendChild(line)
}
const body = document.querySelector("body")
body.appendChild(container)


