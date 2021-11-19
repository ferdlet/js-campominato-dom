const container = document.querySelector('.container');

const buttonGioca = document.getElementById('gioca');

const bombsNumber = 16;

container.innerHTML = '';

let cellNumber = 100;

let bombs = generateBombs();
console.log(bombs);

for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'square easy';
    cell.innerHTML = i + 1;
    cell.addEventListener('click', function () {
        if (bombs.includes(parseInt(this.innerHTML))) {
            this.classList.add('red');
            let rivelaBombs = document.getElementsByClassName('square');
            for (i = 0; i < cellNumber; i++) {
                if (bombs.includes(parseInt(rivelaBombs[i].innerHTML))) {
                    rivelaBombs[i].classList.add('red');
                }
            }
            alert('Hai perso! Numero di tentativi ' + arrayAttemps.length);
            window.location.reload();
        } else {
            cell.classList.add('clicked-true');
            arrayAttemps.push(i);
            const clicked = document.getElementsByClassName('clicked-true');
            if (clicked.length == cellNumber - bombsNumber) {
                alert('Hai vinto!');
                window.location.reload();

            }
            
        };
    });
    
    container.appendChild(cell);
}

buttonGioca.addEventListener("click", function () {
    
    container.innerHTML = '';
    bombs = []
    console.log(bombs);

    const difficulty = document.getElementById('difficulty').value;

    switch (difficulty) {
        case "easy":
            cellNumber = 100;
            bombs = generateBombs();
            console.log(bombs);
            for (let i = 0; i < cellNumber; i++) {
                const cell = document.createElement('div');
                cell.className = 'square easy';
                cell.innerHTML = i + 1;
                cell.addEventListener('click', function () {
                    if (bombs.includes(parseInt(this.innerHTML))) {
                        this.classList.add('red');
                        let rivelaBombs = document.getElementsByClassName('square');
                        for (i = 0; i < cellNumber; i++) {
                            if (bombs.includes(parseInt(rivelaBombs[i].innerHTML))) {
                                rivelaBombs[i].classList.add('red');
                            }
                        }
                        alert('Hai perso! Numero di tentativi ' + arrayAttemps.length);
                        window.location.reload();
                    } else {
                        cell.classList.add('clicked-true');
                        arrayAttemps.push(i);
                        const clicked = document.getElementsByClassName('clicked-true');
                        if (clicked.length == cellNumber - bombsNumber) {
                            alert('Hai vinto!');
                            window.location.reload();

                        }
                    };
                    
                });
                container.appendChild(cell);
            }
            break;
        case "hard":
            cellNumber = 81;
            bombs = generateBombs();
            console.log(bombs);
            for (let i = 0; i < cellNumber; i++) {
                const cell = document.createElement('div');
                cell.className = 'square hard';
                cell.innerHTML = i + 1;
                cell.addEventListener('click', function () {
                    if (bombs.includes(parseInt(this.innerHTML))) {
                        this.classList.add('red');
                        let rivelaBombs = document.getElementsByClassName('square');
                        for (i = 0; i < cellNumber; i++) {
                            if (bombs.includes(parseInt(rivelaBombs[i].innerHTML))) {
                                rivelaBombs[i].classList.add('red');
                            }
                        }
                        alert('Hai perso! Numero di tentativi ' + arrayAttemps.length);
                        window.location.reload();
                    } else {
                        cell.classList.add('clicked-true');
                        arrayAttemps.push(i);
                        const clicked = document.getElementsByClassName('clicked-true');
                        if (clicked.length == cellNumber - bombsNumber) {
                            alert('Hai vinto!');
                            window.location.reload();

                        }
                    };
                });
                container.appendChild(cell);  
            }
            break;
        case "expert":
            cellNumber = 49;
            bombs = generateBombs();
            console.log(bombs);
            for (let i = 0; i < cellNumber; i++) {
                const cell = document.createElement('div');
                cell.className = 'square expert';
                cell.innerHTML = i + 1;
                cell.addEventListener('click', function(){
                    if (bombs.includes(parseInt(this.innerHTML))) {
                        this.classList.add('red');
                        let rivelaBombs = document.getElementsByClassName('square');
                        for (i = 0; i < cellNumber; i++) {
                            if (bombs.includes(parseInt(rivelaBombs[i].innerHTML))) {
                                rivelaBombs[i].classList.add('red');
                            }
                        }
                        alert('Hai perso! Numero di tentativi ' + arrayAttemps.length);
                        window.location.reload();
                    } else {
                        cell.classList.add('clicked-true');
                        arrayAttemps.push(i);
                        const clicked = document.getElementsByClassName('clicked-true');
                        if (clicked.length == cellNumber - bombsNumber) {
                            alert('Hai vinto!');
                            window.location.reload();

                        }
                    };
                });
                container.appendChild(cell);

            }
            break;
    }
});



function generateBombs() {
    const arrayBombs = [];
    while (arrayBombs.length < bombsNumber) {
        const numeroRandom = getRndInteger(1, cellNumber);
        if (!arrayBombs.includes(numeroRandom)) {
            arrayBombs.push(numeroRandom);
        }
    }
    return arrayBombs;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const arrayAttemps = [];