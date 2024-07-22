import { header } from '../js/header.js';

header();

// <button type="button">Click me</button>

const allFormsDOM = document.getElementsByTagName('form');

const formDOM1 = allFormsDOM[0];
formDOM1.innerHTML += '<button type="button">Click me</button>';

const formDOM2 = allFormsDOM[1];
formDOM2.innerHTML += '<button type="button">Click me 2</button>';

const contentDOM = document.getElementById('content');
const ulDOM = contentDOM.querySelector('.products-list');

const products = [
    {
        title: 'Duona',
        count: 2,
    },
    {
        title: 'Sviestas',
        count: 1,
    },
    {
        title: 'Pomidoras',
        count: 5,
    },
    {
        title: 'Agurkas',
        count: 5,
    },
    {
        title: 'Grietinė',
        count: 1,
    },
    {
        title: 'Arbata',
        count: 2,
    },
    {
        title: 'Pienas',
        count: 2,
    },
    {
        title: 'Batonas',
        count: 1,
    },
    {
        title: 'Dešra',
        count: 1,
    },
    {
        title: 'Kefyras',
        count: 2,
    },
];

let HTML = '';

for (let i = 0; i < products.length; i++) {
    HTML += `
        <li>
            <p class="title">${products[i].title}</p>
            <p class="count">${products[i].count}</p>
            <a href="#">Click me</a>
        </li>`;
}

ulDOM.innerHTML = HTML;


const allParsDOM = document.querySelectorAll('main > p');
console.log(allParsDOM);

allParsDOM[1].innerText = allParsDOM[1].innerText.toUpperCase();

const redElementsDOM = document.querySelectorAll('.red');

for (const redDOM of redElementsDOM) {
    redDOM.style.backgroundColor = 'red';
    redDOM.style.fontSize = '2rem';
}