const output = document.getElementById('output');

function log(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    output.appendChild(p);
}

document.getElementById('parentBtn').onclick = () => {
    output.innerHTML = '';
    const child2 = document.getElementById('child2');
    const parent = child2.parentNode;
    log(`Parent of child2: ${parent.id} (${parent.nodeName})`);
    log(`Grandparent: ${parent.parentElement.nodeName}`);
};

document.getElementById('childrenBtn').onclick = () => {
    output.innerHTML = '';
    const demo = document.getElementById('demo');
    const children = demo.children;
    log(`Children count: ${children.length}`);
    for (let i = 0; i < children.length; i++) {
        log(`Child ${i}: ${children[i].id} - ${children[i].innerText}`);
    }
};

document.getElementById('firstLastBtn').onclick = () => {
    output.innerHTML = '';
    const demo = document.getElementById('demo');
    const first = demo.firstElementChild;
    const last = demo.lastElementChild;
    log(`First element child: ${first ? first.innerText : 'none'}`);
    log(`Last element child: ${last ? last.innerText : 'none'}`);
};
