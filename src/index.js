import "./styles.css"
import { renderNav } from "./navbar.js";
import { renderFooter } from "./footer.js";
import { renderHome } from "./home.js";

function createHtmlElement(type, id, arrayClasses, content){
    const element = document.createElement(type);

    if(id) {element.id = id;}

    if(arrayClasses) {element.classList.add(...arrayClasses);}

    if(content) {element.textContent = content;}

    return element
}

//CONTENT DIV
const contentContainer = document.querySelector('#content');

export { createHtmlElement, contentContainer };

renderNav();
renderHome();
renderFooter();


// EVENT LISTENERS
// menu button 
box1.addEventListener("click", ()=>{
    contentContainer.replaceChildren();
    contentContainer.appendChild(aboutContainer);//change to menu later
})

homeNav.addEventListener("click", ()=>{
    contentContainer.replaceChildren();
    contentContainer.appendChild(homeContainer);
})

aboutNav.addEventListener("click", ()=>{
    contentContainer.replaceChildren();
    contentContainer.appendChild(aboutContainer);
})