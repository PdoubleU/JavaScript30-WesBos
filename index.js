const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const input = document.querySelector('#city');
const suggestions = document.querySelector('.suggestions');
const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

const findMatches = (wordToMatch, cities) => {
    return cities.filter(element => {
        let regexp = new RegExp(wordToMatch, 'gi');
        return element.city.match(regexp) || element.state.match(regexp);
    });
}

function displayMatch() {
    let match = findMatches(this.value, cities);
    let regexp = new RegExp(this.value, 'gi');
    while (suggestions.firstChild) {
        suggestions.removeChild(suggestions.lastChild);
      }
    let html = match.map(element => {
        let cityName = element.city.replace(regexp, `<span class='hl'>${this.value}</span>`)
        let stateName = element.state.replace(regexp, `<span class='hl'>${this.value}</span>`)
        return `
        <li class="city_name">
            <span>${cityName} (${stateName})</span>
        </li>
        `
    });
    suggestions.innerHTML = html.join('');
}

function pickFromList(e) {
    let pickedItem = e.target.innerText;
    input.value = pickedItem;
}

input.addEventListener('keyup', displayMatch);
input.addEventListener('change', displayMatch);

suggestions.addEventListener('click', e => pickFromList(e));