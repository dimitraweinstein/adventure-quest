import quests from '../data/quest-data.js';

const PLAYER = 'PLAYER';

export function getPlayer() {
    const stringyPlayer = localStorage.getItem(PLAYER);

    if (!stringyPlayer) return {};

    const player = JSON.parse(stringyPlayer);

    return player;
}


export function setPlayer(player) {
    const stringyPlayer = JSON.stringify(player);

    localStorage.setItem(PLAYER, stringyPlayer);
}


export function changeHP(someHPValue) {
    const player = getPlayer();

    player.hp = player.hp + someHPValue;

    setPlayer(player);
}

export function changeGold(someGoldValue) {
    const player = getPlayer();

    player.gold = player.gold + someGoldValue;

    setPlayer(player);
}

export function completeQuest(questId) {
    const player = getPlayer();
    
    player.completed[questId] = true;

    setPlayer(player);
}

export function playerhasCompletedAllQuests() {
    const player = getPlayer();
    
    for (let quest of quests) {
        if (!player.completed[quest.id]) return false;
    }
    return true;

}

export function playerDied() {
    const player = getPlayer();

    if (player.hp <= 0) return true;
    return false;
}   