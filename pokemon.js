const inquirer = require('inquirer');
const { questions } = require("./questions");

class pokemon{
    constructor(name){
        this._name = name;
        this._health = 100;
        this._relationship = 5;
        this._alive = true;
        this._status = "Your pokemon is feeling fine.";
    }

    get name(){
        return this._name;
    }

    get health(){
        return this._health;
    }

    get relationship(){
        return this._relationship;
    }

    get alive(){
      return this._alive;
    }

    get stats(){
      console.log({
        name: this._name,
        health: this._health,
        relationship: this._relationship,
      })
    }

    set name(name){
      this._name = name;
    }

    set health(health){
      this._health = health
    }

    set relationship(relationship){
      this._relationship = relationship
    }

    set alive(alive){
      this._alive = alive
    }

    checkStats(){
      if (this._health = 0){
        this._alive = false;
      }
    }
}

module.exports = {
  pokemon,
}