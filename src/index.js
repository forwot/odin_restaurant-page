import "./styles.css"
import { renderHome } from "./home.js";
import { renderAbout } from "./about.js";

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

// Running the Page
// renderHome();

// NavBar BTNS
const homeNav = document.querySelector('#home')
homeNav.addEventListener("click", ()=>{
    contentContainer.replaceChildren();
    renderHome();
})

const aboutNav = document.querySelector('#about')
aboutNav.addEventListener("click", ()=>{
    contentContainer.replaceChildren();
    renderAbout();
})