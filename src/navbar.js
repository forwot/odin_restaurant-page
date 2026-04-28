import { createHtmlElement, contentContainer } from "./index.js";

function render() {
    // nav
    const nav = createHtmlElement('nav');

    // ul
    const tabList = createHtmlElement('ul',null,['tab-list'],null);

    // list items
    const homeNav = createHtmlElement('li','home',null,'Home');
    const menuNav = createHtmlElement('li','menu',null,'Menu');
    const aboutNav = createHtmlElement('li','about',null,'About');

    tabList.append(homeNav, menuNav, aboutNav)
    nav.appendChild(tabList);

    contentContainer.appendChild(nav);
}

export { render as renderNav };