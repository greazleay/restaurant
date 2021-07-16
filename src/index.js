import './style.css';
import { switchToHome, switchtoMenu, switchToContact } from './script';

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const nav = document.createElement('div');
nav.classList.add('nav-bar');
container.appendChild(nav);

let ul = document.createElement('ul');
nav.appendChild(ul);

function addli(anchor, click) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = `#${anchor}`;
    a.textContent = anchor;
    a.onclick = click;
    li.appendChild(a);
    ul.appendChild(li)
}

addli('Home', switchToHome);
addli('Menu', switchtoMenu);
addli('Contact', switchToContact);

const main = document.createElement('main');
container.appendChild(main);

switchToHome()

const footer = document.createElement('footer');
container.appendChild(footer);

const p = document.createElement('p');
p.textContent = '© 2021 Pollaroid All rights reserved'
footer.appendChild(p);