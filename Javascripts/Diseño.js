function changeColor(color) {
    const shirtDisplay = document.getElementById('shirt-display');
    shirtDisplay.style.backgroundColor = color;
}

function changeDesign(designPath) {
    const shirtImage = document.getElementById('shirt-image');
    shirtImage.src = designPath;
}

document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('input', function (event) {
        const colorValue = event.target.value;
        changeColor(colorValue);
    });
});