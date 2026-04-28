import "./styles.css"

console.log("This Works!")

//CONTENT DIV
const contentContainer = document.querySelector('#content');

// Home Page Content
const homeContainer = document.createElement('div');
homeContainer.classList.add('home-container');

const titleOne = document.createElement('p')
titleOne.classList.add('title-one');
titleOne.textContent = "Random";

const titleTwo = document.createElement('h1');
titleTwo.classList.add('title-two')
titleTwo.textContent = "Restaurant";

const hr = document.createElement('hr');

const desc = document.createElement('p');
desc.classList.add('desc');
desc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const box1 = document.createElement('div');
box1.classList.add('box-1');

const btnOne = document.createElement('div');
btnOne.classList.add('btn-one');

const btnText = document.createElement('span')
btnText.textContent = "View Menu";

// APPENDS
btnOne.appendChild(btnText);
box1.appendChild(btnOne);

homeContainer.appendChild(titleOne);
homeContainer.appendChild(titleTwo);
homeContainer.appendChild(hr);
homeContainer.appendChild(desc);
homeContainer.appendChild(box1);

contentContainer.appendChild(homeContainer);