
//the same process as for beds file, this is the array of all the data which will be dynamically inserted into html via js 
const sofas = [
    {
        name: "Vintage Classic Sofa",
        image: "./images/sofas/4442541.jpg",
        price: "From 5,500,000 UZS",
        alt: "Vintage Classic Sofa"
    },
    {
        name: "Urban Modern Sofa",
        image: "./images/sofas/5013582.jpg",
        price: "From 6,200,000 UZS",
        alt: "Urban Modern Sofa"
    },
    {
        name: "Luxe L-Shaped Sofa",
        image: "./images/sofas/4177013.jpg",
        price: "From 7,800,000 UZS",
        alt: "Luxe L-Shaped Sofa"
    },
    {
        name: "Blush Comfort Sofa",
        image: "./images/sofas/4842986.jpg",
        price: "From 4,910,440 UZS",
        alt: "Blush Comfort Sofa"
    },
    {
        name: "Gray Haven Sofa",
        image: "./images/sofas/4999359.jpg",
        price: "From 6,320,000 UZS",
        alt: "Gray Haven Sofa"
    },
    {
        name: "Ruby Elegance Sofa",
        image: "./images/sofas/5253874.jpg",
        price: "From 7,110,000 UZS",
        alt: "Ruby Elegance Sofa"
    }
];



//function to create tags and elements and insert it into the html grid section 
function createProductCards() {
    const productGrid = document.getElementById('product-grid');

    sofas.forEach(product => {
        const card = document.createElement('div'); //card creation
        card.classList.add('card');

        const img = document.createElement('img'); //image creation
        img.src = product.image;
        img.alt = product.alt;
        img.classList.add('product-img');

        const title = document.createElement('h3');
        title.textContent = product.name;

        const price = document.createElement('p');
        price.classList.add('card-price');
        price.textContent = product.price;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);

        productGrid.appendChild(card);
    });
}

//calling the function to make it work
createProductCards();


// //the navigation part toggle
// const burger = document.getElementById('burger');
// const navLinks = document.getElementById('nav-links');

// burger.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });
