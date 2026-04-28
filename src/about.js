import { createHtmlElement, contentContainer } from "./index.js";

function render(){
    const aboutContainer = createHtmlElement('div', null, ['about-container'], null);
    const aboutTitleOne = createHtmlElement('p', null, ['title-one'], 'Random');
    const aboutTitleTwo = createHtmlElement('h1', null, ['title-two'], 'ABOUT');
    const aboutHR = createHtmlElement('hr', null, null, null);
    const aboutDesc = createHtmlElement('p', null, ['about-desc'], 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias mollitia omnis quibusdam quo sint ipsam velit soluta fuga, nulla officiis iusto, eum itaque consequuntur laboriosam sunt tempore dignissimos? Maxime, vel.');

    aboutContainer.append(aboutTitleOne, aboutTitleTwo, aboutHR, aboutDesc);
    contentContainer.appendChild(aboutContainer);
}

export { render as renderAbout };