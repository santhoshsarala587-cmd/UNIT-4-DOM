const list = document.getElementById('list');
const output = document.getElementById('output');
let counter = 1;
let cardCounter = 1;

function log(msg) {
    output.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = msg;
    output.appendChild(p);
}

document.getElementById('addBtn').onclick = () => {
    const newLi = document.createElement('li');
    const text = document.createTextNode(`New item ${counter++}`);
    newLi.appendChild(text);
    list.appendChild(newLi);
    log(`Added: ${text.nodeValue}`);
};

document.getElementById('addComplexBtn').onclick = () => {
    const card = document.createElement('div');
    card.style.background = '#fef3c7';
    card.style.padding = '12px';
    card.style.margin = '10px 0';
    card.style.borderRadius = '8px';
    card.style.borderLeft = '5px solid #f59e0b';

    const title = document.createElement('h4');
    title.textContent = `Dynamic Card ${cardCounter++}`;
    title.style.margin = '0 0 6px';

    const desc = document.createElement('p');
    desc.textContent = 'Built with createElement, textContent and appendChild';
    desc.style.margin = '0';

    card.appendChild(title);
    card.appendChild(desc);
    list.parentNode.insertBefore(card, list.nextSibling);
    log(`Card ${cardCounter - 1} added after the list`);
};
