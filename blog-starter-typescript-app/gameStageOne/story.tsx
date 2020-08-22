let createCircularThread = (thread, option) => () => {
    delete currentEvent.options[option];
    thread.push(currentEvent)
    return thread;
}

const lateHouseThread = [
    { text: "As you approach the farmhouse, the last remaining wall collapses. Guess you better move on..."}
]

const lateTreeThread = [
    { text: "Searching through torn up roots, it seems all the seeds are cracked or have been taken by animals..."}
]

const latePuppyThread = [
    { text: "Pushing through the tall grass, the only sound you hear is its soft rustling"}
]

const houseThread = [
    { text: "The masonry has crumbled, but it could be patched up with the wood and stone strewn around the farm..." },
    { text: "You get to work." },
    { text: "After a hard days work, you lay your head at the remains of the hearth and go to sleep"},
    { text: "A month passes..." },
    { text: "As you put the last beam in place, you look up at your handywork with a sigh of relief",
      picture: "/assets/game/house.jpg"},
    { text: "It's time for a different kind of creation. Good thing you saved this desk!"},
    { text: "To be continued..."}
]

const puppyThread = [
    { text: "Pushing through the tall grass you hear a yipp..." },
    { text: "You look down and see bright eyes looking back. Its a puppy!" },
    { text: "What do you do?",
    options: {
        1: { text: "Give the pup a skritch behind the ear", thread: []},
        2: { text: "Investigate the farmhouse, maybe you can rebuild it?", thread: createCircularThread([{ text: 'The puppy follows you.' }].concat(lateHouseThread), 2) }, 
        3: { text: "Go to the orchard, maybe there are seeds still left to grow?", thread: createCircularThread([{ text: 'The puppy follows you' }].concat(lateTreeThread), 3) }
     }
    },
    { text: "It only takes two skritches and already you're best friends"},
    { text: "After a day of exploring the farm together you curl up in the field and rest..."},
    { 
      text: "What will you name him?",
      action: namePuppy
    },
    { 
      text: "A month passes...",
      action: finishNamingPuppy
    },
    { text: () => `${puppyName}'s gotten so much bigger already.` },
    { text: () => `You two have gotten pretty good at fending for yourselves, and now ${puppyName}'s bursting with energy.`},
    { text: "To be continued..."}
]

const treeThread = [
    { text: "Searching through torn up roots, it seems all the seeds are cracked orhave been taken by animals..." },
    { text: "Wait!" },
    { text: "You're not sure if you felt it or saw it first. A lifeforce seems to eminate from the seed in your hands...",
      picture: "/assets/game/hand.jpg"
    },
    { text: "What do you do?",
      options: {
         1: { text: "Plant the seed", thread: []},
         2: { text: "Investigate the farmhouse, maybe you can rebuild it?", thread: createCircularThread([{ text: 'The seed is safe in your pocket.' }].concat(lateHouseThread), 2) }, 
         3: { text: "Check the fields, maybe an animal survived?", thread: createCircularThread([{ text: 'The seed is safe in your pocket.' }].concat(latePuppyThread), 3) }
      },
      removePicture: true
    },
    { text: 'That day you went to the well and watered the place were you planted the seed' },
    { text: 'And that night you curled up bseide it, protecting it from maurauding animals.'},
    { text: 'Nothing to do now but wait...'},
    { text: 'A month passes...'},
    { text: 'You wake up under the dappled shade cast by the young saplings branches.' },
    { text: 'At night you sleep on a bed of freshly fallen leaves.'},
    { text: 'Despite being a young tree, it has cast off branches and apples, as if to give to you...'},
    { text: "To be continued..."}
]

let currentThread = [
    { text: "Then apocalypse struck..."},
    { text: "After many dark and fiery nights you awaken..." },
    { text: "You see the ruins of a farmhouse, and feel an irrepressible desire to nurture and create..." },
    { text: "What do you do?",
     options: {
         1: { text: "Investigate the farmhouse, maybe you can rebuild it?", thread: houseThread }, 
         2: { text: "Check the fields, maybe an animal survived?", thread: puppyThread }, 
         3: { text: "Go to the orchard, maybe there are seeds still left to grow?", thread: treeThread }
     }
    }
];
