import quests from '../data/quest-data.js';
import { changeGold, changeHP, completeQuest } from '../local-storage-utils.js';
import { findById } from '../utils.js';
import { renderStatsHeader } from '../stats-header.js';

renderStatsHeader();

const section = document.querySelector('.main-section');

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);
const id = searchParams.get('id');
console.log(id);

const quest = findById(quests, id);

console.log(quest);

const h1 = document.createElement('h1');
const img = document.createElement('img');
const p = document.createElement('p');


h1.textContent = quest.title;
console.log();
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

const button = document.createElement('button');
button.textContent = 'For Mario!';
form.append(button);

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(button);
    
    const formData = new FormData(form);
    const choiceId = formData.get('choice');
    console.log(choiceId);
    const selectedChoice = findById(quest.choices, choiceId);

    completeQuest(quest.id);
    changeGold(selectedChoice.gold);
    changeHP(selectedChoice.hp);

    const resultsDiv = document.createElement('div');
    resultsDiv.textContent = selectedChoice.result;

    form.remove();
    section.append(resultsDiv);

    setTimeout(
        () => window.location = '../map',
        9000
    );
});

section.append(h1, img, p, form);