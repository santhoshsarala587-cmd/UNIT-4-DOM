const output = document.getElementById('output');
const menu = document.getElementById('menu');

function log(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

// Event delegation: ONE listener on the parent handles every child
menu.addEventListener('click', (event) => {
    // the event object gives details about the click
    const target = event.target;
    log(`Event type: ${event.type}`);
    log(`Clicked element: ${target.tagName} - ${target.textContent}`);
    log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);

    if (target.classList.contains('menu-item')) {
        log(`✅ You selected: ${target.textContent}`);
    } else {
        log('Clicked on the menu container, not on an item');
    }
    log('---');
});

document.getElementById('addNewItem').onclick = () => {
    const newItem = document.createElement('div');
    newItem.className = 'menu-item';
    newItem.textContent = `New Item ${document.querySelectorAll('.menu-item').length + 1}`;
    menu.appendChild(newItem);
    log('Added a new item. Delegation handles its clicks without a new listener!');
};
