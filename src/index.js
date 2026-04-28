import "./styles.css"

console.log("This Works!")

// NAV DOMs
const homeNav = document.querySelector('#home');
const menuNav = document.querySelector('#menu');
const aboutNav = document.querySelector('#about');

//CONTENT DIV
const contentContainer = document.querySelector('#content');

// HOME PAGE CONTENT
const homeContainer = document.createElement('div');
homeContainer.classList.add('home-container');

const titleOne = document.createElement('p')
titleOne.classList.add('title-one');
titleOne.textContent = "Random";

const titleTwo = document.createElement('h1');
titleTwo.classList.add('title-two')
titleTwo.textContent = "RESTAURANT";

const homeHR = document.createElement('hr');

const desc = document.createElement('p');
desc.classList.add('desc');
desc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const box1 = document.createElement('div');
box1.classList.add('box-1');

const btnOne = document.createElement('div');
btnOne.classList.add('btn-one');

const btnText = document.createElement('span')
btnText.textContent = "View Menu";

// HOME APPENDS
btnOne.appendChild(btnText);
box1.appendChild(btnOne);

homeContainer.appendChild(titleOne);
homeContainer.appendChild(titleTwo);
homeContainer.appendChild(homeHR);
homeContainer.appendChild(desc);
homeContainer.appendChild(box1);

contentContainer.appendChild(homeContainer);

// ABOUT TAB CONTENT
const aboutContainer = document.createElement('div');
aboutContainer.classList.add('about-container');

const aboutTitleOne = document.createElement('p');
aboutTitleOne.classList.add('title-one');
aboutTitleOne.textContent = "Random";

const aboutTitleTwo = document.createElement('h1');
aboutTitleTwo.classList.add('title-two');
aboutTitleTwo.textContent = "ABOUT";

const aboutHR = document.createElement('hr');

const aboutDesc = document.createElement('p')
aboutDesc.classList.add('about-desc');
aboutDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias mollitia omnis quibusdam quo sint ipsam velit soluta fuga, nulla officiis iusto, eum itaque consequuntur laboriosam sunt tempore dignissimos? Maxime, vel.";

aboutContainer.appendChild(aboutTitleOne);
aboutContainer.appendChild(aboutTitleTwo);
aboutContainer.appendChild(aboutHR);
aboutContainer.appendChild(aboutDesc);

// contentContainer.appendChild(aboutContainer);

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