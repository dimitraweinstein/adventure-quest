import quests from '../data/quest-data.js';
import { findById } from '../utils.js';


const section = document.querySelector('.main-section');

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);
const id = searchParams.get('id');
console.log(id);

const quest = findById(quests, id);

console.log(quests);

const h1 = document.createElement('h1');
const img = document.createElement('img');
const p = document.createElement('p');

h1.textContent = quest.title;
img.src = `../assets/${quest.image}`;
p.textContent = quest.description;

const form = document.createElement('form');

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.value = choice.id;

    label.append(choice.description, input);
    form.append(label);
}


section.append(h1, img, p, form);