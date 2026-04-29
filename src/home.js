import { createHtmlElement, contentContainer } from "./index.js";
import { renderAbout } from "./about.js";
import { renderMenu } from "./menu.js";

function render() {
    const main = createHtmlElement('main');
    const titleOne = createHtmlElement('p',null,['title-one'],'Random');
    const titleTwo = createHtmlElement('h1', null, ['title-two'], 'RESTAURANT');
    const homeHR = createHtmlElement('hr', null, null, null);
    const desc = createHtmlElement('p', null, ['desc'], 'Lorem ipsum dolor sit amet consectetur adipisicing elit.');
    const box1 = createHtmlElement('div', null, ['box-1'], null);
    const btnOne = createHtmlElement('div', null, ['btn-one'], null);
    const btnText = createHtmlElement('span', null, null, 'View Menu');

    btnOne.appendChild(btnText);
    box1.appendChild(btnOne);
    main.append(titleOne, titleTwo, homeHR, desc, box1);

    contentContainer.appendChild(main);

    // MENU BTN 
    box1.addEventListener("click", ()=>{
        contentContainer.replaceChildren();
        renderMenu();  
    })
}


export { render as renderHome };