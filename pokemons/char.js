const inquirer = require("inquirer");

const {questions} = require("../questions");
const {pokemon} = require("../pokemon");

class Charmander extends pokemon{
    constructor(name){
        super(name);
    }

    async nourish(){

        const {menu} = await inquirer.prompt(questions.bulbasaurMenu);

        switch (menu) {
            case "grass":
                this.health(+4);
                this.relationship(+2);
                break;
            case "bugs":
                this.health(this.health+2);
                this.relationship(this.relationship-3);
                break;
            case "water":
                this.health(this.health+3);
                this.relationship(this.relationship+3);
                break;
            case "sunshine":
                this.health(this.health+4);
                this.relationship(this.relationship+2);
        }
    }

    async activities(){
        const {activities} = await inquirer.prompt(questions.bulbasaurActivities);

        switch (activities) {
            case "grass":
                this.health(this.health+4);
                this.relationship(this.relationship+2);
                break;
            case "bugs":
                this.health(this.health+2);
                this.relationship(this.relationship-3);
                break;
            case "water":
                this.health(this.health+3);
                this.relationship(this.relationship+3);
                break;
            case "sunshine":
                this.health(this.health+4);
                this.relationship(this.relationship+2);
        }
}

}

module.exports = {
    Charmander,
}