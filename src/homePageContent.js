import iconTakeYourTime from './images/take-your-time.png';
import iconTextBackground from './images/textBackground.png';
import iconMorgana from './images/morgana.png';

function loadHomePage() {

    const websiteContent = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = "Morgana's paw";
    headline.style.backgroundImage = `url(${iconTextBackground})`;
    headline.classList.add('pageTitle');

    const heroContainer = document.createElement('div');
    heroContainer.classList.add('heroContainer');
    
    const heroImage = document.createElement('img');
    heroImage.src = iconMorgana;
    heroImage.alt = "Morgana image";
    heroImage.classList.add('morganaImage');

    const heroText = document.createElement('p');
    heroText.textContent = "A restaurant where you can enjoy your pleasantly warm evening, with the most relaxing drinks and eats.";

    const takeYourTimeImage = document.createElement('img');
    takeYourTimeImage.src = iconTakeYourTime;
    takeYourTimeImage.alt = "Take your time";
    takeYourTimeImage.id = 'takeTimeImg';
    takeYourTimeImage.addEventListener('mouseover', () => {
        takeYourTimeImage.classList.add('animateSpin');
    });
    takeYourTimeImage.addEventListener('animationend', () => {
        takeYourTimeImage.classList.remove('animateSpin');
    });
    takeYourTimeImage.addEventListener('webkitAnimationEnd', () => {
        takeYourTimeImage.classList.remove('animateSpin');
    });


    websiteContent.appendChild(headline);
    heroContainer.appendChild(heroImage);
    heroContainer.appendChild(heroText);
    websiteContent.appendChild(heroContainer);
    websiteContent.appendChild(takeYourTimeImage);
}

export {loadHomePage};