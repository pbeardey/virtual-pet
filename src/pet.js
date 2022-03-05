function Pet(name) {
    this.name = name;
    this.age = 0;
}

Pet.prototype.growUp = function () {
    //This method increases the age property by 1
    this.age += 1;
}


module.exports = Pet; 