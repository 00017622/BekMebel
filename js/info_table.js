// Array of products (beds and sofas) the actual data which will be injected to html
const products = [
    {
        name: "Classic Sofa",
        type: "Sofa",
        price: "$799",
        description: "A timeless classic sofa that fits any living room.",
        image: "./images/sofas/4442541.jpg"
    },
    {
        name: "Modern Sofa",
        type: "Sofa",
        price: "$999",
        description: "A sleek modern sofa with clean lines.",
        image: "./images/sofas/5013582.jpg"
    },
    {
        name: "L-Shaped Sofa",
        type: "Sofa",
        price: "$1199",
        description: "A spacious L-shaped sofa for larger spaces.",
        image: "./images/sofas/4177013.jpg"
    },
    {
        name: "Pink Bed",
        type: "Bed",
        price: "$699",
        description: "A charming pink bed perfect for a cozy bedroom.",
        image: "./images/beds/4626043.jpg"
    },
    {
        name: "Gray Bed",
        type: "Bed",
        price: "$799",
        description: "A modern gray bed with a minimalist design.",
        image: "./images/beds/4450869.jpg"
    },
    {
        name: "Red Bed",
        type: "Bed",
        price: "$899",
        description: "A bold red bed to make a statement.",
        image: "./images/beds/4544122.jpg"
    }
];

//function which will populate the table with above array of data
function populateProductTable() {
    const tableBody = document.querySelector('#product-table tbody');

    products.forEach(product => {
        const tr = document.createElement('tr');

        const imgTd = document.createElement('td');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        imgTd.appendChild(img);
        imgTd.setAttribute('data-label', 'Image');

        const nameTd = document.createElement('td');
        nameTd.textContent = product.name;
        nameTd.setAttribute('data-label', 'Name');

        const typeTd = document.createElement('td'); // basically we populate each element with a specific keys from array above
        typeTd.textContent = product.type;
        typeTd.setAttribute('data-label', 'Type');

        const priceTd = document.createElement('td');
        priceTd.textContent = product.price;
        priceTd.setAttribute('data-label', 'Price');

        const descTd = document.createElement('td');
        descTd.textContent = product.description;
        descTd.setAttribute('data-label', 'Description');

        tr.appendChild(imgTd);
        tr.appendChild(nameTd);
        tr.appendChild(typeTd);
        tr.appendChild(priceTd);
        tr.appendChild(descTd);

        tableBody.appendChild(tr);
    });
}
//this is to load the dom with data and execute function
document.addEventListener('DOMContentLoaded', populateProductTable);
