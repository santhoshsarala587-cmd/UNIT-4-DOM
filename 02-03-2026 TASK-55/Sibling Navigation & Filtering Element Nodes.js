const out = document.getElementById('output');

function log(m) {
    const p = document.createElement('p');
    p.textContent = m;
    out.appendChild(p);
}

document.getElementById('nextPrevBtn').onclick = () => {
    out.innerHTML = '';
    const middle = document.getElementById('middle');
    const next = middle.nextElementSibling;
    const prev = middle.previousElementSibling;
    log(`Current element: ${middle.innerText}`);
    log(`Next element sibling: ${next ? next.innerText : 'none'}`);
    log(`Previous element sibling: ${prev ? prev.innerText : 'none'}`);
    // nextSibling can be a text node (line break between tags)
    log(`nextSibling (any node type): ${middle.nextSibling ? middle.nextSibling.nodeName : 'none'}`);
};

document.getElementById('filterBtn').onclick = () => {
    out.innerHTML = '';
    const container = document.getElementById('siblingContainer');
    const nodes = container.childNodes;
    log(`Total child nodes (including text nodes): ${nodes.length}`);

    let elementCount = 0;
    let textCount = 0;
    for (let node of nodes) {
        if (node.nodeType === 1) elementCount++;
        if (node.nodeType === 3) textCount++;
    }
    log(`Element nodes only: ${elementCount}`);
    log(`Text nodes (spaces / line breaks): ${textCount}`);
    log(`Using children property gives ${container.children.length} elements`);
};
