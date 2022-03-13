const inquirer = require('inquirer');
const {questions} = require("./questions");

const { Bulbasaur } = require("./pokemons/bulb");
const { Charmander } = require("./pokemons/char");
const { Squirtle } = require("./pokemons/squir");

async function startGame () {
    let userPokemon;

    const { pokemonSpecies } = await inquirer.prompt(questions.choosePokemon);

    const { pokemonName } = await inquirer.prompt({
        type: "input",
        name: "pokemonName",
        message: "Name your pokemon!",
    });

    if (pokemonSpecies === 'bulbasaur') userPokemon = new Bulbasaur(pokemonName);
    else if (pokemonSpecies === 'charmander') userPokemon = new Charmander(pokemonName);
    else if (pokemonSpecies === 'squirtle') userPokemon = new Squirtle(pokemonName);

    gameMenu();
};

async function gameMenu(userPokemon) {

    this.health -= 5;
    this.relationship -= 5;

    const { GameMenu } = await inquirer.prompt(questions.menuChoices);

    switch (GameMenu) {
        case "status":
            await userPokemon.status();
            break;
        case "nourish":
            await userPokemon.nourish();
            break;
        case "play":
            await userPokemon.activities();
    }

    gameMenu();
};

// async function gameOver(){

// }

startGame();
