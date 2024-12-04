
// The dyncamic creation of array to dynimacally insert the data into html via js

const products = [
    {
        name: "Pink Bed",
        image: "./images/beds/4626043.jpg",
        price: "From 4,910,440 UZS",
        alt: "Pink Bed"
    },
    {
        name: "Gray Bed",
        image: "./images/beds/4450869.jpg",
        price: "From 6,320,000 UZS",
        alt: "Gray Bed"
    },
    {
        name: "Red Bed",
        image: "./images/beds/4544122.jpg",
        price: "From 7,110,000 UZS",
        alt: "Red Bed"
    },
    {
        name: "Blue Bed",
        image: "./images/beds/5375847.jpg",
        price: "From 5,800,000 UZS",
        alt: "Blue Bed"
    },
    {
        name: "Green Bed",
        image: "./images/beds/5163950.jpg",
        price: "From 6,950,000 UZS",
        alt: "Green Bed"
    },
    {
        name: "White Bed",
        image: "./images/beds/4927263.jpg",
        price: "From 7,500,000 UZS",
        alt: "White Bed"
    }
];

// the function to insert the data in the above array
// adding the tags first and then style each

function createProductCards() {
    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const card = document.createElement('div'); //creating the tag for html
        card.classList.add('card'); // and adding the class card for it

        const img = document.createElement('img');
        img.src = product.image; // also inserting attribute for image
        img.alt = product.alt;
        img.classList.add('card-img');

        const title = document.createElement('h3');
        title.classList.add('card-title');
        title.textContent = product.name;

        const price = document.createElement('p');
        price.classList.add('card-price');
        price.textContent = product.price;

        card.appendChild(img);
        card.appendChild(title); // appending parts to its parent card
        card.appendChild(price);

        productGrid.appendChild(card); //and here appending the card to the main section which is grid section
    });
}

 createProductCards(); 
//  calling the function to actually make it work
