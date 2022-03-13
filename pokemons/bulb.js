const inquirer = require("inquirer");

const {questions} = require("../questions");
const {pokemon} = require("../pokemon");

class Bulbasaur extends pokemon{
    constructor(name){
        super(name);
    }

    async nourish(){
        const { nourish } = await inquirer.prompt(questions.bulbasaurMenu);
        
        switch (nourish) {
            case "grass":
                this.health += 4;
                this.relationship += 2;
                console.log(`Your ${this.name} seemed to like that`);
                break;
            case "bugs":
                this.health += 2;
                this.relationship -= 3;
                console.log(`Your ${this.name} seems healthier but didn't really like that`);
                break;
            case "water":
                this.health += 3;
                this.relationship += 3;
                console.log(`Your ${this.name} somewhat liked that`);
                break;
            case "sunshine":
                this.health += 4;
                this.relationship += 2;
                console.log(`Your ${this.name} really liked that`);
        }
    }

    async activities(){
        const { activities } = await inquirer.prompt(questions.bulbasaurActivities);

        switch (activities) {
            case "swim":
                this.health(this.health-3);
                this.relationship(this.relationship-5);
                console.log(`Your ${this.name} didn't seem to like that`);
                break;
            case "playCatch":
                this.health(this.health-5);
                this.relationship(this.relationship+2);
                console.log(`Your ${this.name} didn't seemed to like that`);
                break;
            case "meditate":
                this.health(this.health+3);
                this.relationship(this.relationship+1);
                console.log(`Your ${this.name} found that okay`);
                break;
            case "gardening":
                this.health(this.health-5);
                this.relationship(this.relationship+2);
                console.log(`Your ${this.name} really liked that`);
        }
    }
}

module.exports = {
    Bulbasaur,
}
