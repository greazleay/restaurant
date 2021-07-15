import sandwich from './asset/sandwich.png';
import hamburger from './asset/hamburger.png';
import bibimbub from './asset/bibimbub.png';

export function switchToHome() {
    const main = document.querySelector('main');
    main.childNodes.forEach(child => main.removeChild(child));
    
    const home = document.createElement('section');
    home.classList.add('home');
    main.appendChild(home)

    const p = document.createElement('p');
    p.textContent = 'Welcome to Foodie World!!!'
    home.appendChild(p);
}

export function switchtoMenu() {
    const main = document.querySelector('main');
    main.childNodes.forEach(child => main.removeChild(child));
    
    const menu = document.createElement('section');
    menu.classList.add('menu');
    main.appendChild(menu)

    function menuEntry(url, name) {
        let article = document.createElement('article');
        let img = document.createElement('img');
        img.src = url;
        let h1 = document.createElement('h1');
        h1.textContent = name
        let desc = document.createElement('p');
        desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        article.appendChild(img);
        article.appendChild(h1);
        article.appendChild(desc);
        menu.appendChild(article)
    }

    menuEntry(sandwich, 'Sandwich');
    menuEntry(hamburger, 'Hamburger');
    menuEntry(bibimbub, 'Bibimbub')
}

export function switchToContact() {
    const main = document.querySelector('main');
    main.childNodes.forEach(child => main.removeChild(child));
    
    const contact = document.createElement('section');
    contact.classList.add('contact');
    main.appendChild(contact)

    const iframe = document.createElement('iframe');
    iframe.width = '600';
    iframe.height = '450';
    iframe.src = 'https://www.openstreetmap.org/export/embed.html?bbox=-0.3185606002807618%2C51.54345262452462%2C-0.2564191818237305%2C51.56909443921891&amp;layer=mapnik'
    contact.appendChild(iframe);
}