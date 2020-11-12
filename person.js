class Person {
    constructor(name, companyName){
        this.name = name;
        this.companyName = companyName;
    }

    greetings(){
        console.log(`Hello I'm ${this.name} working for ${this.companyName}`);
    }
}

module.exports = Person;
console.log(__filename);