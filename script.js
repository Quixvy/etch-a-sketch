const container = document.querySelector(".container");
const btnGenerator = document.querySelector(".btn_gen_grid");

btnGenerator.addEventListener('click', () => {
    gridVal = prompt("Enter a value of boxes");
    if (gridVal <= 100) {
        container.innerHTML = "";
        makeGrid(gridVal);
    } else {
        alert("MAXIMUM OF BOXES IS ONLY 100!");
    }
}) 

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

function makeGrid(size) {
    const boxSize = 500 / size; 
    for (let i = 0; i < size; i++) {
        for (let y = 0; y < size; y++) {
            const div = document.createElement("div");
            div.classList.add("box");
            div.style.width = `${boxSize}px`;
            div.style.height = `${boxSize}px`;
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = getRandomRGB();
            })
            container.appendChild(div); 
        }
    }
}

container.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element.classList.contains('box')) {
        element.style.backgroundColor = getRandomRGB();
    }
})

makeGrid(50)