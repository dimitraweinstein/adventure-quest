import quests from '../data/quest-data.js';
import { getPlayer, playerhasCompletedAllQuests } from '../local-storage-utils.js';
import { renderStatsHeader } from '../stats-header.js';

renderStatsHeader();
const player = getPlayer();
const ul = document.querySelector('#quests');

const completedObject = player.completed;

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

        span.style.textDecoration = 'line-through';
        span.textContent = quest.title;

        li.append(span);
        ul.append(li);
    }
}

if (playerhasCompletedAllQuests(completedObject)) {
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