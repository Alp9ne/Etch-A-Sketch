function createGrids() {
    const page = document.querySelector('body');
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('the-big-div');

    mainDiv.style.width = '960px';
    mainDiv.style.height = '960px';
    page.appendChild(mainDiv);
}

let gridInput = 16; // change to take manual user input later.
createGrids();