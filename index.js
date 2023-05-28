/* function to create a div within another div (LATER) */

const page = document.querySelector('body');
const mainDiv = document.createElement('div');

function createGrids(userInput) {
    mainDiv.classList.add('main-div');
    const height = 600;
    mainDiv.style.height = `${height}px`;
    page.appendChild(mainDiv);


    const minHeight = height/userInput;
    let i = 0;
    while(i < userInput) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.maxHeight = `${minHeight}px`
        mainDiv.appendChild(row);
        i++;
    }

    const rows = document.querySelectorAll('.row');
    rows.forEach((item) => {
        let k = 0;
        while (k < userInput) {
            const subDiv = document.createElement('div');
            subDiv.classList.add('sub-div');
            subDiv.style.height = `${minHeight}px`;
            item.appendChild(subDiv);
            k++;
        }
    });
    
}

let gridInput = 16; // change to take manual user input later.
createGrids(gridInput);


// clear and eraser buttons
const clear = document.querySelector('.clear');
clear.onclick = () => {
}

const eraser = document.querySelector('.eraser');
let eraserOn = false;
eraser.onclick = () => {
    eraser.classList.toggle('active');
    eraserOn = !eraserOn;
}


function drawOnGrids() {
    const grids = document.querySelectorAll('.sub-div');
    let mouseDown = false
    document.body.onmousedown = () => (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)
    let currentColor = document.querySelector('.colorPicker');
    currentColor.addEventListener('input', () => {
    })

    grids.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            if (mouseDown == true && eraserOn == false) {
                e.target.style.backgroundColor = currentColor.value;
            } else if (mouseDown == true && eraserOn == true) {
                e.target.style.backgroundColor = 'white';
            }
        })
    })

}
drawOnGrids();


// grid input selector
const gridInputPanel = document.createElement('div');
gridInputPanel.textContent = `Grid Input: ${gridInput} x ${gridInput}`;
gridInputPanel.classList.add('grid-input-panel')
page.appendChild(gridInputPanel);