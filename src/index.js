import {loadHomePage} from './homePageContent';
import {loadMenuPage} from './menuPageContent';
import {loadContactPage} from './contactPageContent';
import websiteBackground from './images/websiteBackground.jpg';


function loadBackgroundImage() {
    const backgroundImage = document.createElement('img');
    backgroundImage.src = websiteBackground;
    backgroundImage.alt = '';
    backgroundImage.classList.add('background-image');
    document.body.appendChild(backgroundImage);
}

const header = document.createElement('div');
header.id = "header";

function loadHeader() {
    const homeTab = document.createElement('p');
    homeTab.textContent = "Home";
    homeTab.id = 'homeTab'

    const menuTab = document.createElement('p');
    menuTab.textContent = "Menu";
    menuTab.id = 'menuTab'

    const contactTab = document.createElement('p');
    contactTab.textContent = "Contact";
    contactTab.id = 'contactTab'

    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);

    homeTab.addEventListener('click', () => {
        content.innerHTML = '';

        homeTab.classList.add('selected');
        menuTab.classList.remove('selected');
        contactTab.classList.remove('selected');

        loadHomePage();
        //This is to fix scrollTo not executing
        setTimeout(function() {window.scrollTo(0, 0);},5)
    });
    menuTab.addEventListener('click', () => {
        content.innerHTML = '';

        homeTab.classList.remove('selected');
        menuTab.classList.add('selected');
        contactTab.classList.remove('selected');

        loadMenuPage();

        setTimeout(function() {window.scrollTo(0, 0);},5) 
    });
    contactTab.addEventListener('click', () => {
        content.innerHTML = '';

        homeTab.classList.remove('selected');
        menuTab.classList.remove('selected');
        contactTab.classList.add('selected');

        loadContactPage();
        
        setTimeout(function() {window.scrollTo(0, 0);},5)
    });
    document.body.appendChild(header);
}


//This is where pages appear
const content = document.createElement('div');
function loadContentDiv() {
    content.id = "content";
    document.body.appendChild(content);
}



function loadFooter() {
    const footer = document.createElement('div');
    footer.id = 'footer';
    document.body.appendChild(footer);

    const copyright = document.createElement('p');
    copyright.textContent = "Website made by Saigunas";
    copyright.id = 'copyright';

    footer.appendChild(copyright);
}


const loadPage = (function () {
    
    loadBackgroundImage();
    loadHeader();
    loadContentDiv(); //this is where home page and others appear
    loadHomePage();
    loadFooter();

    document.querySelector('#homeTab').classList.add('selected');
    
}());
