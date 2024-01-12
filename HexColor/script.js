function generateHexColor(letters) {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))];
    }
    return color;
}

let letters = '0123456789ABCDEF';
let colors = [];

colors[0] = generateHexColor(letters);
colors[1] = generateHexColor(letters);

document.querySelector('.output').textContent = colors[0];
document.querySelector('.output').style.backgroundColor = colors[0];

document.getElementById('circle1').style.backgroundColor = colors[0];
document.getElementById('circle2').style.backgroundColor = colors[1];


document.getElementById('circle1').addEventListener('click', () => {
    let currentColor = document.querySelector('.output').textContent.trim();

    if (currentColor === colors[0]) {
        alert('Nothing to be proud of');
    } else {
        alert('You are joking, right?');
    }

    colors[0] = generateHexColor(letters);
    colors[1] = generateHexColor(letters);

    document.querySelector('.output').textContent = colors[0];
    document.querySelector('.output').style.backgroundColor = colors[0];

    document.getElementById('circle1').style.backgroundColor = colors[0];
    document.getElementById('circle2').style.backgroundColor = colors[1];

});

document.getElementById('circle2').addEventListener('click', () => {
    let currentColor = document.querySelector('.output').textContent.trim();

    if (currentColor === colors[1]) {
        alert('Congrats, you can compare two colors');
    } else {
        alert('You better be colorblind');
    }

    colors[0] = generateHexColor(letters);
    colors[1] = generateHexColor(letters);

    document.querySelector('.output').textContent = colors[0];
    document.querySelector('.output').style.backgroundColor = colors[0];

    document.getElementById('circle1').style.backgroundColor = colors[0];
    document.getElementById('circle2').style.backgroundColor = colors[1];
});
