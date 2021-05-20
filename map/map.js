import quests from '../data/quest-data.js';
import { playerhasCompletedAllQuests } from '../local-storage-utils.js';


const ul = document.querySelector('#quests');

for (let quest of quests) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;

    li.append(a);
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