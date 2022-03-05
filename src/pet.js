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


module.exports = Pet; 