


const prepare = {
    id: 'prepare',
    title: 'Prepare for Adventure',
    map: {},
    image: 'quest1-img.png',
    description: `
        Mario will need to be big if he stands a chance to escape. With no money to your name, you'll have to convince Toad, the manager at Luigi's Next Adventure shop for a magic mushroom to give Mario once you reach him.
    `,
    choices: [{
        id: 'barter',
        description: 'Barter, aka Intimidate',
        result: `
            Your bartering skills could use some work. Ever heard the saying, "You can catch more flies with honey"? Your approach was aggressive, yet slightly effective. Toad agreed to give you a mediocre mushroom if you'll leave the shop and start your quest immediately. After all, he would've gone, but he had to work this weekend. The mushroom will make a mid-size Mario rather than full-size. Let's hope that does the trick.
        `,
        hp: 0,
        gold: 0,
    }, {
        id: 'flattery',
        description: 'Flirt and flatter: Compliment Toad to Persuade Them To Give What You Need.',
        result: `
            Your flirting could use a little work but it gets you what you need in this moment, and that's a magic mushroom free of charge that you can take to rescue your dear friend Mario. In addition to receiving a mushroom, Toad threw in a 2 gold pieces for your trouble.
        `,
        hp: 0,
        gold: 2,
    }, {
        id:'plead',
        description: 'Plead your case and hope it works',
        result: `
            Having no money, but needing a mushroom, you decide just plead your case to Toad, who is also a dear friend of Mario's, hoping they will take pity and assist you on your quest. Hearing your case, Toad decides it would be in Super Mario World's best interest if they were to help you in your journey. Toad gives you the magic mushroom as well as extra hp and gold to help you start.
        `,
        hp: 30,
        gold: 20,
    }]
};

const bridge = {
    id: 'bridge',
    title: 'Cross The Great Sky Bridge - Lookout for shells!',
    map: {},
    image: 'quest2-img.jpeg',
    description: 'Halfway through your quest, you approach the infamous Koopaland Sky Bridge that leads to Iggy Koopas castle. As you approach you see the Koopalings and Koopa Troopas awaiting anyone that attempts to pass. Will you fight your way across the infamous sky bridge?',
    choices: [{
        id: 'leap-frog',
        description: 'Jump over the flying shells to the end',
        result: `
            You decided to jump over each of the flying, spinning shells as they're hurled toward you as you make your way across the great sky bridge. Although you outsmarted the koopalings, you extra exerted effort cost you 10 hp.
        `,
        hp: -10,
        gold: 0,
    }, {
        id: 'tongue-in-cheek',
        description: 'Use Yoshis tongue to swallow and spit the turtle shells back to koopalings',
        result: `
            Yoshi's infamous and powerful tongue does it again! Catching and releasing the turtle shells in their mouth, hurling the shells back at the koopalings knocked all enemies off the bridge, clearing the path to Iggy Koopa's castle. Your expert use of skill in combat earned you 50 hp and a bonus 50 gold!
        `,
        hp: 50,
        gold: 50,
    }, {
        id:'walk',
        description: 'Take the long way around and use the ground path instead of the sky bridge',
        result: `
            Too afraid to fight and too lazy to jump, you decide in your cowardice to take the path below the bridge. However, although it is a safer path to the caslte it is quite the hike. You've used more energy than if you had jumped the shells. Along the way you pay a toll to the rock troll. You lose 15 hp and 5 gold.
        `,
        hp: -15,
        gold: -5,
    }]
};

const rescue = {
    id: 'rescue',
    title: 'Find Mario, Feed Mushroom, Escape, & Avoid Iggy Koopa!',
    map: {},
    image: 'quest3-img.png',
    description: `
        You've made it to the castle! Now find Mario, feed him the magic mushroom and escape! Beware, you might have to fight Koopa! Choose the right door, and you'll be home free!
    `,
    choices: [{
        id: 'door-1',
        description: 'Iggy Koopa Castle Door #1',
        result: `
            Trap Door! Iggy's castle is fool of booby-traps and tricks! You've fallen for the okie-doke and actually fallen into a trap! You unfortunately have failed the mission and did not save Mario. You suffer the ultimate hp damage and lose all points. Game Over.
        `,
        hp: -100,
        gold: 0,
    }, {
        id: 'door-2',
        description: 'Iggy Koopa Castle Door #2',
        result: `
            Oh No! You've walked right into Iggy Koopa's lair! You don't have the combat skills to defeat him and you end up captured in a cell right next to Mario. They've taken the mushroom and now you need saving too!
        `,
        hp: -100,
        gold: 0,
    }, {
        id:'door-3',
        description: 'Iggy Koopa Castle Door #3',
        result: `
            Success! You've opened the correct door and walked right into Mario's holding cell! You feed him the mushroom, he grows and you set off on your escape back to Super Mario World, where Princess Peach and the rest of the citizens await!
        `,
        hp: 100,
        gold: 100,
    }]
};

const quests = [
    prepare,
    bridge,
    rescue
];

export default quests;