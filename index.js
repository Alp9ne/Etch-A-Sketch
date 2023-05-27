/* function to create a div within another div (LATER) */

function createGrids(userInput) {
    const page = document.querySelector('body');
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div');
    const height = 960;
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

function drawOnGrids() {
    const grids = document.querySelectorAll('.sub-div');
    let mouseDown = false
    document.body.onmousedown = () => (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)
    grids.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            console.log(mouseDown);
            if (mouseDown == true) {
                e.target.style.backgroundColor = 'red';
            }
        })
    })

}
drawOnGrids();
