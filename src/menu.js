import { createHtmlElement, contentContainer } from "./index.js";

function createMenuItem(name, desc, price){
    const menuItem = createHtmlElement('div',null,['menu-item'],null);
    const dishName = createHtmlElement('h2',null,['dish-name'],name);
    const dishDesc = createHtmlElement('p',null,['dish-desc'],desc);
    const dishPrice = createHtmlElement('h2',null,['dish-price'],price)
    const subBreak = createHtmlElement('hr',null,['sub-break'],null)

    menuItem.append(dishName, dishDesc, dishPrice, subBreak);
    return menuItem
}

function render(){
    const menuContainer = createHtmlElement('div',null,['menu-container']);
    const titleOne = createHtmlElement('p',null,['title-one'],'Random');
    const titleTwo = createHtmlElement('h1',null,['title-two'],'Menu')
    const mainBreak = createHtmlElement('hr',null,['main-break'])   

    const randomBurger = createMenuItem(
        'Random Burger',
        'Lorem ipsum dolor sit. Eos placeat nobis magnam modi',
        '$20')
    const A = createMenuItem(
        'Random A',
        'Lorem ipsum dolor sit. Eos placeat nobis magnam modi',
        '$20')
    const B = createMenuItem(
        'Random B',
        'Lorem ipsum dolor sit. Eos placeat nobis magnam modi',
        '$20')
    const C = createMenuItem(
        'Random C',
        'Lorem ipsum dolor sit. Eos placeat nobis magnam modi',
        '$20')  
    
    menuContainer.append(titleOne, titleTwo, mainBreak,
        randomBurger, A, B, C);
    contentContainer.appendChild(menuContainer);
}

export { render as renderMenu}