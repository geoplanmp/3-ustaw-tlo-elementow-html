console.log("Warsztat – Ustaw tło elementów HTML");

let button = document.getElementById('button');

const setBackground = () => {
    let p1 = document.getElementById('red').setAttribute('class', 'red');
    let p2 = document.getElementById('yellow').setAttribute('class', 'yellow');
}

button.addEventListener('click', setBackground);