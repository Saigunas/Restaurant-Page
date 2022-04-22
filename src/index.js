import {loadHomePage} from './homePageContent';
import {loadMenuPage} from './menuPageContent';
import {loadContactPage} from './contactPageContent';

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

        window.scrollTo(0,0); 

        loadHomePage();
    });
    menuTab.addEventListener('click', () => {
        content.innerHTML = '';

        homeTab.classList.remove('selected');
        menuTab.classList.add('selected');
        contactTab.classList.remove('selected');

        window.scrollTo(0,0); 

        loadMenuPage();
    });
    contactTab.addEventListener('click', () => {
        content.innerHTML = '';

        homeTab.classList.remove('selected');
        menuTab.classList.remove('selected');
        contactTab.classList.add('selected');

        window.scrollTo(0,0); 

        loadContactPage();
    });
}


const content = document.createElement('div');
content.id = "content";


const loadPage = (function () {

    document.body.appendChild(header);
    document.body.appendChild(content);
    
    loadHeader();
    loadHomePage();
    document.querySelector('#homeTab').classList.add('selected');
    
}());
