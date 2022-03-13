const questions = {
    choosePokemon:{
        type: "list",
        name: "pokemonSpecies",
        message: "Choose your Pokemon!",
        choices: [
            {
                key: "1",
                pokemon: "Bulbasaur",
                value: "bulbasaur",
            },
            {
                key: "2",
                pokemon: "Charmander",
                value: "charmander",
            },
            {
                key: "3",
                pokemon: "Squirtle",
                value: "squirtle",
            },
        ],
    },
    menuChoices:{
        type: "list",
        name: "GameMenu",
        message: `What would you like to do with?`,
        choices:[
            {
                key: "1",
                menu: "Check Status",
                value: "status",
            },
            {
                key: "2",
                menu: "Nourish your Pokemon",
                value: "nourish",
            },
            {
                key: "3",
                menu: "Play with your Pokemon",
                value: "play",
            },
            {
                key: "4",
                menu: "Quit Game",
                value: "quit",
            },
        ]
    },
    bulbasaurMenu:{
        type: "list",
        name: "Bulbasaur's Menu",
        message: `What would you like to give?`,
        choices: [
            {
                key: '1',
                option: 'Grass',
                value: 'grass'
            },
            {
                key: '2',
                option: 'Bugs',
                value: 'bugs'
            },
            {
                key: '3',
                option: 'Water',
                value: 'water'
            },
            {
                key: '4',
                option: 'Sunshine',
                value: 'sunshine'
            }
        ]
    },
    bulbasaurActivities:{
        type: "list",
        name: "Bulbasaur's Activities",
        message: `How would you like to play with?`,
        choices: [
            {
                key: '1',
                option: 'Swim', 
                value: 'swim'
            },
            {
                key: '2',
                option: 'Play Catch',
                value: 'playCatch'
            },
            {
                key: '3',
                option: 'Meditate',
                value: 'meditate'
            },
            {
                key: '4',
                option: 'Gardening',
                value: 'gardening'
            }
        ]
    },
    charmanderMenu:{
        type: "list",
        name: "Charmander's Menu",
        message: `What would you like to give?`,
        choices: [
            {
                key: '1',
                option: 'Coal',
                value: 'coal'
            },
            {
                key: '2',
                option: 'Wood',
                value: 'wood'
            },
            {
                key: '3',
                option: 'Gasoline',
                value: 'gasoline'
            },
            {
                key: '4',
                option: 'Fire Lighter',
                value: 'fireLighter'
            }
        ]
    },
    charmanderActivities:{
        type: "list",
        name: "Charmander's Activities",
        message: `How would you like to play with?`,
        choices: [
            {
                key: '1',
                option: 'Skateboard', 
                value: 'skateboard'
            },
            {
                key: '2',
                option: 'Swimming',
                value: 'swimming'  //might need to change value name if this interferes with bulbactivities
            },
            {
                key: '3',
                option: 'Play Football',
                value: 'playFootball'
            },
            {
                key: '4',
                option: 'Play With Fireworks',
                value: 'fireworks'
            }
        ]
    },
    squirtleMenu:{
        type: "list",
        name: "Squirtle's Menu",
        message: `What would you like to give?`,
        choices: [
            {
                key: '1',
                option: 'Tuna Steak',
                value: 'tuna'
            },
            {
                key: '2',
                option: 'Water',
                value: 'water'
            },
            {
                key: '3',
                option: 'Lobster',
                value: 'lobster'
            },
            {
                key: '4',
                option: 'Plankton',
                value: 'plankton'
            }
        ]
    },
    squirtleActivities:{
        type: "list",
        name: "Squirtle's Activities",
        message: `How would you like to play with?`,
        choices: [
            {
                key: '1',
                option: 'Sun Bathing', 
                value: 'sun'
            },
            {
                key: '2',
                option: 'Swimming',
                value: 'swimming'
            },
            {
                key: '3',
                option: 'Have a Nap',
                value: 'nap'
            },
            {
                key: '4',
                option: 'Play Water Polo',
                value: 'polo'
            }
        ]
    },
}


module.exports = {
    questions,
}