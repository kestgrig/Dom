const initialElementDOM = document.getElementById('initial_element');

initialElementDOM.innerHTML = `
    <header>
        <img src="./img/logo-pokemon.png" alt="Logo">
        <nav>NAV</nav>
    </header>
    <main>MAIN</main>
    <footer></footer>`;

const navDOM = document.querySelector('nav');

const mainLinksData = [
    {
        text: 'Home',
        link: '../',
    },
    {
        text: 'About',
        link: '../about-us/',
    },
    {
        text: 'Products',
        link: '../products/',
    },
    {
        text: 'Pokemon',
        link: '../pokemon/',
    },
    {
        text: 'Contact',
        link: '../contact/',
    },

];

let navHTML = '';

for (const linkData of mainLinksData) {
    if (linkData.text === 'Pokemon') {
        navHTML += `<a class="link active" href="${linkData.link}">${linkData.text}</a>`;
    } else {
        navHTML += `<a class="link" href="${linkData.link}">${linkData.text}</a>`;
    }
}

navDOM.innerHTML = navHTML;


const mainPokemonDOM = initialElementDOM.querySelector('main');



mainPokemonDOM.innerHTML = `
            <article>
            <img src="#">
            <p>Name</p>
            <p>Category</p>
            <p>Abilities</p>
            <p>Type</p>
            <p>Weaknesses</p>
            <a href="link">Read more</a>;
            </article> 
`;


const pokemonInfo = [
    {
        logo: './img/Alakazam.png',
        name: 'Alakazam',
        category: 'Psi',
        abilities: 'Inner focus, Synchronize',
        type: 'Psychic',
        weaknesses: 'Bug, Ghost, Dark',
        link: 'https://www.pokemon.com/us/pokedex/alakazam',
    },
    {
        logo: './img/Arcanine.png',
        name: 'Arcanine',
        category: 'Legendary',
        abilities: 'Intimidate, Flash Fire',
        type: 'Fire',
        weaknesses: 'Water, Ground, Rock',
        link: 'https://www.pokemon.com/us/pokedex/arcanine',
    },
    {
        logo: './img/charizard.png',
        name: 'Charizard',
        category: 'Flame',
        abilities: 'Blaze',
        type: 'Fire, Flying',
        weaknesses: 'Water, Electric, Rock',
        link: 'https://www.pokemon.com/us/pokedex/charizard',
    },
    {
        logo: './img/Golduck.png',
        name: 'Golduck',
        category: 'Duck',
        abilities: 'Damp, Cloud Nine',
        type: 'Water',
        weaknesses: 'Grass, Electric',
        link: 'https://www.pokemon.com/us/pokedex/golduck',
    },
    {
        logo: './img/meowth.png',
        name: 'Meowth',
        category: 'Scratch Cat',
        abilities: 'Pickup, Technician',
        type: 'Normal',
        weaknesses: 'Fighting',
        link: 'https://www.pokemon.com/us/pokedex/meowth',
    },
    {
        logo: './img/Pidgeot.png',
        name: 'Pidgeot',
        category: 'Bird',
        abilities: 'Keen Eye, Tangled Feet',
        type: 'Normal, Flying',
        weaknesses: 'Electric, Ice, Rock',
        link: 'https://www.pokemon.com/us/pokedex/pidgeot',
    },
    {
        logo: './img/Pikachu.png',
        name: 'Pikachu',
        category: 'Mouse',
        abilities: 'Static',
        type: 'Electric',
        weaknesses: 'Ground',
        link: 'https://www.pokemon.com/us/pokedex/pikachu',
    },
    {
        logo: './img/Raichu.png',
        name: 'Raichu',
        category: 'Mouse',
        abilities: 'Static',
        type: 'Electric',
        weaknesses: 'Ground',
        link: 'https://www.pokemon.com/us/pokedex/raichu',
    },
    {
        logo: './img/squirtle.png',
        name: 'Squirtle',
        category: 'Tiny Turtle',
        abilities: 'Torrent',
        type: 'Water',
        weaknesses: 'Grass, Electric',
        link: 'https://www.pokemon.com/us/pokedex/squirtle',
    },
    {
        logo: './img/Wigglytuff.png',
        name: 'Wigglytuff',
        category: 'Balloon',
        abilities: 'Cute Charm, Competitive',
        type: 'Normal, Fairy',
        weaknesses: 'Poison, Steel',
        link: 'https://www.pokemon.com/us/pokedex/wigglytuff',
    },
];

let pokemonHTML = '';

for (const data of pokemonInfo) {
    pokemonHTML +=
        `<article>
            <img src="${data.logo}" alt="${data.name} Logo"></img>
            <p>${data.name} </p>
            <p><b>Category:</b> ${data.category}</p>
            <p><b>Abilities:</b> ${data.abilities}</p>
            <p><b>Type:</b> ${data.type}</p>
            <p><b>Weaknesses:</b> ${data.weaknesses}</p>
            <a href="${data.link}" target="blankpage">Read more</a>
        </article >`
}

mainPokemonDOM.innerHTML = pokemonHTML;
