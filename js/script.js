document.addEventListener("DOMContentLoaded", () => {

    //the data sofas that will be displayed in main html an array of objects
    const popularSofas = [
        {
            name: "Classic Sofa",
            image: "./images/sofas/4442541.jpg",
            alt: "Classic Sofa"
        },
        {
            name: "Modern Sofa",
            image: "./images/sofas/5013582.jpg",
            alt: "Modern Sofa"
        },
        {
            name: "L-Shaped Sofa",
            image: "./images/sofas/4177013.jpg",
            alt: "L-Shaped Sofa"
        },
    ];

    //the function that will generate and insert the card into the grid section to html
    function createSofaCards() {
        const sofaProductsContainer = document.getElementById('sofa-products');
    
        if (!sofaProductsContainer) return; //just checking for handling errors
    
        popularSofas.forEach(sofa => {
            const card = document.createElement('div');
            card.classList.add('card');                   //the process involves crearing elements   
            const img = document.createElement('img');  //adding attributes to img element
            img.src = sofa.image;
            img.alt = sofa.alt;
            img.classList.add('product-img');
    
            const title = document.createElement('h3');
            title.textContent = sofa.name;
    
            card.appendChild(img);
            card.appendChild(title);
    
            sofaProductsContainer.appendChild(card);
        });
    }

    createSofaCards(); //calling the function to make it work




//for the second section dynamic inhection

const trendyBeds = [
    {
        name: "Pink Bed",
        image: "./images/beds/4626043.jpg",
        alt: "Pink Bed"
    },
    {
        name: "Gray Bed",
        image: "./images/beds/4450869.jpg",
        alt: "Gray Bed"
    },
    {
        name: "Red Bed",
        image: "./images/beds/4544122.jpg",
        alt: "Red Bed"
    }
];

function createBedCards() {
    const bedProductsContainer = document.getElementById('bed-products');

    if (!bedProductsContainer) return;

    trendyBeds.forEach(bed => {
        // Create card container
        const card = document.createElement('div');
        card.classList.add('card', 'animate-on-scroll');

        const img = document.createElement('img');
        img.src = bed.image;
        img.alt = bed.alt;
        img.classList.add('product-img');

        const title = document.createElement('h3');
        title.textContent = bed.name;
        card.appendChild(img);
        card.appendChild(title);
        bedProductsContainer.appendChild(card);
    });
}

createBedCards();
    
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    burger.classList.toggle('toggle');
});

});
