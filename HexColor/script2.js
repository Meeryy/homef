function Hex(letters) {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))];
    }
    return color;
}

let letters = '0123456789ABCDEF';
let colors = [];

colors.push(Hex(letters));
colors.push(Hex(letters));

document.querySelector('.output').textContent = colors[0];
document.getElementById('circle1').style.backgroundColor = colors[1];
document.getElementById('circle2').style.backgroundColor = colors[0];

document.getElementById('circle1').addEventListener('click', () => {
    let currentColor = document.querySelector('.output').textContent.trim();
    let correctGuess = (currentColor === colors[1]);
    
    if (correctGuess) {
        alert('Correct Guess!');
    } else {
        alert('Wrong Guess!');
    }

    colors[0] = Hex(letters);
    colors[1] = Hex(letters);

    document.querySelector('.output').textContent = colors[1];
    document.getElementById('circle1').style.backgroundColor = colors[1];
    document.getElementById('circle2').style.backgroundColor = colors[0];
});

document.getElementById('circle2').addEventListener('click', () => {
    let currentColor = document.querySelector('.output').textContent.trim();
    let correctGuess = (currentColor === colors[1]);
    
    if (correctGuess) {
        alert('Correct Guess!');
    } else {
        alert('Wrong Guess!');
    }

    colors[0] = Hex(letters);
    colors[1] = Hex(letters);

    document.querySelector('.output').textContent = colors[0];
    document.getElementById('circle1').style.backgroundColor = colors[1];
    document.getElementById('circle2').style.backgroundColor = colors[0];
});