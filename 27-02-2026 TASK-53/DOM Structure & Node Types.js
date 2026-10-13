function displayMessage(msg) {
    const out = document.getElementById('outputArea');
    const p = document.createElement('p');
    p.textContent = msg;
    out.appendChild(p);
}

document.getElementById('btnCheck').addEventListener('click', () => {
    const output = document.getElementById('outputArea');
    output.innerHTML = '';

    // The whole page is a node too
    displayMessage(`Document node: ${document.nodeName}, Type: ${document.nodeType} (9 = DOCUMENT_NODE)`);

    const container = document.getElementById('container');
    displayMessage(`Container node: ${container.nodeName}, Type: ${container.nodeType} (1 = ELEMENT_NODE)`);

    const children = container.childNodes;
    displayMessage(`Total child nodes inside container: ${children.length}`);

    children.forEach((node, index) => {
        let typeName = '';
        switch (node.nodeType) {
            case 1: typeName = 'ELEMENT_NODE'; break;
            case 3: typeName = 'TEXT_NODE (spaces / line breaks)'; break;
            case 8: typeName = 'COMMENT_NODE'; break;
            default: typeName = 'Other';
        }
        displayMessage(`Child ${index}: Name=${node.nodeName}, Type=${node.nodeType} (${typeName})`);
    });

    const para = document.getElementById('textPara');
    const firstChild = para.firstChild;
    if (firstChild) {
        displayMessage(`Paragraph's first child is ${firstChild.nodeType === 3 ? 'TEXT_NODE' : 'ELEMENT_NODE'} with value: "${firstChild.nodeValue}"`);
    }
});
