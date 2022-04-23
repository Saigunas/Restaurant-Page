import iconTakeYourTime from './images/restaurant.png';
import iconTextBackground from './images/textBackground.png';

function loadContactPage() {
    const websiteContent = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = "Contact us";
    headline.style.backgroundImage = `url(${iconTextBackground})`;
    headline.classList.add('pageTitle');

    const heroImage = document.createElement('img');
    heroImage.src = iconTakeYourTime;
    heroImage.alt = "Restaurant image";
    heroImage.id = 'restaurantImage';

    const heroText = document.createElement('p');
    heroText.textContent = "You can find us using your Metaverse navigator. We are open 24/7!";
    heroText.classList.add('contacts');

    websiteContent.appendChild(headline);
    websiteContent.appendChild(heroImage);
    websiteContent.appendChild(heroText);
}

export {loadContactPage};