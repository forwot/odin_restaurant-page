import { createHtmlElement, contentContainer } from "./index.js";

function render() {
    const footer = createHtmlElement('footer');
    const pText = createHtmlElement('p',null,null,'some random credits')

    footer.appendChild(pText);
    contentContainer.appendChild(footer);
}

export { render as renderFooter };