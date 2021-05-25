let elem = document.querySelector('.secretCode');
const keySequence = [];
const secretCode = 'piter';

function getKeySequence(e) {
    keySequence.push(e.key);
    keySequence.splice(-secretCode.length - 1, keySequence.length - secretCode.length)
    elem.innerHTML = keySequence.join('')
    if (keySequence.join('') === secretCode) {
        alert('good!');
    }
}

window.addEventListener('keypress', getKeySequence);