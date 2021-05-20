import quests from '../data/quest-data.js';
import { playerhasCompletedAllQuests } from '../local-storage-utils.js';
import { renderStatsHeader } from '../stats-header.js';

renderStatsHeader();

const ul = document.querySelector('#quests');


for (let quest of quests) {

    const questIsCompleted = player.completed[quest.id];

    if (!questIsCompleted) {

        const li = document.createElement('li');
        const a = document.createElement('a');

    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;

    li.append(a);
    ul.append(li);
} else {
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.style.textContent = 'line-through';
    span.textContent = quest.title;

    li.append(span);
    ul.append(li);
}

if (playerhasCompletedAllQuests()) {
    window.location = '../results';

    const ul = document.querySelector('#quests');

    for (let quest of quests) {

        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = `../quests/?id=${quest.id}`;
        a.textContent = quest.title;

        li.append(a);
        ul.append(li);

    }
}