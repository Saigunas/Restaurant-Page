import {loadHomePage} from './homePageContent';
import {loadMenuPage} from './menuPageContent';
import {loadContactPage} from './contactPageContent';

const header = document.createElement('div');
header.id = "header";

function loadHeader() {
    const homeTab = document.createElement('p');
    homeTab.textContent = "Home";

    const menuTab = document.createElement('p');
    menuTab.textContent = "Menu";

    const contactTab = document.createElement('p');
    contactTab.textContent = "Contact";

    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);

    homeTab.addEventListener('click', () => {
        content.innerHTML = '';
        loadHomePage();
    });
    menuTab.addEventListener('click', () => {
        content.innerHTML = '';
        loadMenuPage();
    });
    contactTab.addEventListener('click', () => {
        content.innerHTML = '';
        loadContactPage();
    });
}

const content = document.createElement('div');
content.id = "content";



document.body.appendChild(header);
document.body.appendChild(content);

loadHeader();
loadHomePage();
