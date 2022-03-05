function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function () {
    //This method increases the age property by 1
    this.age += 1;
    this.hunger +=5;
    this.fitness -=3;
}

Pet.prototype.walk = function () {
    //This method increases the fitness by 4 upto a max value of 10;
    const MAX_FITNESS = 10;
    if (this.fitness + 4 <= MAX_FITNESS) {
        this.fitness +=4;
    } else {
        this.fitness = MAX_FITNESS;
    }
}


module.exports = Pet; 