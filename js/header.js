const data = [
    { href: '', text: 'Home' },
    { href: 'about-us', text: 'About' },
    { href: 'chat', text: 'Chat' },
    { href: 'contact', text: 'Contact' },
    { href: 'products', text: 'Products' },
    { href: 'pokemon', text: 'Pokemon' },
    { href: 'sportas', text: 'Sportas' },
];

export function header(isHomepage = false) {
    const dot = isHomepage ? '' : '.';
    let navHTML = '';

    for (const item of data) {
        navHTML += `<a href="${dot}./${item.href}">${item.text}</a>`;
    }

    document.body.insertAdjacentHTML('afterbegin', `
        <header>
            <nav>${navHTML}</nav>
        </header>`);
}