import iconTitleBackground from './images/itemTitleBackground.png';

function loadMenuPage() {
    
    const websiteContent = document.querySelector('#content');


    const createContent = (function () {
        createDrinks();
        createEats();    
    }());



    function createDrinks() {
    
        const drinks = document.createElement('h1');
        drinks.textContent = "Drinks";
        drinks.style.backgroundImage = `url(${iconTitleBackground})`;
        drinks.classList.add('itemTitle');
    
        websiteContent.appendChild(drinks);
    
        let idTag;
        let picture;
        let name;
        let description;
    

        idTag = 'dalgona-coffee';
        picture = 'https://images.pexels.com/photos/10710984/pexels-photo-10710984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        name = 'Dalgona Coffee';
        description = "This frothy, foamy coffee drink doesn't taste anything like the candy but it sure looks like it."

        createItem(idTag, picture, name, description);

        idTag = 'thai-iced-tea';
        picture = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/200824-delish-thai-iced-tea-horizontalpour1-15407-eb-1598987409.jpg?crop=0.668xw:1.00xh;0.136xw,0&resize=768:*'
        name = 'Thai iced tea';
        description = "Thai iced tea is a creamy drink with a distinct flavor, loved by many around the world."

        createItem(idTag, picture, name, description);

        idTag = 'shirley-temples';
        picture = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191115-shirley-temple-delish-ehg-4460-1585335880.jpg?crop=1xw:1xh;center,top&resize=980:*'
        name = 'Shirley Temples';
        description = "The nostalgic classic never goes out of the style."

        createItem(idTag, picture, name, description);

    }
    

    function createEats() {
    
        const eats = document.createElement('h1');
        eats.textContent = "Eats";
        eats.style.backgroundImage = `url(${iconTitleBackground})`;
        eats.classList.add('itemTitle');
    
        websiteContent.appendChild(eats);
    
        let idTag;
        let picture;
        let name;
        let description;
    
        idTag = 'cheesecake';
        picture = 'https://images.pexels.com/photos/10964778/pexels-photo-10964778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        name = 'Cheesecake';
        description = "This is one of the most sinfully delicious desserts."
    
        createItem(idTag, picture, name, description);

        idTag = 'chocolate-cream-cake';
        picture = 'https://img.taste.com.au/SoqZDeHJ/w643-h428-cfill-q90/taste/2016/11/chocolate-cream-cake-61043-1.jpeg'
        name = 'Chocolate cream cake';
        description = "Cold cake that melts in your mouth leaving only goosebumps."
    
        createItem(idTag, picture, name, description);

        idTag = 'condensed-milk-truffles';
        picture = 'https://img.taste.com.au/74zNFad2/w643-h428-cfill-q90/taste/2020/11/2-ingredient-truffles-resized-167372-1.jpg'
        name = 'Condensed milk truffles';
        description = "There's nothing more satisfying than biting into luscious chocolate truffles."
    
        createItem(idTag, picture, name, description);
    }


    function createItem(idTag, picture, name, itemDescription) {
    
        const item = document.createElement('div');
        item.classList.add('item');
        item.id = idTag;
    
    
        const image = document.createElement('img');
        image.src = picture;
        image.alt = `${name} picture`;
    
        const itemName = document.createElement('p');
        itemName.classList.add('item-name');
        itemName.textContent = name;
    
        const description = document.createElement('p');
        description.classList.add('item-description');
        description.textContent = itemDescription;
    
        item.appendChild(image);
        item.appendChild(itemName);
        item.appendChild(description);
    
        websiteContent.appendChild(item);
    }
}



export {loadMenuPage};