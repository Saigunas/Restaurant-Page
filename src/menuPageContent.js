function loadMenuPage() {
    const websiteContent = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = "asdasdasd";

    const heroImage = document.createElement('img');
    heroImage.src = "http://placekitten.com/200/300";
    heroImage.alt = "Restaurant image";

    const heroText = document.createElement('p1');
    heroText.textContent = "A restaurant where you can enjoy your pleasantly warm evening, with the most relaxing drinks and eats.";

    websiteContent.appendChild(headline);
    websiteContent.appendChild(heroImage);
    websiteContent.appendChild(heroText);
}

export {loadMenuPage};