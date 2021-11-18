const container = document.querySelector('.container');

const buttonGioca = document.getElementById('gioca');

const bombsNumber = 16;

container.innerHTML = '';

let cellNumber = 100;
for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'square easy';
    cell.innerHTML = i + 1;
    cell.addEventListener('click', function () {
        cell.classList.add('clicked-true');
    });
    container.appendChild(cell);
}

buttonGioca.addEventListener("click", function () {
    
    container.innerHTML = '';

    const difficulty = document.getElementById('difficulty').value;

    switch (difficulty) {
        case "easy":
            cellNumber = 100;
            for (let i = 0; i < cellNumber; i++) {
                const cell = document.createElement('div');
                cell.className = 'square easy';
                cell.innerHTML = i + 1;
                cell.addEventListener('click', function () {
                    cell.classList.add('clicked-true');
                });
                container.appendChild(cell);
            }
            break;
        case "hard":
            cellNumber = 81;
            for (let i = 0; i < cellNumber; i++) {
                const cell = document.createElement('div');
                cell.className = 'square hard';
                cell.innerHTML = i + 1;
                cell.addEventListener('click', function () {
                    cell.classList.add('clicked-true');
                });
                container.appendChild(cell);  
            }
            break;
        case "expert":
            cellNumber = 49;
            for (let i = 0; i < cellNumber; i++) {
                const cell = document.createElement('div');
                cell.className = 'square expert';
                cell.innerHTML = i + 1;
                cell.addEventListener('click', function(){
                    cell.classList.add('clicked-true');
                });
                container.appendChild(cell);

            }
            break;
    }
});


// const bombs = generateBombs();
// console.log(bombs);

// function generateBombs() {
//     const arrayBombs = [];
//     while (arrayBombs.length < bombsNumber) {
//         const numeroRandom = getRndInteger(1, cellNumber);
//         if (!arrayBombs.includes(numeroRandom)) {
//             arrayBombs.push(numeroRandom);
//         }
//     }
//     return arrayBombs;
// }

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const square = document.querySelector('.square');

// for (let i = 1; i <= cellNumber; i++) {
//     if (i == bombs[i]) {
//         square[i].addEventListener('click', function () {
//             square[i].classList.add('red');
//         });
//     }
// }