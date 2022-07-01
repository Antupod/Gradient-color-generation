function colorBackground() {
    const firstColor = document.querySelector('#first-color');
    const secondColor = document.querySelector('#second-color');
    const colorCode = document.querySelector('.color-code');

    let firstColorGenerate = generateRandomColor();
    let secondColorGenerate = generateRandomColor();

    let gradientColorCode = `linear-gradient(90deg, #${firstColorGenerate}, #${secondColorGenerate})`;

    firstColor.innerHTML = `#${firstColorGenerate}`;
    secondColor.innerHTML = `#${secondColorGenerate}`;
    colorCode.innerHTML = gradientColorCode;

    document.body.style.background = gradientColorCode;
}

function getRandomArrayElement() {
    const colorSelection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    return colorSelection[Math.floor(Math.random()*colorSelection.length)];
}

function generateRandomColor() {
    const maxHexLength = 6;
    let generateColorValue = '';

    for (let i = 0; i < maxHexLength; i++) {
        generateColorValue += getRandomArrayElement();
    }

    return generateColorValue;
}