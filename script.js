import { colors } from './colors.js';

document.addEventListener('DOMContentLoaded', () => {
    const colorContainer = document.getElementById('color-container');

    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.addEventListener('click', () => copyToClipboard(color));
        colorContainer.appendChild(colorBox);
    });
});

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert(`Rang nusxalandi: ${text}`);
}