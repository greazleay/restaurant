import sandwich from './asset/sandwich.png';
import hamburger from './asset/hamburger.png';
import bibimbub from './asset/bibimbub.png';

function getMain() {
    const main = document.querySelector('main');
    main.childNodes.forEach(child => main.removeChild(child));
    return main
}

function menuItem(url, name, desc, price, parent) {
    let article = document.createElement('article');

    let img = document.createElement('img');
    img.src = url;

    let div = document.createElement('div')

    let h1 = document.createElement('h1');
    h1.textContent = name;

    let p = document.createElement('p');
    p.textContent = desc;

    let span = document.createElement('span');
    span.textContent = '$' + price;

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(span);

    article.appendChild(img);
    article.appendChild(div);

    parent.appendChild(article)
}

export function switchToHome() {
    const main = getMain()

    const home = document.createElement('section');
    home.classList.add('home');
    main.appendChild(home)

    const p = document.createElement('p');
    p.textContent = 'Welcome to Foodielicious'
    home.appendChild(p);

    const button = document.createElement('button');
    button.textContent = 'View our menu';
    button.onclick = switchToMenu;
    home.appendChild(button)
}

export async function switchToMenu() {
    const main = getMain()

    const menu = document.createElement('section');
    menu.classList.add('menu');
    main.appendChild(menu)

    const res = await fetch('https://ig-food-menus.herokuapp.com/burgers')
    const data = await res.json();

    if (data.length) {

        data.forEach(item => {
            const { img, name, dsc, price } = item;
            menuItem(img, name.trim(), dsc.trim(), price, menu);
        })

    } else {

        const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

        menuItem(sandwich, 'Sandwich', desc, 50, menu);
        menuItem(hamburger, 'Hamburger', desc, 36, menu);
        menuItem(bibimbub, 'Bibimbub', desc, 97, menu)

    }
}

export function switchToContact() {
    const main = getMain()

    const contact = document.createElement('section');
    contact.classList.add('contact');
    main.appendChild(contact)

    const iframe = document.createElement('iframe');
    iframe.width = '600';
    iframe.height = '450';
    iframe.src = 'https://www.openstreetmap.org/export/embed.html?bbox=-0.3185606002807618%2C51.54345262452462%2C-0.2564191818237305%2C51.56909443921891&amp;layer=mapnik'
    contact.appendChild(iframe);
}