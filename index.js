const addItems = document.querySelector('.addItem')
const listsItem = document.querySelector('.listsItem');
const items = JSON.parse(localStorage.getItem('items')) || [];


function handleInput(e) {
    e.preventDefault()
    const text = (document.querySelector('[name=addItem]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    updateList(items, listsItem);
    this.reset();
}

function updateList(items = [], listsItem) {
    listsItem.innerHTML = items.map((item, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? "checked" : null}>
            <label for="item${i}">${item.text}</label>
        </li>
        <hr>
        `
        }
    ).join('');
}

const toggleDone = (e) => {
    if(!e.target.matches('input')) return
    let elem = e.target;
    let index = elem.dataset.index
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    updateList(items, listsItem);
}
updateList(items, listsItem);


listsItem.addEventListener('click', toggleDone);
addItems.addEventListener('submit', handleInput);
